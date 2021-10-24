var request = require('request');


function analiz()
{
    request({
        url: 'https://bidex.pw/appSignal/ajax/n_signals.php?noee=~@Tedi1377./',
        strictSSL: false
    }, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            console.log(response.body);
        } else {
            console.log("errorrrr  ############################################################################################# errorrrr #############################################################")
        }
    });
}

analiz();
setInterval(analiz,30000);
