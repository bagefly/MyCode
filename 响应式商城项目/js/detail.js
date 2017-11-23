
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
    "success": function(response){
        var obj = response.data[0];
        $(".goods_imgbox").append('<img src="'+obj.goods_thumb+'" alt="" />');
        $(".goods_info").append('<p>'+obj.goods_name+'</p><p>￥'+obj.price+'元</p>');
    }
})


 