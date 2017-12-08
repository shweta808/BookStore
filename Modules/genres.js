var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	date_created:{
		type:Date,
		default:Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

//get genres
module.exports.getGenres = function (callback , limit){
	Genre.find(callback).limit(limit);
}

//get genre by id 
module.exports.getGenreByID = function (id , callback){
	Genre.findById(id,callback);
}

//add genre

module.exports.addGenre = function( genre , callback ){
	Genre.create( genre , callback ); 
}