var GameBox = {
    rows: 10,
    cols: 10,
    allTds : [],
    food : null,
    start: function () {
        //  var oTable = document.createElement("table");

        //  for(var i = 1 ; i <= GameBox.rows; i++){
        //     var oTr = document.createElement("tr");

        //     for(var j = 1; j <=GameBox.cols; j++){
        //         var oTd = document.createElement("td");
        //         oTr.appendChild(oTd);
        //     }
        //     oTable.appendChild(oTr);
        //  }
        //  document.body.appendChild(oTable);
        GameBox.init();// 游戏初始化
        this.food = new Food();
    },
    init: function () {
        var oTable = document.createElement("table");

        for (var i = 0; i < GameBox.rows; i++) {
            var oTr = document.createElement("tr");
            var arr = [];
            for (var j = 0; j < GameBox.cols; j++) {
                var oTd = document.createElement("td");
                oTr.appendChild(oTd);
                arr.push(oTd);
            }
            GameBox.allTds.push(arr);
            oTable.appendChild(oTr);
        }
        document.body.appendChild(oTable);
    }

}