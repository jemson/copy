var SearchView = Backbone.Marionette.ItemView.extend({
	template: '#search',
	ui: {
		text : 'input',
		select: 'select'
	},
	events: {
		'keyup' : 'findModel',
	},
	findModel: function(){
		console.log(this.collection);
		console.log(this.ui.text.val());
		console.log(this.ui.select.val());
	}
});