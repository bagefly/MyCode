
//通过url内容，得到商品id，查询商品，并展示到页面中
var str = location.search.substr(1);

var goodId = str.split("=");


$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_goods.php",
    "type": "GET",
    "data": {
        "goods_id": goodId[1]
    },
    "dataType": "json",
    "success": function (response) {
        var obj = response.data[0];
        var html = `<div class="smallPic" id="smallPic">
                        <div class="zoom" id="zoom" style="display:none;top:0px;left:0px;"></div>
                    </div>
                    <div class="bigPic" id="bigPic" style="display:none;background-position:0px 0px;">
                    </div>
                    <div class="goods_slider">
                        <button id="prevBtn"><</button>
                        <ul class="goods_imgList" id="goods_imgList">
                            <li><img class="active" src="${obj.goods_thumb}" alt="" /></li>
                            <li><img src="${obj.goods_thumb}" alt="" /></li>
                            <li><img src="${obj.goods_thumb}" alt="" /></li>
                        </ul>
                        <button id="nextBtn">></button>
                    </div>
                    <ul class="share_save">
                        <li class="share_s_list goods_share">
                            <i class="glyphicon glyphicon-share"></i>
                            <p class="share_s_text">分享</p>
                        </li>
                        <li class="share_s_list goods_save">
                            <i class="glyphicon glyphicon-star"></i>
                            <p class="share_s_text">收藏（已有2017人收藏）</p>
                        </li>`
        $(".goods_imgbox").html(html);
        $("#smallPic").css("backgroundImage", "url(" + obj.goods_thumb + ")");
        $("#bigPic").css("backgroundImage", "url(" + obj.goods_thumb + ")");
        var html1 = `
                    `
        $(".goods_info").append('<p>' + obj.goods_name + '</p><p>￥' + obj.price + '元</p>');
        //鼠标事件监听

        var rate = 400 / 150;
        $("#smallPic").mouseover(function () {
            // console.log(1);
            $("#zoom").css("display", "block");
            $("#bigPic").css("display", "block");
        });
        $("#smallPic").mouseout(function () {

            $("#zoom").css("display", "none");
            $("#bigPic").css("display", "none");
        });
        $("#smallPic").mousemove(function (e) {
           
            var e = e || window.e;
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
            console.log(1);
            var x = e.clientX - (getAllTop($("#smallPic").get(0)) - scrollTop - 75) ;
            var y = e.clientY - (getAllLeft($("#smallPic").get(0)) - scrollLeft - 75);

            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (x > 150) x = 150;
            if (y > 150) y = 150;

            $("#zoom").css("left", x + "px");
            $("#zoom").css("top", y + "px");
            $("#bigPic").css("backgroundPosition", -x * rate + "px " + -y * rate + "px");
        })
        function getAllTop(obj1) {

            var allTop = obj1.offsetTop;

            var currentObj = obj1;
            while (currentObj = currentObj.offsetParent) {
                allTop += currentObj.offsetTop;
            }
            return allTop;
        }
        
        function getAllLeft(obj2) {
            var allLeft = obj2.offsetLeft;

            var currentObj = obj2;

            while (currentObj = currentObj.offsetParent) {
                allLeft += currentObj.offsetLeft;
            }
            return allLeft;
        }
        //当前图片的信号量,构造图片改变函数
        var idx = 0;
        function changePic(idx){
            var imgUrl = $("#goods_imgList li img").eq(idx).attr("src");
            // console.log(imgUrl);
            $("#smallPic").css("backgroundImage", "url(" + imgUrl + ")");
            $("#goods_imgList li img").eq(idx).addClass("active").parent().siblings().children().removeClass("active");
        };
        //小图片绑定监听事件
        $("#goods_imgList").click(function(e){
            var e = e || window.e;
            var target = event.target || event.srcElement;
            	// console.log(target.nodeName)
                if( target.nodeName === "IMG" ){
                    target = $(target);
                    idx = $(target).parent().index();
                    // console.log(idx);
                    // $(target).addClass("active").parent().siblings().children().removeClass("active");
                    changePic(idx);
                }
        });
        //左侧按钮点击事件
        $("#prevBtn").click(function(){
            idx--;
            if(idx < 0) idx = 2;
            changePic(idx);
        });
        //右侧按钮点击事件
        $("#nextBtn").click(function(){
            idx++;
            if(idx > 2) idx = 0;
            changePic(idx);
        });
        
    }
})

