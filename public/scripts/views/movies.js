var MoviesView = Backbone.Marionette.CompositeView.extend({
	initialize: function(options){
		if ( _.isUndefined( options ) ) {
			this.collection = new Movies();
		} else if( options.types ){
			console.log( options.types );
			switch ( options.types ) {
				case 'cinema':
					console.log(options.types);
					this.collection = new Movies().getCinemas();
				break;
				case 'featured':
					this.collection = new Movies().getFeatures();
				break;
				default:
					this.collection = new Movies();
				break;
			}
		} else if ( options.year ) {
			this.collection = new Movies().getMovieByYear( +options.year );
		} else if ( options.genre ) {
			this.collection = new Movies().getMovieByDetails( options.genre );
		} else if ( options.searched ) {
			this.collection = options.searched;
		}
	},
	// emptyView: EmptyView,
	childView: IndividualView,
	template: _.template('<div class="movie-font">Movie</div>'),
	className: 'small-13 columns home-wrapper2'
});
