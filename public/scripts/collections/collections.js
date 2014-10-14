var Movies = Parse.Collection.extend({
	initialize: function(){
		this.query = new Parse.Query( Movie );
		this.query.include( 'details' );
		
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

	//get collection by year
	getMovieByYear: function( year ){
		this.query.equalTo('year', year);

		var getMovie = this.query.collection();
		getMovie.fetch();

		return getMovie;
	},

	//get collection by details
	getMovieByDetails: function( genre ){
		this.query.equalTo('genre', genre);

		var getGenre = this.query.collection();
		getGenre.fetch();

		return getGenre;
	},

	// getMovieByCountry: function(){
	// 	this.filter(function( model ){
	// 		console.log(model.get( 'details' ))
	// 	});

	// 	// return countries;
	// },

	//search for title
	searchForTitle: function( title ) {
		var temp = [];
		this.filter(function( model ){
			model.get( 'name' ).toLowerCase().split(' ')
			.map(function( name ){
				if (name == title.toLowerCase()) {
					temp.push( model );
				};
			});
		});
		
		return this.reset( temp );
	},

	//search for director
	searchForDirector: function( director ) {
		var temp = [];
		this.filter(function( model ){
			model.get('details').attributes.directed_by
			.toLowerCase().split(' ')
			.map(function( name ){
				if (name == director.toLowerCase()) {
					temp.push( model );
				};
			});
		});
		return this.reset( temp );
	},

	//search for actor
	searchForActor: function( actor ) {
		var temp = [];
		this.filter(function( model ){
			model.get( 'details' ).attributes.actor
			.map( function( names ){
				names.toLowerCase().split(' ')
					.map(function( name ){
						if (name == actor.toLowerCase()) {
							temp.push( model );
						}
					});
			})
		});
		return this.reset(temp);
	},


});