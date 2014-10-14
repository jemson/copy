var SearchView = Backbone.Marionette.ItemView.extend({
	initialize: function(){
		this.collection = new Movies();
	},
	className: 'small-6 row right',
	template: '#search',
	ui: {
		text : 'input',
		select: 'select'
	},
	events: {
		'keyup' : 'findModel',
	},
	findModel: function(e){
		var text = this.ui.text.val();
		var attr = this.ui.select.val();
			
		if ( e.keyCode == 13) {

			switch (attr) {
				case 'title':
					var results = this.collection.searchForTitle(text);
				break;
				case 'director':
					var results = this.collection.searchForDirector(text);
				break;
				case 'actor':
					var results = this.collection.searchForActor(text);
				break;
			}
			
			var content = new MoviesView({searched: results});
			App.mainRegion.show(content);
		} 
	}
});