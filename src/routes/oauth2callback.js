import {Router} from 'express';
const {google} = require('googleapis');
const router = Router();
var fs = require('fs');
const path = require('path');
let ejs = require('ejs');
let objectSentFromServer = "dayvson" ;

var http = require('http');


function callbk(req, res){
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log(req.body);
    let code = req.query.code;
    console.log(code);
    console.log("path.join() : " ,path.join('test','/test.html')); 
 
    res.sendFile(path.join(__dirname+'/test.html'));
 
    // res.send({"url":code});
    
}

// app.get('/', (req, res) => {
//     fs.readFile(__dirname + '/main.html', (err, html) => {
//       res.send(ejs.render(html, JSON.stringify(objectSentFromServer)))
//     })
//   })
  






//api/projects/ 
router.get('/', callbk);


 
export default router;