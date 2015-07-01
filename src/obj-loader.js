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