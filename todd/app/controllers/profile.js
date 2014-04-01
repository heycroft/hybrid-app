// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// Preloading view variables
var editProfileView = new steroids.views.WebView("views/edit_profile/index.html");
    editProfileView.preload();

// Edit button
var editButton = new steroids.buttons.NavigationBarButton();
    editButton.title = "Edit";


// onDeviceReady function
function onDeviceReady() {
  navigationBar();
  // disableScrolling();
  initChuiSheet();
}

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Profile",
    overrideBackButton: false,
    buttons: {
      right: [editButton],
    }
  });
}

/*function disableScrolling() {
    
  // http://www.sitepoint.com/forums/showthread.php?673175-iphone-gt-safari-gt-Lock-viewport-scrolling
  $('body').bind("touchstart", {}, function(event){
      event.preventDefault();
  });
}*/

function executeAnimation() {
  var animation = new steroids.Animation({
      transition: "slideFromBottom",
      duration: 0.3 
  });
  steroids.layers.push({
      view: editProfileView,
      animation: animation/*,
      tabBar: false */
  });
}

// Nav button listeners
editButton.onTap = function() {
  // Opens view
  executeAnimation();
};
