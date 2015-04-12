Template.newMachine.events({
	"click .create-btn": function() {

		var machine = {
			type: $(".create-type").val(),
			make: $(".create-make").val(),
			model: $(".create-model").val(),
			description: $(".create-description").val(),
			location: $(".create-location").val(),
			price: $(".create-price").val(),
			year: $(".create-year").val(),
			mileage: $(".create-mileage").val(),
		};

		Meteor.call('newMachine', machine, function(err, machineId) {
			$("input").val("");
		});
    }
});


Template.machineList.helpers({
	getAllMachine: function() {
		return Machine.find();
	}
});


Template.machineList.onRendered(function() {
	this.$('.machine-list').imagesLoaded(function() {
		this.$('.machine-list').masonry({
			itemSelector: '.list-item'
		});
	}.bind(this));
		
});

Template.machineItem.onRendered(function() {
	$(".machine-list").masonry()
		.masonry("appended", this.$(".list-item-machine"));
});

Template.machineItem.helpers({
	"getFirstPhoto": function() {
		return this.photo_url ? this.photo_url[0]: "";
	}
})

Template.machineItemEditPage.events({
	"click .create-btn": function() {

		var machine = {
			type: $(".create-type").val(),
			make: $(".create-make").val(),
			model: $(".create-model").val(),
			description: $(".create-description").val(),
			location: $(".create-location").val(),
			price: $(".create-price").val(),
			year: $(".create-year").val(),
			mileage: $(".create-mileage").val(),
		};

		Meteor.call('editMachine', this._id, machine, function(err) {
			Router.go("/machine/"+this._id);
		}.bind(this));
    },

    "click .edit-photo-item": function() {
    	// S3.delete(this.toString(), function(err, result){
    	// 	if(err) {
    	// 		console.log(err);
    	// 	} else {
    	// 		console.log(result);
    	// 	}
    	// });
    	Meteor.call("removePhoto", Session.get("machineId"), this.toString());
    },

    "click .delete-btn": function() {
    	Meteor.call("removeMachine", Session.get("machineId"), function() { 
    		Router.go("/machine");
    	});
    }
});
