Template.newMachine.events({
	"click .create-btn": function() {

		var machine = {
			name: $(".create-name").val(),
			description: $(".create-description").val(),
			country: $(".create-country").val(),
			address: $(".create-address").val(),
			contact_number: $(".create-contact-number").val(),
			email: $(".create-email").val(),
		};

		Meteor.call('newMachine', machine, function(err, machineId) {
			$(".create-name").val("");
			$(".create-description").val("");
			$(".create-country").val("");
			$(".create-address").val("");
			$(".create-contact-number").val("");
			$(".create-email").val("");
		});
			
				
		
    }
});


Template.machineList.helpers({
	getAllMachine: function() {
		return Machine.find();
	}
});


Template.machineList.onRendered(function() {
	this.$('.list-wrap').masonry({
		itemSelector: '.list-item'
	});
});

Template.machineItem.onRendered(function() {
	$(".list-wrap").masonry()
		.append(this.$(".list-item"))
		.masonry("appended", this.$(".list-item"));
});