/** From content to background */
(function () {
    chrome.runtime.sendMessage({ payload: 'Hello from a content' }, (response) => console.log(response));
})();

/** From background to content */
chrome.runtime.onMessage.addListener((message, sender) => {
    console.log({ message, sender });
});