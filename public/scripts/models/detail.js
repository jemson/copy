var Detail = Parse.Object.extend({
	className: 'details',

	getDetails: function(){
		var query1 = new Parse.Query(Detail);
		query1.equalTo('objectId', 'IcUrAX2zDo');
		query1.find({
			success: function(data){
				console.log(data[0].toJSON());
			}
		})

		return query1;
	},
	parse: function(response, options){
		console.log(response, options);
		return response;
	},
});