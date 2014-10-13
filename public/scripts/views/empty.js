var EmptyView = Backbone.Marionette.ItemView.extend({
	initialize: function(){
		console.log("empty");
	},
	template: _.template('empty collection'),
	className: 'position'
});