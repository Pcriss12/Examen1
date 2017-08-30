var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
        code: String,
        name: String,
        nickName: String,
        money: String,
        url: String,
        photo: String
	
});

module.exports = mongoose.model('Player', PlayerSchema);