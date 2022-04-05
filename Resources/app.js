var win = Ti.UI.createWindow();

var button = Ti.UI.createButton({
    top: 50,
    title: 'Place Blocked Call',
});

button.addEventListener('click', function(e) {
    console.log('Click Blocked Call Button');
    Ti.Platform.openURL('tel:%2A678327850855')
});

var unblocked_call_button = Ti.UI.createButton({
    top: 100,
    title: 'Place Unblocked Call',
});

unblocked_call_button.addEventListener('click', function(e) {
    console.log('Click Unblocked Call Button');
    Ti.Platform.openURL('tel:8327850855')
});

win.add(button);
win.add(unblocked_call_button);
 
win.open();