var CountryView = Backbone.Marionette.ItemView.extend({
	template: _.template('test')
});
var CountriesView = Backbone.Marionette.CollectionView.extend({
	initialize: function(){
		// this.collection = new Movies().getMovieByCountry());
	},
	childView: CountryView,
});