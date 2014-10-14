var DetailView = Backbone.Marionette.ItemView.extend({
	template: '#details',
	className: 'small-13 columns',
	serializeData: function(){
		var data = {};
		data =  _.partial(this.serializeModel, this.model).apply(this, arguments);
		data.details = this.model.get('details').toJSON();

		return data;
	},
	templateHelpers: {
		showGenre: function(){
			return this.genre.toString().split(',').join(', ');
		},
		showActors: function(){
			return this.details.actor.toString().split(',').join(', ');
		}
	}
});