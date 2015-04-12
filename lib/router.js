// Router.configure({
// 	layoutTemplate: 'layout',
// });

// Router.onBeforeAction(function(){
// 	if(!Meteor.loggingIn() && !Meteor.user()) {
// 		console.log("this ran");
// 		Router.go('unauthorized');
// 	}
// },{except: ['unauthorized']});

Router.route('/', function () {
	this.render('home');
});

Router.route('/home');
Router.route('/signup');
Router.route('/route');
Router.route('/item');
Router.route('/test');

Router.route('/company', function () {
	this.render('companyPage');
});
Router.route('/machine', function () {
	this.render('machinePage');
});
Router.route('/machine/:_id', function () {
	var machine = Machine.findOne({_id: this.params._id});
	this.render('machineItemPage', {data: machine});
});
Router.route('/machine/:_id/edit', function () {
	Session.set("machineId", this.params._id);
	var machine = Machine.findOne({_id: this.params._id});
	this.render('machineItemEditPage', {data: machine});
}, {
	onRun: function() {
		Session.set("machineId", this.params._id);
		this.next();
	},
	onStop: function() {
		Session.set("machineId", null);
		// this.next();
	}
});