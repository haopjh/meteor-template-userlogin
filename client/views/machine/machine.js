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


Template.machinePage.onRendered(function() {
	this.$('.machine-list').imagesLoaded(function() {
		this.$('.machine-list').isotope({
			itemSelector: '.list-item-machine'
		});
	}.bind(this));
});

Template.machineItem.onRendered(function() {
	this.$(".list-item-machine").imagesLoaded(function() {
		$(".machine-list").isotope()
			.isotope("appended", this.$(".list-item-machine"));
	}.bind(this));
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
    	var url = this.toString();
    	var relativeUrl = url.replace("http://s3-ap-southeast-1.amazonaws.com/sgmachinemart","");
    	console.log(relativeUrl);
    	S3.delete(relativeUrl, function(err, result){
    		if(err) {
    			console.log(err);
    		} else {
    			console.log(result);
    		}
    	});
		Meteor.call("removeMachinePhoto", Session.get("machineId"), this.toString());
    },

    "click .delete-btn": function() {
    	Meteor.call("removeMachine", Session.get("machineId"), function() { 
    		Router.go("/machine");
    	});
    }
});
