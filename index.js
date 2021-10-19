const https = require('https')

const data = new TextEncoder().encode(
    JSON.stringify({
        noee: '~@Tedi1377./'
    })
)

const options = {
    hostname: 'bidex.pw',
    port: 80,
    path: '/appSignal/ajax/n_signal.php',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(options, res => {
    //console.log(`statusCode: ${res.statusCode}`)
    res.on('data', d => {
        console.log(d);
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()