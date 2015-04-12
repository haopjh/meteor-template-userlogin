Template.machineupload.events({
    "click button.upload": function(){
        var files = $("input.file_bag")[0].files;
        var machineId = this._id;
        S3.upload({
            files:files,
            path:"machines"
        },function(e,r){
            console.log(r);
            Meteor.call('addPhoto', machineId, r.url, function(err, success) {
                console.log(success);
            });
        });
    }
});

Template.machineupload.helpers({
    "files": function(){
        return S3.collection.find();
    }
});