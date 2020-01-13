import {Router} from 'express';
const {google} = require('googleapis');
const router = Router();


const oauth2Client = new google.auth.OAuth2(
    '844940046342-jqh382agmk8api6sife05gi8veckk770.apps.googleusercontent.com',
    'txjvAc43JrvU7PyrUZmxWUUh',
    'http://localhost:4000/api/oauth2callback'
  );
  
  // generate a url that asks permissions for Blogger and Google Calendar scopes
  const scopes = [
  //   'https://www.googleapis.com/auth/blogger',
  //   'https://www.googleapis.com/auth/calendar'
  'https://mail.google.com/',
  'openid',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
  ];
  
  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline', 
    // If you only need one scope you can pass it as a string
    scope: scopes
  });
  


function createurl(req, res){
    console.log("-----------------creat url----");
    console.log(req.body);



    // res.send({"url":"url back"});

    res.send({"url":url});
 
}


// app.get('/url', function(req, res){
//     res.send(url);
// });



//api/projects/ 
router.get('/', createurl);


 
export default router;

