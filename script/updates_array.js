var updates = {
    'Manager-apr282017': {
        'title': 'Manager List',
        'date': 'Apr 28, 2017',
        'link': 'http://www.example.com',
    },
    'Checklist-apr272017': {
        'title': 'Checklist',
        'date': 'Apr 27, 2017',
        'link': 'http://www.example.com',
    },
    'Somelist-apr252017': {
        'title': 'Some List',
        'date': 'Apr 25, 2017',
        'link': 'http://www.example.com',
    },
};

var links = {
    'Helpful-Link1-Title': {'link': 'http://www.example.com'},
    'Helpful-Link2-Title': {'link': 'http://www.example.com'},
    'Helpful-Link3-Title': {'link': 'http://www.example.com'},
};

//script from https://www.creativejuiz.fr/blog/en/javascript-en/read-url-get-parameters-with-javascript
function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}
