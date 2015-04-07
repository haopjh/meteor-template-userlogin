Template.newMachine.events({
	"click .create-btn": function() {

		var machine = {
			name: $(".create-name").val(),
			description: $(".create-description").val(),
			location: $(".create-location").val()
		};

		Meteor.call('newMachine', machine, function(err, machineId) {
			console.log("yay");
		});
			
				
		
    }
});


Template.itemList.helpers({
	getAllMachine: function() {
		return Machine.find();
	}
})