Counter = new Meteor.Collection('counter');

Meteor.methods({
	count: function(countAttributes){
		

		var counter = _.extend(_.pick(countAttributes, 'name'), {
				timestampCreated: new Date().getTime()
		});

		var counterId = Counter.insert(counter);

	    return counterId;
	},

	getCount: function() {
		return Counter.find().count();
	}

});