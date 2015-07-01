(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var loader = require('./obj-loader');

loader.loadObj('bunny.obj')

},{"./obj-loader":2}],2:[function(require,module,exports){
var xhrGet = require('./xhr-get')

OBJLoader = {
    loadObj: function(url) {
        xhrGet.get(url).then(function(response) {
            this.parse(response);
        }.bind(this));
    }, 
    parse: function(text){
        console.log(text);
    }
}

module.exports = OBJLoader;
},{"./xhr-get":3}],3:[function(require,module,exports){
XHRGet = {
    get: function(url) {
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function() {
                if (req.status == 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };
            
            req.onerror = function() {
                reject(Error("Network Error"));
            };
            req.send();
        });
    }
}

module.exports = XHRGet;
},{}]},{},[1]);
