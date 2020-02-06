const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.listen(80)

// var urlencodeParser = bodyParser.urlencoded({extended:false})
// app.get('/*', urlencodeParser,function(req, res){
//     console.log('/* post')
//     console.log(req);
//     res.send(req.url + 'dwfwef')
// })
var urlencodeParser = bodyParser.urlencoded({extended:false})
app.get('/*',function(req, res){
    // console.log('/* post')
    console.log(req);
    res.send(req.url + 'dwfwef')
})
