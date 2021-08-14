/** From content to background */
(function testMessage() {
    chrome.runtime.sendMessage({ payload: 'Hello from a content' }, (response) => console.log(response));
})();

/** From background to content */
chrome.runtime.onMessage.addListener((request, sender) => {
    console.log(request, sender);
});