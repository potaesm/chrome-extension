chrome.runtime.onInstalled.addListener(() => {
    console.log('installed');
});

chrome.bookmarks.onCreated.addListener(() => {
    alert('Bookmard saved');
});

/** From content to background */
chrome.runtime.onMessage.addListener((request, sender, response) => {
    console.log(request, sender);
    response('Hello World');
});

/** From background to content */
chrome.bookmarks.onMoved.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { name: 'Suthinan' });
    });
});