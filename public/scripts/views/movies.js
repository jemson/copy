var MoviesView = Backbone.Marionette.CollectionView.extend({
	initialize: function(options){
		if ( _.isUndefined( options ) ) {
			this.collection = new Movies();
		} else if ( options.type ) {
			switch ( options.type ) {
				case 'cinema':
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
	className: 'small-13 columns'
});
