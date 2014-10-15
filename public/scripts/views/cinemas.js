var CinemaView = Backbone.Marionette.CollectionView.extend({
	initialize: function(options){
		this.collection = new Movies().getCinemas();
	},
	childView: CinemaIndividualView,
});
