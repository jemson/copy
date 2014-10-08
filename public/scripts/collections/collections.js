var moviesCollection = Parse.Collection.extend({
  model: movie
});

//original collection
var query = new Parse.Query(movie);
query.descending('createdAt');
var movies = query.collection();
movies.fetch();

movies.fetch({
	success: function(data){
	defer.resolve(data);
	}
});

//cinema collection
query.equalTo('cinema', 'cinema');
var cinema = query.collection();
cinema.fetch();

cinema.fetch({
	success: function(data){
	defer.resolve(data);
	console.log(data);
	}
});

//featured collection
query.equalTo('cinema', 'featured');
var featured = query.collection();
featured.fetch();

featured.fetch({
	success: function(data){
	defer.resolve(data);
	console.log(data);
	}
});


var defer = $.Deferred();

var fetchedCollection = defer.promise();

$.when(fetchedCollection).done(function(data){
});

var NavCollection = Backbone.Collection.extend({
	model: nav,
});


var navTest = new NavCollection([
	{name: 'Home', url: '#Home', trigger: 'home'},
	{name: 'Movies', url: '#Movies', trigger: 'movies'},
	{name: 'Genres', url: '#Genres', trigger: 'genres'},
	{name: 'Cinema', url: '#Cinema', trigger: 'cinema'},
	{name: 'Featured', url: '#Featured', trigger: 'featured'},
	{name: 'Years', url: '#Years', trigger: 'years'},
	{name: 'Countries', url: '#Countries', trigger: 'countries'},
	{name: 'Language', url: '#Language', trigger: 'language'},
]);