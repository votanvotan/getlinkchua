"use strict"
var request = require('request');
var CryptoJS = require("crypto-js");
const passPhimbathu = "phimbathu.com" + '4590481877';

function getEpisodePhimbathu(url) {
    let mId = (url +'_').match(/-(\d+)_/i);
    if(mId && mId[1]){
        return new Promise((resolve, reject) => {
            request(url, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    //console.log(body);
                    let arrFile = body.match(/"file":"([^"]+)"/g);
                    var arrLink = [];
                    if( arrFile ){
                        for(let file of arrFile){
                            //console.log( file );
                            let mf = file.match(/"file":"([^"]+)"/i);
                            if(mf && mf[1]){
                                var encFile = mf[1].replace(/\\\//g, '/');
                                let link = CryptoJS.AES.decrypt(encFile, passPhimbathu + mId[1]).toString(CryptoJS.enc.Utf8);
                                arrLink.push( link )
                            }
                        }
                    }
                    if(arrLink.length > 0){
                        resolve(arrLink)
                    }
                }
                reject();
            });
        });
    }
    return;
}

exports.getlinkphimbathu = getEpisodePhimbathu;