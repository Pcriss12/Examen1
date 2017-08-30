var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
        code: Number,
        name: String,
        nickName: String,
        money: Number,
        url: String,
        photo: String
	
});

module.exports = mongoose.model('Player', PlayerSchema);