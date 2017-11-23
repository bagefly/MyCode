//通过url内容，得到商品id，查询商品，并展示到页面中
var str = location.search.substr(1);

var goodId = str.split("=");

//		console.log(goodId[1]);  



$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_goods.php",
    "type": "GET",
    "data": {
        "goods_id": goodId[1]
    },
    "dataType": "json",
    "success": function(response){
        console.log(response);
        
        var obj = response;
    
        for(var i=0;i<obj.data.length;i++){
            
            
            $("#box").append('<li><img src="' + obj.data[i].goods_thumb + '" alt="" /><p><a href="detail.html?goods_id='+obj.data[i].goods_id+'">商品名称:' +obj.data[i].goods_name+ '</a></p><p>商品简介:' +obj.data[i].goods_desc+  '</p><p class="price">商品价格:￥' +obj.data[i].price+  '</p></li>');
            
        }
    }
})