const querystring = require('querystring');
const https = require('https');

var postData = querystring.stringify({
    'noee' : '~@Tedi1377./'
});

var options = {
    hostname: 'https://bidex.pw',
    port: 443,
    path: '/appSignal/ajax/n_signals.php',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

var req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        console.log(d);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.end();
