// ==UserScript==
// @name         MasterBot for Cursors
// @namespace    http://tampermonkey.net/
// @version      1.0
// @license      MIT
// @description  proxy bots for cursors.io, dimden can you make better?
// @author       scar17off
// @match        *://kursors.io/*
// @match        *://cursors.uvias.com/*
// @match        *://cursors.io/*
// @match        *://cursors.ml/*
// @icon         https://www.google.com/s2/favicons?domain=cursors.uvias.com
// @grant        none
// ==/UserScript==

(function(){
	setTimeout(() => {
		window.history.pushState("object or string", "Title", "/?#");
		class Botting {
			constructor(options = {}) {
				const Botting = this;
				let bot;
				Botting.join = () => {
					let ws = getValue("ws");
					bot = new WebSocket(ws);
					Botting.ws = bot;

					return bot;
				};
				Botting.disconnect = () => {
					bot.ws.close();
				};
				Botting.proxyJoin = (proxyy) => {
					let ws = "wss://ws-proxy" + proxyy + ".glitch.me?ws="+getValue("ws");
					bot = new WebSocket(ws);
					Botting.ws = bot;

					bot.onopen = () => {
						document.getElementById("master-main-content-info").innerText = `${bots.filter(fil => fil.readyState === 1).length} bots connected.`;
					};
					bot.onclose = () => {
						document.getElementById("master-main-content-info").innerText = `${bots.filter(fil => fil.readyState === 1).length} bots connected.`;
					};
					bot.onerror = () => {
						document.getElementById("master-main-content-info").innerText = `${bots.filter(fil => fil.readyState === 1).length} bots connected.`;
					};

					return bot;
				};
				Botting.move = (x, y) => {
					
				};
				Botting.draw = (x1 = 0, y1 = 0, x2 = 0, y2 = 0) => {
		  		  	let arr = new ArrayBuffer(9);
		  		  	let dv = new DataView(arr);
		  		  	dv.setUint8(0, 3);
		  		  	dv.setUint16(1, x1, true);
		  		  	dv.setUint16(3, y1, true);
		  		  	dv.setUint16(5, x2, true);
		  		  	dv.setUint16(7, y2, true);
		  		  	bot.send(arr);
		  		};
				Botting.click = (x = 0, y = 0, count = 1) => {
					var arr = new ArrayBuffer(9),
		            dv = new DataView(arr);
			        dv.setUint8(0, 2);
			        dv.setUint16(1, x, !0);
			        dv.setUint16(3, y, !0);
			        dv.setUint32(5, count, !0);
			        bot.send(arr);
				};
			};
		};
		class Utils {
			constructor(ws){
				const utils = this;
				let wordIndex, letterOffset;
				utils.drawLetter = (a, x, y) => {
		   			var letter = alphabet[a];
				 
				    if (!letter)
				        return;
				 
				    var buffer = new ArrayBuffer(9),
				        dv = new DataView(buffer);
				 
				    for (var i = 0; i < letter.length; i++) {
				        dv.setUint8(0, 3);
				        dv.setUint16(1, x+alphabet[a][i][1]*fontSize, !0);
				        dv.setUint16(3, y+alphabet[a][i][0]*fontSize, !0);
				        dv.setUint16(5, x+alphabet[a][i][3]*fontSize, !0);
				        dv.setUint16(7, y+alphabet[a][i][2]*fontSize, !0);
				        ws.send(buffer);
				    };
				};
				utils.drawWord = (word, x, y) => {
				    this.drawLetter(word.charCodeAt(0), x, y);
				    wordIndex++;
				    if (word.length > 0)
				        this.drawWord(word.substring(1, word.length), x+fontSize*3, y);
				    else {
				        wordIndex = 0;
				        letterOffset = 0;
				    };
				};
				utils.crashEveryone = () => {
					wa(150, 150, 100000);
				};
			};
		};
		class Hacks {
			constructor(ws){
				const hacks = this;
				hacks.wallhack = wallhack;
				hacks.clicktimes = clicktimes;
				hacks.setWH = (bool) => {
					wallhack = bool;
				};
				hacks.setCTimes = (times) => {
					clicktimes = times;
				};
			};
		};
		const CJS = {
			Botting: Botting,
			Utils: Utils,
			Hacks: Hacks
		};
		const botting = new CJS.Botting();
		function makeConfig(){
			let json = {
				BotCount: 3,
				ProxyPasswords: [],
				ws: u.url || 'wss://cursors.ml/',
				Animation: 'circle',
				Follow: false,
				PaintFollow: false,
				PaintFollowPlus: false,
				FollowInterval: 79
			};
			localStorage.MasterClient = JSON.stringify(json);
		};
		if(!localStorage.MasterClient){
			makeConfig();
		};
		function checkcfg(){
			if(!localStorage.MasterClient) makeConfig();
		};
		function infinityX(t) {
    	    let x = (Math.cos(t*2)-1)/2;
    	    if (Math.abs(t*2) % (4*Math.PI) > 2*Math.PI) return -x;
    	    else return x;
    	};
    	
    	function infinityY(t) {
    	    return Math.sin(t*2) / 2;
    	};
    	
    	function squareX(angle) {
    	    let x = Math.sin(angle), y = Math.cos(angle);
    	    return x / Math.max(Math.abs(x), Math.abs(y));
    	};
    	
    	function squareY(angle) {
    	    let x = Math.sin(angle), y = Math.cos(angle);
    	    return y / Math.max(Math.abs(x), Math.abs(y));
    	};
    	function getRandomInt2(max) {
    	    return Math.floor(Math.random() * max);
    	};
    	
    	function dist(x, y) {
    	    return Math.sqrt(x * x + y * y);
    	};
		function getValue(val){
			checkcfg();
			let json = JSON.parse(localStorage.MasterClient);
			return json[val];
		};
		function setValue(variable, newval){
			checkcfg();
			let oldjson = JSON.parse(localStorage.MasterClient);
			oldjson[variable] = newval;
			let newjson = JSON.stringify(oldjson);
			localStorage.MasterClient = newjson;
		};
		let bots = [];
		let same = false;
		let botcount = parseInt(getValue("BotCount"));
		let proxy = getValue("ProxyPasswords") || JSON.parse(localStorage.MasterClient).ProxyPasswords;
		console.log(`loaded `+proxy);
		let allproxy = proxy.length;
		let checkingproxy = allproxy;
		let offlineproxy = 0;
		let onlineproxy = 0;
		let bannedproxy = 0;
		let hoursexpproxy = 0;
		WebSocket.prototype.oldSend = WebSocket.prototype.send;
		WebSocket.prototype.send = function(data) {
		    this.oldSend(data);
		    if(same == true) bots.filter(bot => bot.readyState === 1).forEach(b => b.oldSend(data));
		};
		let folint, FOLLOWADD = 0, PI2 = Math.PI*2, f = 0,
            offset = 0,
            state = 1, a = 0,
            radius121 = 0,
            radius = 0,
            f1 = 0;
		function follow(bool) {
			if(bool == true) {
				folint = setInterval(() => {
					let pos = {x: posX, y: posY};
					if(getValue("Animation") == "infinity") {
                        FOLLOWADD = PI2 / 100;
                        f = (f + FOLLOWADD);
                    } else if(getValue("Animation") == "infinity2") {
                        FOLLOWADD = PI2 / 95;
                        f = (f + FOLLOWADD);
                    } else if(getValue("Animation") == "eight") {
                        FOLLOWADD = PI2 / 500;
                        f = (f + FOLLOWADD) % PI2;
                    } else {
                        FOLLOWADD = PI2 / 45;
                        f = (f + FOLLOWADD) % PI2;
                    };
					for(let q = 0; q < bots.length; q++){
						let i = q;
						if(!bool) return;
						let botslen = bots.filter(fil => fil.readyState == 1).length + parseInt(document.getElementById('master-main-content-offset').value); // size multipler
						if(bots[q].readyState !== 1) return;
						if(!bots[q].move) bots[q].move = (x, y) => {
							let arr = new ArrayBuffer(9);
						    let dv = new DataView(arr);
						    dv.setUint8(0, 1);
						    dv.setUint16(1, x, true);
						    dv.setUint16(3, y, true);
						    dv.setUint32(5, -1, true);
						    bots[q].oldSend(arr);
						    if(getValue("PaintFollow") == true || getValue("PaintFollowPlus")){
						    	let arr = new ArrayBuffer(9);
		  		  				let dv = new DataView(arr);
		  		  				dv.setUint8(0, 3);
		  		  				dv.setUint16(1, x, true);
		  		  				dv.setUint16(3, y, true);
		  		  				if(!getValue("PaintFollowPlus")) { dv.setUint16(5, x+1, true) };
		  		  				if(!getValue("PaintFollowPlus")) { dv.setUint16(7, y+1, true) };
		  		  				if(getValue("PaintFollowPlus")) { dv.setUint16(5, posX, true) };
		  		  				if(getValue("PaintFollowPlus")) { dv.setUint16(7, posY, true) };
		  		  				bots[q].oldSend(arr);
						    };
						};
						let spiral = {
						    step: 0,
						    PI2: 2 * Math.PI,
						    speed: ()=>((2 * Math.PI) / 30 / botslen),
						    radius: (i) => i * 3
						};
						let anim = getValue("Animation");
						if(getValue("Animation") == "circle"){
							x = pos.x + (Math.cos(2 * Math.PI * 2 / botslen * q + f) * botslen);
	                    	y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * q + f) * botslen);
	                    	bots[q].move(x, y);
	                    } else if (getValue("Animation") == "hyperbola") {
                                x = pos.x + Math.tan(2 * Math.PI * 2 / botslen * i + f * botslen);
                                y = pos.y + 1 / Math.tan(2 * Math.PI * 2 / botslen * i + f * botslen);
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "line") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 ** botslen * q + f) * botslen);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * q + f) * botslen);
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "wave") {
                                x = pos.x + (Math.cos(2 * Math.PI / botslen * i + f) * botslen);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * i + f) * botslen);
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "random") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / botslen - i + f) * botslen);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * i + f) * botslen);
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "atom") {
                                if (i >= botslen / 2) {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / botslen * i + f) * botslen / 2),
                                        y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * i + f + 2) * botslen / 2);
                                    bots[q].move(x, y);
                                } else {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / botslen * i + f + 2) * botslen / 2);
                                    y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * i + f) * botslen / 2);
                                    bots[q].move(x, y);
                                }
                            } else if (getValue("Animation") == "circle") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / botslen * i + f) * botslen);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * i + f) * botslen);
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "disk") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / botslen * i + f * 2) * botslen);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * i + f) * botslen);
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "botline") {
                                x = pos.x + q * 4;
                                y = pos.y;
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "x") {
                                let r = 2 * Math.PI * 2 / botslen * i + f;
                                if (i % 2 == 0) {
                                    let s = Math.sin(r);
                                    y = pos.y + (Math.cos(r) * 3 + 15 * s);
                                    x = pos.x + (s * 15 + 3 * s);
                                } else {
                                    let c = Math.cos(r)
                                    x = pos.x + (c * 8 + 9 * c);
                                    y = pos.y + (Math.sin(r) * 3 + -15 * c);
                                }
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "spiral") {
                                let speed = spiral.speed();
                                let radius = spiral.radius(i);

                                x = Math.cos(Math.PI / botslen * i + spiral.step) * radius;
                                y = Math.sin(Math.PI / botslen * i + spiral.step) * radius;
                                x += pos.x
                                y += pos.y

                                bots[q].move(x, y);

                                spiral.step += speed;
                                spiral.step %= spiral.PI2;
                            } else if (getValue("Animation") == "cool") {
                                x = pos.x + Math.cos(((Math.PI * 2 / botslen) * i) + offset) * (radius * 16);
                                y = pos.y + Math.sin(((Math.PI * 2 / botslen) * i) + offset) * (radius * 16);

                                offset += ((Math.PI * 2) / 100) / botslen;

                                if (state === 1) {
                                    radius -= 0.01;
                                    if (radius <= 0.1) state = 2;
                                } else {
                                    radius += 0.01;
                                    if (radius >= botslen * 0.1) state = 1
                                }
                                if (offset > Math.PI * 2) offset = 0;

                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "disktwo") {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / 4.09 * i + f * 2) * 4.09);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / 4.09 * i + f) * 4.09);
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "topbottom") {
                                x = pos.x + (Math.sin(2 * Math.PI * 2 / botslen * i + f) * botslen);
                                y = pos.y + (Math.cos(2 * Math.PI * 2 ** botslen * i + f) * botslen);
                                bots[q].move(x, y);
                            } else if (getValue("Animation") == "laggy") {
                                if (i >= botslen / 2) {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / 3.5 * i + f) * 3.5 / 2),
                                        y = pos.y + (Math.sin(2 * Math.PI * 2 / 3.5 * i + f + 2) * 3.5 / 2);
                                    bots[q].move(x, y);
                                } else {
                                    x = pos.x + (Math.cos(2 * Math.PI * 2 / 4.05 * i + f + 2) * 4.0909 / 2);
                                    y = pos.y + (Math.sin(2 * Math.PI * 2 / 4.05 * i + f) * 4.09 / 2);
                                    bots[q].move(x, y);
                                }
                        } else if (getValue("Animation") == "smallcircle") {
                            x = pos.x + (Math.cos(2 * Math.PI * 2 / 4.35 * i + f) * 4.35);
                            y = pos.y + (Math.sin(2 * Math.PI * 2 / 4.35 * i + f) * 4.35);
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "eight") {
                            x = pos.x + (Math.sin(10 * Math.PI / botslen * i * f) * botslen / 1.768);
                            y = pos.y + (Math.cos(5 * Math.PI / botslen * i * f) * botslen / 1.768);
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "cool2") {
                            if (i >= botslen / 2) {
                                x = pos.x + (Math.cos(8 * Math.PI * 2 / botslen + 5 * i + f) * botslen / 4),
                                    y = pos.y + (Math.sin(8 * Math.PI * 2 / botslen + 5 * i + f + 10) * botslen / 4);
                                bots[q].move(x, y);
                            } else {
                                x = pos.x + (Math.cos(1.1 * Math.PI * 2 / botslen + 5 * i + f + 10) * botslen / 4);
                                y = pos.y + (Math.sin(1.1 * Math.PI * 2 / botslen + 5 * i + f) * botslen / 4);
                                bots[q].move(x, y);
                            }
                        } else if (getValue("Animation") == "threed") {
                            if (i >= botslen / 2) {
                                y = pos.y + Math.cos(2 * Math.PI / bots * i + f) * 40;
                                x = pos.x + Math.sin(2 * Math.PI * 2 / bots * i + f) * 40;
                                bots[q].move(x, y);
                            } else {
                                x = pos.x + (Math.cos(2 * Math.PI * 4 / 4.09 * i + f * 2.5) * 9); // 4.09, 4.09
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / 4.09 * i + f) * 9); // 4.09, 4.09
                                bots[q].move(x, y);
                            }
                        } else if (getValue("Animation") == "flower") {
                            if (state === 1) {
                                radius121 -= 0.1;
                                localStorage.buxxed_followint - 1;
                                if (radius121 <= 1) {
                                    state = 2
                                }
                            } else {
                                radius121 += 0.2;
                                localStorage.buxxed_followint + 2;
                                if (radius121 >= 10) {
                                    state = 1
                                }
                            }
                            if (state == 2) {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / botslen * i + f) * radius121);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * i + f) * radius121);
                            } else {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / botslen * i - f) * radius121);
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / botslen * i - f) * radius121);
                            }
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "square") {
                            a = spiral.PI2 / bots[i].length * i + f;
                            x = pos.x + squareX(f / 40 * i + f) * botslen / 1.285;
                            y = pos.y + squareY(f / 40 * i + f) * botslen / 1.2
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "infinity") {
                            a = spiral.PI2 / bots[i].length * i + f;
                            x = pos.x + infinityX(f / 20 * i + f) * 40;
                            y = pos.y + infinityY(f / 20 * i + f) * 
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "infinity2") {
                            a = spiral.PI2 / bots[i].length * i + f;
                            x = pos.x + infinityX(f / 20 * i + f) * 40;
                            y = pos.y + infinityY(f / 20 * i + f) * 40;
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "default2") {
                            let x1;
                            let y1;
                            let x;
                            let y;
                            if (i >= botslen / 2) {
                                x1 = pos.x + (Math.cos(2 * Math.PI * 2 / (botslen / 2) * i) * (botslen / 2));
                                y1 = pos.y + (Math.sin(2 * Math.PI * 2 / (botslen / 2) * i) * (botslen / 2));
                                x = x1 + (Math.cos(2 * Math.PI * 2 / 4 * i + f) * 4);
                                y = y1 + (Math.sin(2 * Math.PI * 2 / 4 * i + f) * 4);
                                bots[q].move(x, y);
                            } else {
                                x = pos.x + (Math.cos(2 * Math.PI * 2 / (botslen / 2) * i) * (botslen / 2));
                                y = pos.y + (Math.sin(2 * Math.PI * 2 / (botslen / 2) * i) * (botslen / 2));
                                bots[q].move(x, y);
                            }
                        } else if (getValue("Animation") == "saturn") {
                            let t = 2 * Math.PI * 2 / botslen * i + f1;
                            if (i <= botslen / 2) {
                                let x = pos.x + (Math.cos(t + 2) * botslen / (botslen / 10))
                                let y = pos.y + (Math.sin(t) * botslen / (botslen / 10));
                                bots[q].move(x, y);
                            } else {
                                let x = pos.x + (Math.cos(t) * botslen / (botslen / 10))
                                let y = pos.y + (Math.sin(t) * botslen / (botslen / 10));
                                bots[q].move(x, y);
                            }
                        } else if (getValue("Animation") == "disk3") {
                            let t = Math.PI * 2 / botslen * i + f;
                            let t1 = Math.PI / botslen * i + f;
                            x = pos.x + (2 * Math.sin(t) + Math.sin(2 * t1)) * botslen / 2;
                            y = pos.y + (2 * Math.cos(t) - Math.cos(2 * t1)) * botslen / 2;
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "triagle") {
                            let t = Math.PI * 2 / botslen * i + f;
                            x = pos.x + (2 * Math.sin(t) + Math.sin(2 * (t))) * botslen / 2;
                            y = pos.y + (2 * Math.cos(t) - Math.cos(2 * (t))) * botslen / 2;
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "storm") {
                            let t = Math.PI * 2 / botslen * i - f;
                            let t1 = Math.PI * 3 / botslen * i + f;
                            x1 = pos.x + (Math.cos(2 * t) * botslen);
                            y1 = pos.y + (Math.sin(2 * t) * botslen);
                            x = x1 + (Math.cos(3 * t) * botslen);
                            y = y1 + (Math.sin(3 * t) * botslen);
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "disk4") {
                            y = pos.y + 40 * Math.cos(angle + f);
                            x = pos.x + 40 * Math.sin(angle);
                            bots[q].move(x, y);
                        } else if (getValue("Animation") == "nazi") {
                            let t = Math.PI * 2 / botslen * i + f;
			    if(i == 1){
			      	x = pos.x + 5;
			      	y = pos.y + 1;
			    }else if(i == 2) {
			      	x = pos.x + 4;
			      	y = pos.y + 1;
			    }else if(i == 3) {
			      	x = pos.x + 3;
			      	y = pos.y + 1;
			    }else if(i == 4) {
			      	x = pos.x + 3;
			      	y = pos.y + 2;
			    }else if(i == 5) {
			        x = pos.x + 3;
			        y = pos.y + 3;
			    }else if(i == 6) {
			        x = pos.x + 3;
			        y = pos.y + 4;
			    }else if(i == 7) {
			        x = pos.x + 3;
			        y = pos.y + 5;
			    }else if(i == 8) {
			        x = pos.x + 1;
			        y = pos.y + 1;
			    }else if(i == 9) {
			        x = pos.x + 1;
			        y = pos.y + 2;
			    }else if(i == 10) {
			        x = pos.x + 1;
			        y = pos.y + 3;
			    }else if(i == 11) {
			        x = pos.x + 2;
			        y = pos.y + 3;
			    }else if(i == 12) {
			        x = pos.x + 4;
			        y = pos.y + 3;
			    }else if(i == 13) {
			        x = pos.x + 5;
			        y = pos.y + 3;
			    }else if(i == 14) {
			        x = pos.x + 5;
			        y = pos.y + 4;
			    }else if(i == 15) {
			        x = pos.x + 5;
			        y = pos.y + 5;
			    }else if(i == 16) {
			        x = pos.x + 1;
			        y = pos.y + 5;
			    }else if(i == 17) {
			        x = pos.x + 2;
			        y = pos.y + 5;
			    }else if(i == 18) {
			        x = pos.x + 3;
			        y = pos.y + 5;
			    }else{
			    	let t = Math.PI * 2 / (botslen - 18) * (i-18) + f;
			    	x = pos.x + 3 + (Math.cos(t) * ((botslen - 18) * 1));
			    	y = pos.y + 3 + (Math.sin(t) * ((botslen - 18) * 1));
			    	bots[q].move(x, y);
			    };
                        };
					};
				}, parseInt(getValue("FollowInterval")));
			} else {
				clearInterval(folint);
			};
		};
		function conallproxy(){
			proxy.forEach(prox => {
				for(let i = 0; i < botcount; i++){
					let newbot = botting.proxyJoin(prox);
					bots.push(newbot);
				};
			});
		};
		function con(){
			for(let i = 0; i < botcount; i++){
				let newbot = botting.join();
				newbot.onopen = () => {
					document.getElementById("master-main-content-info").innerText = `${bots.filter(fil => fil.readyState === 1).length} bots connected.`;
				};
				newbot.onclose = () => {
					document.getElementById("master-main-content-info").innerText = `${bots.filter(fil => fil.readyState === 1).length} bots connected.`;
				};
				newbot.onerror = () => {
					document.getElementById("master-main-content-info").innerText = `${bots.filter(fil => fil.readyState === 1).length} bots connected.`;
				};
				bots.push(newbot);
			};
		};
		// ui
		document.body.insertAdjacentHTML(`beforeend`, `
<div id="master-content">
	<div id="tabbar">
		<button id="master-tabbar-main">Main</button>
		<button id="master-tabbar-settings">Settings</button>
	</div>
	<hr id="master-hr-tabbar">
	<div id="content">
		<div id="master-main-content">
			<form id="master-main-content-section-connection">
				<fieldset>
					<legend class="master-text">Connection</legend>
					<input value="3" type="number" id="master-main-content-botcount" style="width: 140px; border: solid 1px; user-select: none;" placeholder="Count" value="" title="Number of bots to connect."></input>
					<button id="master-main-content-connect">Connect</button>
					<button id="master-main-content-conall">Conall proxy</button>
					<button id="master-main-content-disconnect">Disconnect</button>
					<br>
					<label id="master-main-content-info">0 bots connected.</label>
				</fieldset>
			</form>
	        <form>
	        	<fieldset>
	        		<legend class="master-text">Utils</legend>
	                <div><input type="checkbox" id="master-main-content-sameenabler" name="master-main-content-same"></input><label id="master-main-content-samelabel">Same</label></div>
	        	</fieldset>
	        	<fieldset>
	        		<legend class="master-text">Bot movement</legend>
	        		<select style="width: 100px; font-size: 13px; border: solid 1px;" id="master-main-content-followlist">
	                    <option>Circle</option>
	                    <option>Disk</option>
	                    <option>Atom</option>
	                    <option>Random</option>
	                    <option>Wave</option>
	                    <option>Right-Left</option>
	                    <option>Hyperbola</option>
	                    <option>BotLine</option>
	                    <option>X</option>
	                    <option>Spiral</option>
	                    <option>Cool</option>
	                    <option>Disk 2</option>
	                    <option>Top-Bottom</option>
	                    <option>Laggy</option>
	                    <option>Small Circle</option>
	                    <option>8</option>
	                    <option>Cool 2</option>
	                    <option>3D</option>
	                    <option>Flower</option>
	                    <option>Infinity</option>
	                    <option>Infinity 2</option>
	                    <option>Square</option>
	                    <option>Default 2</option>
	                    <option>Disk 3</option>
	                    <option>Saturn</option>
	                    <option>Triagle</option>
	                    <option>Storm</option>
	                    <option>Disk 4</option>
	                    <option>Nazi</option>
	                </select>
	                <input type="number" id="master-main-content-offset" style="width: 140px; border: solid 1px; user-select: none;" placeholder="Offset" value="11"></input>
	                <input type="number" id="master-main-content-interval" style="width: 140px; border: solid 1px; user-select: none;" placeholder="Interval" value="79"></input>
	                <div><input type="checkbox" id="master-main-content-followenabler" name="followenabler"></input><label id="master-main-content-followlabel">Follow</label></div>
	                <div><input type="checkbox" id="master-main-content-paintfollowenabler" name="paintfollowenabler"></input><label id="master-main-content-paintfollowlabel">Paint Follow</label></div>
	                <div><input type="checkbox" id="master-main-content-paintfollowplusenabler" name="paintfollowplusenabler"></input><label id="master-main-content-paintfollowpluslabel">Paint Follow Plus</label></div>
	        	</fieldset>
	        </form>
		</div>
		<div id="master-settings-content" hidden>
			<form>
				<fieldset>
					<legend class="master-text">Bots</legend>
					<input id="master-settings-content-proxies" style="width: 140px; border: solid 1px; user-select: none;" placeholder="ProxyPasswords" title="ProxyPasswords"></input>
					<input id="master-settings-content-reconnecttime" style="margin-left: 30px;width: 140px; border: solid 1px; user-select: none;" placeholder="ReconnectTime" title="ReconnectTime"></input>
				</fieldset>
				<span class="master-text">MasterBot for cursors.io v1.0.0 </span><label class="master-text">by <a href="https://discord.gg/7uP389qB">scar17off</a></label>
				<br>
				<label class="master-text">Last update: 2022.04.11 (11st april 2022)</label>
			</form>
		</div>
	</div>
</div>
<style>
	a:-webkit-any-link {
	    color: #878787;
	    cursor: pointer;
	}
	fieldset {
	    display: block;
	    margin-inline-start: 2px;
	    margin-inline-end: 2px;
	    padding-block-start: 0.35em;
	    padding-inline-start: 0.75em;
	    padding-inline-end: 0.75em;
	    padding-block-end: 0.625em;
	    min-inline-size: min-content;
	    border-width: 1px;
	    border-style: groove;
	    border-image: initial;
	    border-color: rgba(0, 0, 0, 1);
	}
	.master-text {
		color: #000000;
		cursor: default;
	}
	.section {
	    width: 160px;
	    padding: 5px;
	}
	button[id^="master-"] {
	    border: 6px #444444 outset;
	    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    transition: -webkit-filter 0.125s;
	    transition: filter 0.125s;
	    transition: filter 0.125s, -webkit-filter 0.125s;
	}
	button[id^="master-tabbar-"] {
	    border: 6px #444444 outset;
	    -o-border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    border-image: url(https://raw.githubusercontent.com/scar17off/OSM-2-packages/main/packages/assets/window_out.png) 11 repeat;
	    transition: -webkit-filter 0.125s;
	    transition: filter 0.125s;
	    transition: filter 0.125s, -webkit-filter 0.125s;
	    padding: initial;
	    vertical-align: super;
	    border-bottom-width: thin;
	}
	#master-hr-tabbar {
		margin-top: auto;
		border-color: rgb(21, 21, 21);
	}
	#master-hr {
		border-color: rgb(80, 0, 146);
	}
	span[id^="master-"], label[id^="master-"] {
		color: #000000;
	}
	span {
	  	color: #000000;
	}
	input[type="range"] {
	  	font-weight: 100;
	  	font-style: normal;
	}
</style>
`);
		document.getElementById("master-tabbar-main").addEventListener("click", () => {
			document.getElementById("master-settings-content").hidden = true;
			document.getElementById("master-main-content").hidden = false;
		});
		document.getElementById("master-tabbar-settings").addEventListener("click", () => {
			document.getElementById("master-main-content").hidden = true;
			document.getElementById("master-settings-content").hidden = false;
		});
		document.getElementById("master-main-content-connect").onclick = () => {
			con();
		};
		document.getElementById("master-main-content-botcount").onchange = () => {
			botcount = document.getElementById("master-main-content-botcount").value;
			setValue("BotCount", document.getElementById("master-main-content-botcount").value);
		};
		document.getElementById("master-main-content-followenabler").onchange = () => {
			let val = document.getElementById("master-main-content-followenabler").checked;
			follow(val);
			setValue("Follow", val);
		};
		document.getElementById("master-main-content-followlist").onchange = () => {
			setValue("Animation", document.getElementById("master-main-content-followlist").value.toString().toLowerCase());
		};
		document.getElementById("master-main-content-disconnect").onclick = () => {
			for(let i in bots.filter(fil => fil.readyState == 1)){
				bots[i].close();
			};
		};
		document.getElementById("master-main-content-paintfollowplusenabler").onchange = () => {
			setValue("PaintFollowPlus", document.getElementById("master-main-content-paintfollowplusenabler").checked);
		};
		document.getElementById("master-main-content-interval").onchange = () => {
			setValue("FollowInterval", document.getElementById("master-main-content-interval").value);
		};
		document.getElementById("master-main-content-paintfollowenabler").onchange = () => {
			setValue("PaintFollow", document.getElementById("master-main-content-paintfollowenabler").checked);
		};
		document.getElementById("master-main-content-conall").onclick = () => {
			conallproxy();
		};
		document.getElementById("master-main-content-sameenabler").onchange = () => {
			same = document.getElementById("master-main-content-sameenabler").checked;
		};
	}, 3500);
})();
