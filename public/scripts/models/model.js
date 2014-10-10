var Movie = Parse.Object.extend({
	initialize: function(options){
		console.log(options);
	},
  className: "movie"
});


var Category = Parse.Object.extend({
  className: "category"
});

var Nav = Backbone.Model.extend();