// ==UserScript==
// @name         OwopScriptManager
// @namespace    https://ourworldofpixels.com/
// @version      1.0
// @description  OWOP Script Manager.
// @author       scar17off
// @match        https://ourworldofpixels.com/*
// @match        https://owop.me/*
// @icon         https://www.google.com/s2/favicons?domain=ourworldofpixels.com
// @run-at       document-end
// @grant        https://ourworldofpixels.com/
// ==/UserScript==

const chat = OPM.require("core-utils").chat;
var script = "";
var key = "1";
var rank = OWOP.player.rank;
function lclmsg(text) {
	OWOP.chat.local(text);
}
lclmsg("[OSM] OWOP Script Manager Loaded!");
lclmsg("| Type /osm to help.")
function append(src, onload) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = onload;
    document.body.appendChild(s);
}
function openNewTab(url){
	window.open(url, '_blank').focus();
}
function decrypt(msg, key) {
	return CryptoJS.AES.decrypt(msg, key).toString(CryptoJS.enc.Utf8);
}
chat.registerCommand("osm", function(args) {
	var arg = args[0];
	var package = args[1];
	var nickname = OWOP.player.username;
	if(arg == "packages"){
		OSM.call("packages");
	} else if(arg == "help"){
			OSM.call("help");
	} else if(!arg){
			OSM.call("help");
	} else if(arg == "i"){
		if(package == "0"){
			key = prompt("Enter script key: ");
			let xhttp = new XMLHttpRequest();
			append("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js", () => {
			xhttp.open("GET", "https://raw.githubusercontent.com/scar17off/OwopScriptManager/main/moddedminibot.js");xhttp.responseType = "text";
			xhttp.addEventListener("load", function() {try {script = decrypt(xhttp.response, key)} catch(e) {console.log('Your key is invalid');console.error(e)};eval(script)});xhttp.send();})
		} else if(package == "1"){
			key = "1";
			let xhttp = new XMLHttpRequest();
			append("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js", () => {
			xhttp.open("GET", "https://raw.githubusercontent.com/scar17off/OwopScriptManager/main/minibotfix.js");xhttp.responseType = "text";
			xhttp.addEventListener("load", function() {try {script = decrypt(xhttp.response, key)} catch(e) {console.log('Your key is invalid');console.error(e)};eval(script)});xhttp.send();})
		} else if(package == "2"){
			key = "1";
			let xhttp = new XMLHttpRequest();
			append("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js", () => {
			xhttp.open("GET", "https://raw.githubusercontent.com/scar17off/OwopScriptManager/main/icedfire.js");xhttp.responseType = "text";
			xhttp.addEventListener("load", function() {try {script = decrypt(xhttp.response, key)} catch(e) {console.log('Your key is invalid');console.error(e)};eval(script)});xhttp.send();})
		} else if(package == "3"){
			key = "1";
			let xhttp = new XMLHttpRequest();
			append("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js", () => {
			xhttp.open("GET", "https://raw.githubusercontent.com/scar17off/OwopScriptManager/main/weirdobot.js");xhttp.responseType = "text";
			xhttp.addEventListener("load", function() {try {script = decrypt(xhttp.response, key)} catch(e) {console.log('Your key is invalid');console.error(e)};eval(script)});xhttp.send();})
		}
	};
	if(arg == "discord"){
		OSM.call("discord");
	}
})
var OSM = class {
	constructor(){
  		this.packages = "[0] Modded Minibot | 400P/5$"+"\n[1] Minibot Fixed"+"\n[2] IceDfire Bot\n"+"\n[3] Weirdo Bot"+"\n[4] MiniNot";
  		this.installed = ["osm-api"];
  		this.callers = ["help","discord","packages"];
  		this.discord = "https://discord.gg/invite/ujxdhmEFkY/";
  		this.owop = OWOP;
	};
	install(f){
		return;
	};
	uninstall(f){
		document.getElementById(f).close();
	};
	nothing(){
		return;
	};
	localMessage(message){
		this.owop.chat.local(message);
	};
	call(f){
		if(f == this.callers[0]){
			this.localMessage("| OWOP Script Manager Help");
			this.localMessage("| /osm help");
			this.localMessage("| /osm packages");
			this.localMessage("| /osm discord");
			this.localMessage("| /osm i | Usage: /osm i package-number");
		} else if(f == this.callers[1]){
			return window.open(this.discord, '_blank').focus();
		} else if(f == this.callers[2]){
			return this.localMessage(`| OWOP Script Manager | \n${this.packages}`);
		};
	};
};

var OSM = new OSM();
