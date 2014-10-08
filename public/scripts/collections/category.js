var Categories = Parse.Collection.extend({
  model: category
});

var query = new Parse.Query(category);
query.descending('createdAt');


var categories = query.collection(),
	dfd = $.Deferred();

categories.fetch({
	success: function(data){
		dfd.resolve(data);
	}
});

$.when(dfd.promise()).done(function(data){
	// categories.each(function(model){
	// 	console.log(model);
	// });
});