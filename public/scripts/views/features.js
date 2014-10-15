var FeaturedView = Backbone.Marionette.CollectionView.extend({
	initialize: function(options){
		this.collection = new Movies().getFeatures();
	},
	childView: FeaturedIndividualView,
});