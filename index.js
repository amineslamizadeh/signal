var request = require('request');


function analiz()
{
    request.get("https://bidex.pw/appSignal/ajax/n_signals.php?noee=~@Tedi1377./", function (err, res, body) {
        //console.log(res);
        if ( res != undefined && res.statusCode === 200) {
            console.log(body);
            console.log("af");
        }
        else if(res == undefined)
        {
            console.log("error connect ++"+err);
        }
        else
        {
            console.error('error:', err);
        }
    });
}

analiz();
setInterval(analiz,30000);
