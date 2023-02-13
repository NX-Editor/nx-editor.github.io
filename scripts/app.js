async function LoadDict(key) {
    var data = await fetch('../res/wip.json').then(x => x.json());

    for (let setKey in data[key]) {
        document.getElementById(key).parentElement.innerHTML += createElement(setKey, data[key][setKey]);
    }
}

function createElement(key, value) {
    return `<li><b>${key}:</b> ${value}</li>`;
}