document.addEventListener("deviceready", onDeviceReady, false);
                          
// Navigation Bar Variables
var addButton = new steroids.buttons.NavigationBarButton();
    addButton.imagePath = "/icons/search@2x.png";

// Preload Web Views
var addView = new steroids.views.WebView("views/add/index.html");
    addView.preload();

var GroupView = new steroids.views.WebView("views/group/index.html");
    GroupView.preload();

var chatView = new steroids.views.WebView("views/conversations/index.html");
    chatView.preload();

function onDeviceReady () {
  navigationBar();
  segmentedList();
  buttonClasses();
//  initVisibilityChange();
} 

// function initVisibilityChange() {
//   document.addEventListener("visibilitychange", onVisibilityChange, false);
// }

// function onVisibilityChange() {
//   if(!document.hidden) {
//     // if document is visible... do this:
//     steroids.view.navigationBar.show();
//   }
// }

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Chats",
    overrideBackButton: true,
    buttons: {
      right: [addButton]
    }
  });
}

function buttonClasses() {
  $('.chat-button').on('singletap', showChat);
  $('.group_btn').on('singletap', showGroup);
}

// Helper functions
function segmentedList () {

  // chocloate-chip UI - segmented list
  var segmentedOptions = {
    id: 'mySegmented',
    labels : ['Individual','Groups'],
    selected: 0
   };

  var segmentedComponent = $.UICreateSegmented(segmentedOptions);

  $('#segmentedPanel').append(segmentedComponent);
  $('.segmented').UISegmented({callback:onSegmentSelected});
  $('.segmented').UIPanelToggle('#toggle-panels',function(){$.noop;});     
}

function onSegmentSelected(e) {
  // stop any events/weird stuff happening
  event.stopPropagation();

  //call onTabClicked, we'll decide what to do from there
  onTabClicked($('.segmented').find('.selected').index());
 }


addButton.onTap = function() {
  steroids.layers.push( {
    view: addView,
    navigationBar: false/*,
    tabBar: false*/
  });
}

function showChat() {
  steroids.layers.push( {
    view: chatView,
    navigationBar: true/*,
    tabBar: false*/
  });
} 

function showGroup() {
  steroids.layers.push( {
    view: GroupView,
    navigationBar: true/*,
    tabBar: false*/
  });
} 