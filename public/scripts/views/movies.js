var IndividualView = Backbone.Marionette.ItemView.extend({
	template: '#content',
	className: 'content-holder'
});

var ContentView = Backbone.Marionette.CollectionView.extend({
	childView: IndividualView,
	className: 'position'
});

