var Movies = Parse.Collection.extend({
	initialize: function(){
		this.query = new Parse.Query(Movie);
		this.query.include('details');
		this.fetch();
	},
	model: Movie,
	
	//featured collection
	getFeatures: function(){
		this.query.equalTo('cinema', 'featured');
		var featured = this.query.collection();
		featured.fetch();

		return featured;
	},

	//cinema collection
	getCinemas: function() {
		this.query.equalTo('cinema', 'cinema');

		var cinema = this.query.collection();
		cinema.fetch();

		return cinema;
	},

	getMovieByYear: function(year){
		this.query.equalTo('year', year);

		var getMovie = this.query.collection();
		getMovie.fetch();

		return getMovie;
	},

	getMovieByDetails: function(genre){
		console.log(genre);
		this.query.equalTo('genre', genre);

		var getGenre = this.query.collection();
		getGenre.fetch();

		return getGenre;
	},

});