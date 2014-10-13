var SideBarIndividual = Backbone.Marionette.ItemView.extend({
	template: _.template('<%=name%>'),
	tagName:'li trigger-click',
	className: 'nav-li',
	events: {
		'click.nav-li' : 'dataClick'
	},
	dataClick: function(){
		switch ( this.model.get('trigger') ) {
			case 'movies':
				var content = new MoviesView();
				App.mainRegion.show(content);
			break;
			case 'genres':
				var content = new GenreCollectionView({collection: categories});
				App.mainRegion.show(content);
			break;
			case 'cinema':
				var content = new MoviesView({type:"cinema"});
				App.mainRegion.show(content);
			break;
			case 'featured':
				var content = new MoviesView({type:"featured"});
				App.mainRegion.show(content);
			break;
			case 'years':
				var content = new YearView();
				App.mainRegion.show(content);
			break;
			case 'countries':
				console.log("countries");
			break;
			case 'language':
				console.log("language");
			break;
			default:
				var content = new HomeView();
				App.mainRegion.show(content);
		}
	}
});

var SideBarView = Backbone.Marionette.CollectionView.extend({
	initialize: function(){
		this.collection = new NavCollection([
			{name: 'Home', url: '#Home', trigger: 'home'},
			{name: 'Movies', url: '#Movies', trigger: 'movies'},
			{name: 'Genres', url: '#Genres', trigger: 'genres'},
			{name: 'Cinema', url: '#Cinema', trigger: 'cinema'},
			{name: 'Featured', url: '#Featured', trigger: 'featured'},
			{name: 'Years', url: '#Years', trigger: 'years'},
			{name: 'Countries', url: '#Countries', trigger: 'countries'},
			{name: 'Language', url: '#Language', trigger: 'language'},
		]);
	},
	childView: SideBarIndividual,
	tagName: 'ul',
	className: 'nav-holder'
})