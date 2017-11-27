//存储一个分类列表数组
var catArr = [
    {"cat_id": "45","cat_name": "家居"},
    {"cat_id": "55","cat_name": "家具"},
    {"cat_id": "62","cat_name": "文具"},
    {"cat_id": "69","cat_name": "数码"},
    {"cat_id": "77","cat_name": "玩乐"},
    {"cat_id": "82","cat_name": "厨卫"},
    {"cat_id": "92","cat_name": "美食"},
    {"cat_id": "101","cat_name": "男装"},
    {"cat_id": "112","cat_name": "女装"},
    {"cat_id": "125","cat_name": "童装"}];

// 通过url内容，得到分类id，进而可知分类名称，还可查询分类下的商品

var str = location.href.substr(1);

var catId = str.split("=");

for(var i = 0 ; i < catArr.length; i++){
    if(catId[1] === catArr[i].cat_id ){
        $("#cat").html(catArr[i].cat_name);
    }
}

//信号量
var page = 1;
var cat_id = catId[1];
showShop(page,cat_id);
function showShop(page,cat_id){
    
    $.ajax({
        "url":"http://h6.duchengjiu.top/shop/api_goods.php?page="+page+"&pagesize=20"+"&cat_id="+cat_id,
        "type":"GET",
        "dataType": "json",
        "success": function(response){
            console.log(response);
            
            //添加数据
            for(var i=0;i<response.data.length;i++){
                var obj = response;
                $("#goodList").append('<li class="col-md-3 col-sm-6 col-xs-6"><img src="'+obj.data[i].goods_thumb+'"alt=""/><p class="goods_name"><a href="detail.html?goods_id='+obj.data[i].goods_id+'">'+ obj.data[i].goods_name+'</a></p><p class="price">￥' +obj.data[i].price+  '</p></li>');
            }
            //分页
            var maxPage =response.page.page_count;
            if(!maxPage){
                layer.open({
                    content: '暂无该类商品',
                    btn: ["确定"],
                    btn1: function () {
                        location.href = "list.html";
                    },
                    scrollbar: false
                });
            }


            if(maxPage<6){
                for(var i=0;i<=maxPage;i++){
                    $("#ButtonCenter span").eq(i).html(i+1);
                }
                for(var i=maxPage;i<=6;i++){
                    $("#ButtonCenter span").eq(i).hide();
                }
               
            }

            if(page >= 1 && page <= 3){
                $("#ButtonCenter span").eq(0).html("1");
                $("#ButtonCenter span").eq(1).html("2");
                $("#ButtonCenter span").eq(2).html("3");
                $("#ButtonCenter span").eq(3).html("4");
                $("#ButtonCenter span").eq(4).html("…");
                $("#ButtonCenter span").eq(5).html(maxPage-1);
                $("#ButtonCenter span").eq(6).html(maxPage);
                //cur
                $("#ButtonCenter span").eq(page - 1).addClass("page-cur").siblings().removeClass("page-cur");
            }
            else if(page <= maxPage && page >=  maxPage - 2){
                $("#ButtonCenter span").eq(0).html("1");
                $("#ButtonCenter span").eq(1).html("2");
                $("#ButtonCenter span").eq(2).html("…");
                $("#ButtonCenter span").eq(3).html(maxPage-3);
                $("#ButtonCenter span").eq(4).html(maxPage-2);
                $("#ButtonCenter span").eq(5).html(maxPage-1);
                $("#ButtonCenter span").eq(6).html(maxPage);
                //cur
                $("#ButtonCenter span").eq(page - maxPage - 1).addClass("page-cur").siblings().removeClass("page-cur");
            }else{
                $("#ButtonCenter span").eq(0).html("1");
                $("#ButtonCenter span").eq(1).html("…");
                $("#ButtonCenter span").eq(2).html(page - 1);
                $("#ButtonCenter span").eq(3).html(page);
                $("#ButtonCenter span").eq(4).html(page + 1);
                $("#ButtonCenter span").eq(5).html("…");
                $("#ButtonCenter span").eq(6).html(maxPage);
                //cur
                $("#ButtonCenter span").eq(3).addClass("page-cur").siblings().removeClass("page-cur");
            }
        }
    });
    
}

$("#ButtonPrev").click(function(){
    //信号量增加
    page--;
    //范围
    if(page <= 1) page = 1;
    //清空数据
    $("#goodList").html('');
    showShop(page,cat_id);
    
})

$("#ButtonNext").click(function(){
    //信号量增加
    page++;
    
    //清空数据
    $("#goodList").html('');
    showShop(page,cat_id);
    
})

//分页的点击事件
$("#ButtonCenter").ready(function(){
    $("#ButtonCenter").on("click",function(event){
    event = event || window.event;
    var target = event.target || event.srcElement;
//	console.log(target.nodeName)
    if( target.nodeName === "SPAN" ){
        if(target.innerHTML == "…"){
            return;
        }
        //得到当前分页的内容，存入信号量
        page = parseInt(target.innerText);
        $("#goodList").html('');
        showShop(page,cat_id);
    
    }
})
})