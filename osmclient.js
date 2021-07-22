const descrwqtg = "1"
let scriptt = "";

let xhttpl = new XMLHttpRequest();

function append(src, onload) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = onload;
    document.body.appendChild(s);
}

append("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js", () => {
function decrypt(msg, key) {
    return CryptoJS.AES.decrypt(msg, descrwqtg).toString(CryptoJS.enc.Utf8);
}

xhttpl.open("GET", "https://raw.githubusercontent.com/scar17off/OwopScriptManager/main/osm.js");
xhttpl.responseType = "text";

xhttpl.addEventListener("load", function() {
    try {
        scriptt = decrypt(xhttpl.response, descrwqtg);
    } catch(e) {
        console.log('Your key is invalid')
        console.error(e)
    }
    eval(scriptt)
});
xhttpl.send();
})
