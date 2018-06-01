console.log("cloud code is here!!");

Parse.Cloud.beforeSave(Parse.User, (request, response)=> {

    if (!request.object.get("name")) {
        response.error("Name is required!");
        return;
    }


    response.success(request.object);
});

Parse.Cloud.beforeFind("Item", (request, response) => {
    
    if (!request.user || !request.user.get("sessionToken")) {
        response.error("Please log in or register first");
        return;
    }
    
    response.success(request.objects);
    
});

Parse.Cloud.beforeSave("Item", (request, response) => {

    if (!request.user || !request.user.get("sessionToken")) {
        response.error("Please log in or register first");
        return;
    }

    request.object.set("owner", request.user);

    var acl = new Parse.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(false);
    acl.setReadAccess(request.user, true);
    acl.setWriteAccess(request.user, true);

    request.object.setACL(acl);

    response.success(request.object);

});