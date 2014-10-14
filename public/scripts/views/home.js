var HomeView = Backbone.Marionette.LayoutView.extend({
	template: '#home',
	regions: {
		cinemaRegion: '#cinema-region',
		featuredRegion: '#featured-region'
	},
	className:'small-13 columns',
	onShow: function(){
		var featuredView = new FeaturedView();
		this.featuredRegion.show(featuredView);
		
		var cinemaView = new CinemaView();
		this.cinemaRegion.show(cinemaView);
	}
});

var FeaturedIndividual = Backbone.Marionette.ItemView.extend({
	template: _.template('<div class="content small-5 columns" data-click><div><img class="image-holder" src="<%= image%>"></div><div class="movie-name"><%= name%></div></div>')
});

var FeaturedView = Backbone.Marionette.CollectionView.extend({
	initialize: function(options){
		this.collection = new Movies().getFeatures();
	},
	// emptyView: EmptyView,
	childView: FeaturedIndividual,
	// className: 'position'
});


var CinemaIndividual = Backbone.Marionette.ItemView.extend({
	template: _.template('<div class="content small-5 columns" data-click><div><img class="image-holder" src="<%= image%>"></div><div class="movie-name"><%= name%></div></div>')
});

var CinemaView = Backbone.Marionette.CollectionView.extend({
	initialize: function(options){
		this.collection = new Movies().getCinemas();
	},
	// emptyView: EmptyView,
	childView: CinemaIndividual,
	// className: 'position'
});
