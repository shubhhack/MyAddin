/* taskpane.js */

var _om;
var _item;

Office.initialize = function (reason)
{
	_om = Office.context.mailbox;
	_item = _om.item;
};

function getSubject()
{
	document.getElementById("subject").innerHTML = _item.subject
}

function uilessAddNotification(event)
{
	_item.notificationMessages.addAsync("information", { 
		type: "informationalMessage", 
		message : "This is a notification", 
		icon : "informationicon", 
		persistent: false 
	});
    setTimeout(function() {
	    event.completed(true);
    }, 10000);
}
