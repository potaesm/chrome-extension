chrome.runtime.onInstalled.addListener(() => {
    console.log('installed');
});

chrome.bookmarks.onCreated.addListener(() => {
    alert('Bookmard saved');
});

/** Works only on disabled default_popup in manifest */
chrome.action.onClicked.addListener((tab) => {
    console.log({ tab });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentScript.js']
    });
});

/** From content to background */
chrome.runtime.onMessage.addListener((request, sender, response) => {
    console.log(request, sender);
    response('Hello from background');
});

/** From background to content */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.tabs.sendMessage(tabId, { changeInfo, tab });
});