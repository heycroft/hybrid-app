// The deviceready event fires once Cordova has fully loaded. Once the event fires, you can safely make calls to Cordova APIs. Applications typically attach an event listener with document.addEventListener once the HTML document's DOM has loaded.
document.addEventListener("deviceready", onDeviceReady, false);

// Variable buttons
var saveButton = new steroids.buttons.NavigationBarButton();
    saveButton.title = "Save";

function onDeviceReady() {
  navigationBar();
}

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Notifications",
    overrideBackButton: true,
    buttons: {
        left: [saveButton],
    }
  });
}

saveButton.onTap = function() {
  steroids.layers.pop(); 
};