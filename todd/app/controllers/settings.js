steroids.navigationBar.show("Settings");

// Preloading view variables
var profilePrivacyView = new steroids.views.WebView("views/profile_privacy/index.html");
		profilePrivacyView.preload();

var notificationView = new steroids.views.WebView("views/notifications/index.html");
		notificationView.preload();

// Functions to push open views
function openProfilePrivacy() {
	steroids.layers.push(profilePrivacyView);
} 

function openNotifications() {
	steroids.layers.push(notificationView);
}