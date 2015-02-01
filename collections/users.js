// Users = new Meteor.users();

// Meteor.methods({

// 	newStartup: function(startupAttr) {

// 		if (!startupAttr.name)
//       		throw new Meteor.Error(422, 'Every startup must have a name');

// 		var startup = _.extend({
// 				timestamp: moment().unix(),
// 				lastFundingStage: "none",
// 				totalFunding: 0,
// 			},
// 			_.pick(startupAttr, 'name', 'categories', 'country',
// 			'lastStage', 'totalFunding', 'timestamp'));

// 		startup._id = Startups.insert(startup);

// 		return startup._id;
// 	}

// });