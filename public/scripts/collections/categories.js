var Categories = Parse.Collection.extend({
  model: Category,
  initialize: function(){
		this.query = new Parse.Query( Category );
		
		this.fetch();
	},
});