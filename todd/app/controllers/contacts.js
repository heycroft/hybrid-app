// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);
                          
// Navigation Bar Variables

var addButton = new steroids.buttons.NavigationBarButton();
    addButton.imagePath = "/icons/search@2x.png";

// preload view vars
var friendView = new steroids.views.WebView("views/friend/index.html");
    friendView.preload();

var addView = new steroids.views.WebView("views/add/index.html");
    addView.preload();

var GroupView = new steroids.views.WebView("views/group/index.html");
    GroupView.preload();


function onDeviceReady () {
  navigationBar();
  segmentedList();
  buttonClasses();
  disableScrolling();
//  initVisibilityChange();
} 

function initVisibilityChange() {
    
   document.addEventListener("visibilitychange", onVisibilityChange, false);
}

function onVisibilityChange() {
    
    if(!document.hidden) {
        // if document is visible... do this:
        
        steroids.view.navigationBar.show();
    }
}

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Contacts",
    overrideBackButton: true,
    buttons: {
      right: [addButton]
    }
  });
}

function disableScrolling() {
  // http://www.sitepoint.com/forums/showthread.php?673175-iphone-gt-safari-gt-Lock-viewport-scrolling
  $('body').bind("touchmove", {}, function(event){
      event.preventDefault();
  });
}

function buttonClasses() {
  $('.conversation-button').on('singletap', showFriend);
  $('.group_btn').on('singletap', showGroup);
}

// Seg Function
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

function showFriend() {
  steroids.layers.push( {
    view: friendView,
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