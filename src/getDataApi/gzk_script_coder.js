/**
 * 消息编码 ，需加密处理
 * Created by binli on 2016-11-04.
 */
/*export default gmc*/
export default Base64
export var doGCMMsgCreate = doGCMMsgCreate;
/*export var gmc = gmc;*/
/*
export default gmc
*/
/*export default doGCMMsgCreate*/
/*
var boolDebug=true
*/

function gmc(setKeyLevel) {
    this.keyLevel = parseInt(setKeyLevel);
    if (isNaN(this.keyLevel)){this.keyLevel = 0};
    this.key="aBc18KCk3fce2KejkA29kHC648hHk3nkmjJkdfjdaHHjufeds92HUskGe342kshf3FdcAewEde82ffea";
    if (this.keyLevel>this.key.length/4){this.keyLevel=this.key.length/4;};
    this.doGotKey = function(){for (var intIndex=0; intIndex<this.keyLevel; intIndex++){arrayKeyT.push(this.key.substr(intIndex,1));arrayKeyV.push(this.key.substr(intIndex*4,4));}};
    var arrayKeyT=new Array();var arrayKeyV=new Array();this.doGotKey();
    this.code= function (strSourceInfo) {var  strCode = new Base64().encode( strSourceInfo);for (var intIndex=0; intIndex<this.keyLevel; intIndex++){strCode = strCode.replace(new RegExp(arrayKeyT[intIndex], 'g'), arrayKeyV[intIndex]);}return strCode;};
    this.decode = function(strSourceInfo){var  strCode = strSourceInfo;for (var intIndex=this.keyLevel-1; intIndex>=0; intIndex--){strCode = strCode.replace(new RegExp(arrayKeyV[intIndex], 'g'), arrayKeyT[intIndex]);}var strRowInfoRow = new Base64().decode(strCode);return strRowInfoRow;};
}

function doGCMMsgCreate(intSetMsgID){
    var returnJson = {};
    returnJson.intMsgID = intSetMsgID;
    returnJson.strMsgDesc = "";
    returnJson.intMsgStatus = 0 ;
    returnJson.intMsgVer = 1 ;
    console.log('doGCMMsgCreate',returnJson)
    return returnJson
}



function Base64() {
    // private property
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            };
            output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +	_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }

    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }

    // private method for UTF-8 encoding
    var _utf8_encode = function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }

    // private method for UTF-8 decoding
    var _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c , c1 , c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                var c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
