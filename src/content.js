window.onload = () => {
    const button = document.createElement('button');
    button.id = 'darkModeButton';
    /** Internationalization */
    button.textContent = chrome.i18n.getMessage('enableDarkModeText');
    
    const input = document.createElement('input');
    input.id = 'darkSetting';
    input.type = 'checkbox';

    document.querySelector('#end').prepend(button, input, 'Auto apply?');

    checkSetting();

    input.addEventListener('click', () => {
        const isEnabled = document.getElementById('darkSetting').checked;
        const setting = { enabled: isEnabled };
        chrome.storage.local.set(setting, () => {
            console.log('stored', setting);
        });
    });

    button.addEventListener('click', () => enableDarkMode());
};

function enableDarkMode() {
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = 'blue';
}

function checkSetting() {
    chrome.storage.local.get(['enabled'], (result) => {
        const isEnabled = !!result.enabled;
        document.getElementById('darkSetting').checked = isEnabled;
        if (isEnabled) {
            enableDarkMode();
        }
    });
}