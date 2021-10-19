const axios = require('axios')


function analiz()
{
    axios
        .get('https://bidex.pw/appSignal/ajax/n_signals.php?noee=~@Tedi1377./')
        .then(res => {
            data=res.data;
            console.log("asd");

        })
        .catch(error => {
            console.error(error)
        })
}

analiz();
setInterval(analiz,30000);
