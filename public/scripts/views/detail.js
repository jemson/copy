var DetailView = Backbone.Marionette.ItemView.extend({
	template: '#details',
	className: 'position',
	serializeData: function(){
		var data = {};
		data =  _.partial(this.serializeModel, this.model).apply(this, arguments);
		data.details = this.model.get('details').toJSON();

		return data;
	},
	templateHelpers: {
		showGenre: function(){
			return this.details.genre.toString().split(',').join(', ');
		}
	}
});