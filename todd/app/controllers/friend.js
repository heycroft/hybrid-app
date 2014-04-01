// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// Preloading view variables
var someView = new steroids.views.WebView("");
    someView.preload();

// Info and Back buttons
var infoButton = new steroids.buttons.NavigationBarButton();
    infoButton.imagePath = "/icons/pill@2x.png";

var backButton = new steroids.buttons.NavigationBarButton();
    backButton.imagePath = "/icons/back_btn@2x.png";

function onDeviceReady() {
  navigationBar();
  // disableScrolling();
  uiSheetButtons();
  uiPopupButtons();
} 

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Friend",
    overrideBackButton: true,
    buttons: {
      left: [backButton],
      right: [infoButton]
    }
  });
}

function uiSheetButtons() {
  $('.delete_friend_button').on('singletap', closeSheetAndDeleteFriend);
  $('.mute_button').on('singletap', closeSheetandShowMuteOptions);
  $('.block_button').on('singletap', closeAndShowBlockView);
  $('.cancel_button').on('singletap', closeCancelControls);
}

function uiPopupButtons() {
  $('.left').on('singletap', closeMutePopup);
  $('.right').on('singletap', closeMutePopupAndNotify);
}

function closeCancelControls() {
  $('.action-sheet').removeClass('in');
}

function closeSheetAndDeleteFriend() {
  $('.action-sheet').removeClass('in');
}

function closeSheetandShowMuteOptions() {
  $('.action-sheet').removeClass('in');
    
  // delay mute alert until action sheet has closed
  setTimeout(showMuteAlert, 300);
}

function showMuteAlert() {
  // $('.alert').addClass('in opened');
    
  navigator.notification.confirm(
    'You have chosen to mute this person', // message
     onConfirm,               // callback to invoke with index of button pressed
    'Mute Friend Name',            // title
    ['Mute','Cancel']         // button name
  );
}

function onConfirm(buttonIndex) {
    
  if(buttonIndex == 1) {
    navigator.notification.alert(
      'Friend has been muted',  // message
      alertDismissed,       // callback
      'Friend Name',        // title
      'OK'                  // button name
    );
  }
  else { // do nothing
      
  }
}

function closeSheetAndDeleteFriend() {
  $('.action-sheet').removeClass('in');
    
  // delay mute alert until action sheet has closed
  setTimeout(showDeleteAlert, 300);
}

function showDeleteAlert() {
  // $('.alert').addClass('in opened');
    
  navigator.notification.confirm(
    'You have chosen to delete this person', // message
     onConfirm,               // callback to invoke with index of button pressed
    'Delete Friend Name',     // title
    ['Yes','No']              // button name
  );
}

function onConfirm(buttonIndex) {
    
  if(buttonIndex == 1) {
    navigator.notification.alert(
      'Friend has been deleted',  // message
      alertDismissed,       // callback
      'Friend Name',        // title
      'OK'                  // button name
    );
  }
  else { // do nothing
      
  }
}


function alertDismissed() {
  // do something
}

function closeMutePopup() {   
  $('.alert').removeClass('in');
}

function closeMutePopupAndNotify() {
  $('.alert').removeClass('in');
}

function closeAndShowBlockView() {
  $('.action-sheet').removeClass('in');
  alert('Block popup close');
  // block view push here...
}

function backToPeople() {
  steroids.layers.pop();
}

/*function disableScrolling() {
    
  // http://www.sitepoint.com/forums/showthread.php?673175-iphone-gt-safari-gt-Lock-viewport-scrolling
  $('body').bind("touchmove", {}, function(event){
      event.preventDefault();
  });
}
*/
backButton.onTap = function() {
  steroids.layers.pop(); 
};

infoButton.onTap = function() {
  $('.action-sheet').addClass('in');
};