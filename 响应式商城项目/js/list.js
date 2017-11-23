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

var str = location.search.substr(1);

var catId = str.split("=");

for(var i = 0 ; i < catArr.length; i++){
    if(catId[1] === catArr[i].cat_id ){
        $("#cat").html(catArr[i].cat_name);
    }
}
// $.ajax({
//     "url": "http://h6.duchengjiu.top/shop/api_goods.php",
//     "type": "GET",
//     "data": {
//         "cat_id": catId[1],
//         "pagesize":20
//     },
//     "dataType": "json",
//     "success":function(response){
//         var obj = response;
//         for(var i = 0; i < obj.data.length;i++){
//             $("#goodList").append('<li class="col-md-4"><img src="'+obj.data[i].goods_thumb+'"alt=""/><p class="goods_name"><a href="detail.html?goods_id='+obj.data[i].good_id+'">'+ obj.data[i].goods_name+'</a></p><p class="price">￥' +obj.data[i].price+  '</p></li>');
//         }
//     }
// })

//信号量
var page = 1;
showShop(page);
function showShop(page){
    
    $.ajax({
        "url":"http://h6.duchengjiu.top/shop/api_goods.php?page="+page+"&pagesize=20"+"&cat_id="+catId[1],
        "type":"GET",
        "dataType": "json",
        "success": function(response){
            console.log(response);
            
            //添加数据
            for(var i=0;i<response.data.length;i++){
                var obj = response;
                $("#goodList").append('<li class="col-md-3 col-sm-6 col-xs-12"><img src="'+obj.data[i].goods_thumb+'"alt=""/><p class="goods_name"><a href="detail.html?goods_id='+obj.data[i].good_id+'">'+ obj.data[i].goods_name+'</a></p><p class="price">￥' +obj.data[i].price+  '</p></li>');
            }
            //分页
            for(var j=0;j<18;j++){
                $("#ButtonCenter").append( $('<span>'+(j+1)+'</span>') );
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
    $("#goodList").html('s');
    $("#ButtonCenter").html('');
    showShop(page);
    $("#ButtonCenter span").eq(page).css("backgroundColor","#ff9100").siblings().css("backgroundColor","");
})

$("#ButtonNext").click(function(){
    //信号量增加
    page++;
    //范围
    if(page >= 18) page = 18;
    //清空数据
    $("#goodList").html('');
    $("#ButtonCenter").html('');
    showShop(page);
    $("#ButtonCenter span").eq(page).css("backgroundColor","#ff9100").siblings().css("backgroundColor","");
})

//分页的点击事件
$("#ButtonCenter").ready(function(){
    $("#ButtonCenter").on("click",function(event){
    event = event || window.event;
    var target = event.target || event.srcElement;
//	console.log(target.nodeName)
    if( target.nodeName === "SPAN" ){
        //得到当前分页的内容，存入信号量
        page = target.innerText;
        $("#goodList").html('');
        $("#ButtonCenter").html('');
        showShop(page);
        $(target).css("backgroundColor","#ff9100").siblings().css("backgroundColor","");
        
        console.log(target);
    }
})
})