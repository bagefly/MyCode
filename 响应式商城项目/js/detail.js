
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
        var html1 = `<div class="goods_desc">
                        <a href="list.html?cat_id=${obj.cat_id}"><h3>【${obj.cat_id}】类商品</h3></a>
                        <h4>品名：${obj.goods_name}</h3>
                        <h6 class="item_number">货号：${obj.goods_id}</h6>
                        <hr>
                        <h4 class="price">价格：<span>￥ ${obj.price}元</span></h4>
                        <hr>
                        <h6 class="activity">活动：  <span>订单满9999元赠送价值1199元时尚大礼包</span></h6>
                        <hr>
                        <h6 class="goods_style">
                            款式：
                            <span id="fashion" class="active">时尚</span>
                            <span id="classic">经典</span>
                        </h6>
                        <h6 class="goods_number">
                            数量：
                            <div class="num">
                                <button id="minusBtn">-</button>
                                <input type="text" value="1" id="goodsNum" />
                                <button id="plusBtn">+</button>
                            </div>
                        </h6>
                        <hr>
                        <div class="goods_send">
                            <h6>发货门店&nbsp;&nbsp;&nbsp;&nbsp;此货品将由来客多线下门店为您发货。</h6>
                            <h6>发货地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;互联网新村直发</h6>
                            <h6>发货时效&nbsp;&nbsp;&nbsp;&nbsp;预计1-2个工作日发货，延迟发货慢必赔！</h6>
                            <h6>温馨提示&nbsp;&nbsp;&nbsp;&nbsp;本商品 有质量问题支持7天退换货</h6>
                            <h6>包邮政策&nbsp;&nbsp;&nbsp;&nbsp;白金钻石顺丰包邮，注册用户满99元免邮</h6>
                        </div>
                        <div class="add_cart" id="add_cart">
                            <span class="glyphicon glyphicon-shopping-cart">
                                加入购物车
                            </span>
                            <div id="promptBox">
                                <div class="blank"></div>
                                <span class="glyphicon glyphicon-eye-open">
                                "请登录后才能加入购物车！"
                                </span>
                            </div>
                        </div>
                    </div>
                    `
        $(".goods_info").append(html1);
        //鼠标事件监听

        var rate = 300 / 150;
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

            var x = e.clientX - (getAllTop($("#smallPic").get(0)) - scrollTop) - 75 ;
            var y = e.clientY - (getAllLeft($("#smallPic").get(0)) - scrollLeft) - 75;

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
        //款式点击事件
        $(".goods_desc .goods_style span").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
        //数量加减按钮
        var num ;
        $("#minusBtn").click(function(){
            num = $("#goodsNum").val();
            num--;
            if(num < 1) num = 1;
            $("#goodsNum").val(num);
        });
        
        $("#plusBtn").click(function(){
            num = $("#goodsNum").val();

            num++;
            $("#goodsNum").val(num);
        })

        //添加商品到购物车
        $("#add_cart").click(function(){
            //判断当前是否登录，没登录无法加入购物车，提示用户，并跳转到登录页面，把当前路径发送给登录页面
			if(!localStorage.getItem("token")){
                $("#promptBox").show();
                setTimeout(function(){
                    $("#promptBox").fadeOut();
                    location.href = "login.html#callback=" + location.href;
                }, 2000);
            }
            var goods_number = $("#goodsNum").val();
            $.ajax({
				"url":"http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.getItem("token"),
				"type":"POST",
				"dataType": "json",
				"data": {
					"goods_id": goodId[1],
					"number": goods_number
				},
				"success": function(response){
                    console.log(response);
					if(response.code === 0){
                        
                        $("#promptBox span").html("恭喜您，添加成功！");
                        $("#promptBox").show();
                        setTimeout(function(){
                            $("#promptBox").animate({"left": "205px","top":"-800px"},1000,function(){
                                $("#promptBox").fadeOut();
                                $("#promptBox").css({"left": "0px","top":"-15px"})
                            })
                        }, 1000);
                    }
                    if(response.code === 2){
                        $("#promptBox span").html("请更新商品数量");
                        $("#promptBox").show();
                        setTimeout(function(){
                            $("#promptBox").fadeOut();
                            
                        }, 1000);
                    }
				}
			});
        });
        // 右侧同类商品推荐
        
        $.ajax({
            "url": "http://h6.duchengjiu.top/shop/api_goods.php",
            "type": "GET",
            "data": {
                "cat_id": obj.cat_id,
                "page": parseInt(Math.random()*3 + 2),
                "pagesize":3
            },
            "dataType": "json",
            "success": function (resp) {
                var obj3 = resp;
                console.log(obj3);
                for(var i = 0; i < 3; i++){
                    var html2 = `<div class="shop">
                                    <a href="detail.html?goods_id=${obj3.data[i].goods_id}">
                                        <img src="${obj3.data[i].goods_thumb}" alt="" />
                                        <a class="goodsName" href="detail.html?goods_id=${obj3.data[i].goods_id}">
                                            ${obj3.data[i].goods_name}
                                        </a>
                                    </a>
                                </div>`
                    $(".same_kind").append(html2);
                }
            }
        });
            
        $.ajax({
            "url": "http://h6.duchengjiu.top/shop/api_goods.php",
            "type": "GET",
            "data": {
                "cat_id": obj.cat_id,
                "page": 7,
                "pagesize":10
            },
            "dataType": "json",
            "success": function (resp) {
                var obj3 = resp;
                for(var i = 0; i < 6; i++){
                    var html3 = `<div class="shop">
                                    <a href="detail.html?goods_id=${obj3.data[i].goods_id}">
                                        <div class="rank_number">${i+1}</div>
                                        <img src="${obj3.data[i].goods_thumb}" alt="" />
                                        <a class="goodsName" href="detail.html?goods_id=${obj3.data[i].goods_id}">
                                            ${obj3.data[i].goods_name}
                                        </a>
                                    </a>
                                </div>`
                    $(".hot_rank_goods").append(html3);
                }
                for(var j = 6; i < obj3.data.length; i++){
                    var html4 = `<li>
                                    <a href="detail.html?goods_id=${obj3.data[i].goods_id}">
                                        <img src="${obj3.data[i].goods_thumb}" alt="" />
                                    </a>
                                <li>
                            `
                    $(".goods_detail .goods_content .comment_content #love_cat").append(html4);
                }
            }
        });
        // 点击商品详情按钮事件
        $(".goods_detail .goods_tab_menu .goods_details").click(function(){
            $(this).addClass("choose").siblings().removeClass("choose");
            var inx = $(this).index();
            console.log(inx);
            $(".goods_detail .goods_content .goods_content_con").eq(inx).addClass("hiden").siblings().removeClass("hiden");
        })


    }
})

