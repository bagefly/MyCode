(function(){
    var DrawTable = function(canvas,listData){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        //线宽
        this.lineWidth = 2;
        //页面中可用的宽度
        this.width = this.canvas.width - this.lineWidth;
        //页面中可用的高度
        this.height = this.canvas.height - this.lineWidth;
        //行
        this.row = listData.row;
        //列数
        this.col = listData.data.length;
        //高度数组
        this.itemHeight = listData.data;
        //柱状图的宽度
        this.itemWidth = 100;
        //柱状图的间距
        this.itemSpace = (this.width - this.itemWidth * this.col) / this.col;
        //行高
        this.lineHeight = this.height / this.row;

        this.addTable();
    }

    //画线api begin{x:0,y:0}
    DrawTable.prototype.addLine = function(begin,end){
        this.ctx.beginPath();
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.moveTo(begin.x+1,begin.y+1);
        this.ctx.lineTo(end.x+1,end.y+1);
        this.ctx.stroke();
    }

    //画矩形api
    DrawTable.prototype.addRect = function(x,height){
        this.ctx.beginPath();
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(x,this.height-height,this.itemWidth,height);
    }

    //画表格
    DrawTable.prototype.addTable = function(){
        //画左侧的竖线
        this.addLine({x:0,y:0},{x:0,y:this.height});
        //画右侧的竖线
        this.addLine({x:this.width,y:0},{x:this.width,y:this.height});
        //画行
        for(var i = 0; i < this.row; i++){
            //设置开始和结束的坐标，x值：从0到页面可用宽度，y值：行高*i
            var begin = {x:0,y:this.lineHeight * i};
            var end = {x:this.width,y:this.lineHeight * i};
            this.addLine(begin,end);
        }

        //循环列数的值
        for(var i = 0; i < this.col; i++){
            //调用矩形方法
            //柱形图的间距   this.itemSpace / 2  得到两边的间距
            //this.itemWidth + this.itemSpace  柱宽 + 间距
            this.addRect(this.itemSpace / 2 + i*(this.itemWidth + this.itemSpace),this.itemHeight[i]);
        }
    }

    window.DrawTable = DrawTable;
})()
