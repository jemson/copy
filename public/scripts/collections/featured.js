//featured collection
query.equalTo('cinema', 'featured');
var featured = query.collection();
featured.fetch();

featured.fetch({
	success: function(data){
	defer.resolve(data);
	}
});