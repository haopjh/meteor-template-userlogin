Machine = new Meteor.Collection('machine');

Meteor.methods({
	newMachine: function(machineAttributes){
		

		var machine = _.extend(_.pick(machineAttributes, 'type', 'make', 'model', 'description', 'location', 'price', 'year', 'mileage'), {
			timestampCreated: new Date().getTime(),
			photo_url: []
		});

		var machineId = Machine.insert(machine);

	    return machineId;
	},

	editMachine: function(machineId, machine){
		Machine.update({_id: machineId}, {
			$set: machine
		});
	},

	removeMachine: function(machineId) {
		Machine.remove({_id: machineId});
	},

	addMachinePhoto: function(machineId, url){
		Machine.update({_id: machineId}, {
			$push : {photo_url: url}
		});
	},

	removeMachinePhoto: function(machineId, url){
		//Gets list of urls
		var machine = Machine.findOne(machineId);
		var index = machine.photo_url.indexOf(url);
		machine.photo_url.splice(index, 1);
		Machine.update({_id: machineId}, machine);
	}

});