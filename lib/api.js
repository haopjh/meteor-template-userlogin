Router.route('/api', function() {
	this.render('apipage');
});

Router.route('/api/testCounter', function() {

	Meteor.call('count', {name: "Jun Hao"}, function(error, count) {
		if (error) {
			throw(error.reason);
		} else {
			console.log(count);
		}
    });

	//Renders the same page
	this.render('apipage');
});

Router.route('/api/testCounter/:_id', function() {

	console.log(this.params._id);

	// Meteor.call('count', {name: ""}, function(error, bubbleId) {
	// 	if (error) {
	// 		throwError(error.reason);
	// 	} else {
	// 		console.log('Create Bubble');
	// 		Meteor.call('addBubbleToIndex', bubbleId, bubble.title);
	// 		Meteor.Router.to('bubbleMembersPageBackbone', bubbleId);
	// 	}
 //    });

	//Renders the same page
	this.render('apipage');
});

Router.route('/api/getCount', function() {


	Meteor.call('getCount', function(error, count) {
		if (error) {
			throw(error.reason);
		} else {
			console.log(count);
		}
    });

	//Renders the same page
	this.render('apipage');
});