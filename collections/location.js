Location = new Meteor.Collection('location');

Meteor.methods({
	location: function(locationAttributes){
		

		var location = _.extend(_.pick(locationAttributes, 'name', 'description', 'location'), {
				timestampCreated: new Date().getTime()
		});

		var locationId = Location.insert(location);

	    return locationId;
	}

});