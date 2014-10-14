var SideBarIndividual = Backbone.Marionette.ItemView.extend({
	template: _.template('<img class="icon" src="<%=images%>"><%=name%>'),
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
				var content = new MoviesView({types:"cinema"});
				App.mainRegion.show(content);
			break;
			case 'featured':
				var content = new MoviesView({types:"featured"});
				App.mainRegion.show(content);
			break;
			case 'years':
				var content = new YearView();
				App.mainRegion.show(content);
			break;
			case 'countries':
				var content = new CountriesView();
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
			{name: 'Home', url: '#Home', trigger: 'home', images: 'images/home.png'},
			{name: 'Movies', url: '#Movies', trigger: 'movies', images: 'images/movies.png'},
			{name: 'Genres', url: '#Genres', trigger: 'genres', images: 'images/video.png'},
			{name: 'Cinema', url: '#Cinema', trigger: 'cinema', images: 'images/cinema.png'},
			{name: 'Featured', url: '#Featured', trigger: 'featured', images: 'images/star.png'},
			{name: 'Years', url: '#Years', trigger: 'years', images: 'images/year.png'},
			{name: 'Countries', url: '#Countries', trigger: 'countries', images: 'images/three.png'},
			{name: 'Language', url: '#Language', trigger: 'language', images: 'images/group.png'},
		]);
	},
	childView: SideBarIndividual,
	tagName: 'ul',
	className: 'nav-holder columns'
})