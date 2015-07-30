Meteor.publish('allUsers', function(limit) {

	return Meteor.users.find({},
			{fields: {"username": 1,"profile": 1}}
		);
});

Meteor.publish('allLocation', function(limit) {
	return Location.find();
});

Meteor.publish('allMachine', function(limit) {
	return Machine.find({},{
		sort: {type: 1}
	});
});

Meteor.publish('allCompany', function(limit) {
	return Company.find();
});
