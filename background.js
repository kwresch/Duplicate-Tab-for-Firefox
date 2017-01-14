browser.contextMenus.create({
	id: "duplicate-tab",
	title: "Duplicate Tab",
	type: "normal",
	contexts: ["all", "page_action"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId == "duplicate-tab") {
		duplicateTab();
	}
});

browser.browserAction.onClicked.addListener(function() {
	duplicateTab();
});

function duplicateTab() {
	browser.tabs.query({
		currentWindow: true,
		active: true
	}).then(function(tabs) {
		if (tabs.length > 0) {
			browser.tabs.duplicate(tabs[0].id);
		}
	}).catch(function(error) {
		console.error('Error: ' + error);
	});
}
