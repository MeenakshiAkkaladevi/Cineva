export const BASEURL = "http://localhost:2025/";

export function callApi(reqmethod, url, data, responseHandler) {
    let options = "";
    if (reqmethod === "GET" || reqmethod === "DELETE") {
        options = { method: reqmethod, headers: { 'Content-Type': 'application/json' } };
    } else {
        options = { method: reqmethod, headers: { 'Content-Type': 'application/json' }, body: data };
    }
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + ": " + response.statusText);
            }
            return response.text();
        })
        .then(data => responseHandler(data))
        .catch(error => alert(error));
}

export function setSession(sessionname, sessionvalue, expindays) {
    let D = new Date();
    D.setTime(D.getTime() + expindays * 86400000);
    document.cookie = `${sessionname}=${sessionvalue};expires=${D.toUTCString()};path=/`;
}

export function getSession(sessionname) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieData = decodedCookie.split(";");
    for (let x in cookieData) {
        if (cookieData[x].includes(sessionname)) {
            return cookieData[x].substring(cookieData[x].indexOf(sessionname) + sessionname.length + 1);
        }
    }
    return "";
}