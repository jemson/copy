var MoviesView = Backbone.Marionette.CollectionView.extend({
	initialize: function(options){
		if ( _.isUndefined(options) ) {
			this.collection = new Movies();
		} else {
			switch (options.type) {
				case 'cinema':
					this.collection = new Movies().getFeatures();
				break;
				case 'featured':
					this.collection = new Movies().getCinemas();
				break;
				default:
					console.log('default')
					this.collection = new Movies();
				break;
			}
		}
		
	},
	childView: IndividualView,
	className: 'position'
});

