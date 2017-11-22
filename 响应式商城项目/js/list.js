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
$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_goods.php",
    "type": "GET",
    "data": {
        "cat_id": catId[1]
    },
    "dataType": "json",
    "success":function(response){
        var obj = response;
        for(var i = 0; i < obj.data.length;i++){
            $("#goodList").append('<li><img src="'+obj.data[i].goods_thumb+'"alt=""/><p><a href="detail.html?goods_id='+obj.data[i].good_id+'">商品名称：'+ obj.data[i].goods_name+'</a></p><p>商品简介：'+obj.data[i].goods_desc+'</p><p class="price">商品价格:￥' +obj.data[i].price+  '</p></li>');
        }
    }
})