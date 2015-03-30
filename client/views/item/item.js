Template.createItem.events({
	"click .create-btn": function() {

		var location = {
			name: $(".create-name").val(),
			description: $(".create-description").val(),
			location: $(".create-location").val()
		};

		Meteor.call('location', location, function(err, locationId) {
			console.log("yay");
		});
			
				
		
    }
});


Template.itemList.helpers({
	getAllLocation: function() {
		console.log(Location.find().count());
		return Location.find();
	}
})