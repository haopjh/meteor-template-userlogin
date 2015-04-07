Machine = new Meteor.Collection('machine');

Meteor.methods({
	newMachine: function(machineAttributes){
		

		var machine = _.extend(_.pick(machineAttributes, 'name', 'description', 'price', 'brand', 'date_of_manufacture', 'mileage'), {
			timestampCreated: new Date().getTime()
		});

		var machineId = Machine.insert(machine);

	    return machineId;
	}

});