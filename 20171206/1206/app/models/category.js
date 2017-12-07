var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//使用module.exports导出
module.exports = mongoose.model('Category',new Schema({
	title: String
}));
