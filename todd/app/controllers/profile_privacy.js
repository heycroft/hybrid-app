// The deviceready event fires once Cordova has fully loaded. Once the event fires, you can safely make calls to Cordova APIs. Applications typically attach an event listener with document.addEventListener once the HTML document's DOM has loaded.
document.addEventListener("deviceready", onDeviceReady, false);

// Navigation 
var saveButton = new steroids.buttons.NavigationBarButton();
    saveButton.title = "Save";

function onDeviceReady() {
  navigationBar();
}  

// chui selectable list
 $(function() {
    $('.list').UISelectList({
       selected: 0,
       callback: function() {
          $("#response").html($(this).text());
       }
    });
    if (window.jQuery) {
      $('li').each(function(idx, ctx) {
         if ($(ctx).hasClass('selected')) {
            $("#response").html($(ctx).text());
         }
      });
    } else {
      $("#response").html($('li').hasClass('selected').text());
    }
});
 
function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
      title: "Privacy",
      overrideBackButton: true,
      buttons: {
          left: [saveButton],
      }
  });
}

saveButton.onTap = function() {
  steroids.layers.pop(); 
};