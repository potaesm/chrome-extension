const requestSender = new XMLHttpRequest();

requestSender.onreadystatechange = apiHandler;

/**
 * 0 | UNSENT | Client has been created
 * 1 | OPENED | open() has been called
 * 2 | HEADER_RECEIVED | send() has been called
 * 3 | LOADING | Downloading partial data
 * 4 | DONE | Operation complete
 */
function apiHandler(response) {
    if (requestSender.readyState === 4 && requestSender.status === 200) {
        console.log(response.target.response);
    }
}

/** Disable async to call multiple request otherwise it will be overwriten by the last request */
const isAsync = false;

requestSender.open('GET', 'https://api.github.com/users/potaesm', isAsync);
requestSender.send();

requestSender.open('GET', 'https://api.github.com/users/peter', isAsync);
requestSender.send();