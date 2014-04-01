// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// Navigation bar variables
var saveButton = new steroids.buttons.NavigationBarButton();
    saveButton.title = "Save";

function onDeviceReady() {
  navigationBar();
}

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Feedback",
    overrideBackButton: true,
    buttons: {
      left: [saveButton],
    }
  });
}

saveButton.onTap = function() {
  steroids.layers.pop(); 
};