// ==UserScript==
// @name         OSM | OWOP Script Manager
// @namespace    https://ourworldofpixels.com/
// @version      1.0
// @description  OWOP Script Manager.
// @author       scar17off
// @match        https://ourworldofpixels.com/
// @icon         https://www.google.com/s2/favicons?domain=ourworldofpixels.com
// @grant        https://ourworldofpixels.com/
// ==/UserScript==

function installosm(){
    function osmclient(){
        const descrwqtg = "1"
        let script = "";
        
        let xhttp = new XMLHttpRequest();
        
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
        
        xhttp.open("GET", "https://raw.githubusercontent.com/scar17off/OwopScriptManager/main/osm.js");
        xhttp.responseType = "text";
        
        xhttp.addEventListener("load", function() {
            try {
                script = decrypt(xhttp.response, descrwqtg);
            } catch(e) {
                console.log('Your key is invalid')
                console.error(e)
            }
            eval(script)
        });
        xhttp.send();
        });
    }
    osmclient()
}
installosm()
