const express = require("express");
const { google } = require("googleapis");
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;





const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());



app.use(cookieParser());


const SCOPES = ["https://www.googleapis.com/auth/classroom.courses.readonly"];
const CREDENDENTIALS_PATH = "client_secret.json";
let oAuth2Client;

fs.readFile(CREDENDENTIALS_PATH, (err, content) => {
  if (err)
    return console.error("Error loaing client secret information: ", err);
  const credentials = JSON.parse(content);
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/login", (req, res, next) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
 

  res.redirect(authUrl);
});

app.get("/oauthcallback", (req, res) => {
  const code = req.query.code;
  oAuth2Client.getToken(code, (err, token) => {
    if (err) return res.status(400).send("Error retrieving access token");
    oAuth2Client.setCredentials(token);
    res.cookie("token", JSON.stringify(token));
    res.redirect("/courses");
  });
});

app.get("/courses", (req, res) => {
  if (!req.cookies.token) {
    res.appendHeader(headers);
    return res.redirect("/login");
  }

  const token = JSON.parse(req.cookies.token);
  oAuth2Client.setCredentials(token);

  const classroom = google.classroom({ version: "v1", auth: oAuth2Client
  });
  classroom.courses.list(
    {
      pageSize: 10,
    },
    (err, response) => {
      if (err) return res.status(500).send("The api return an error: " + err);
      const courses = response.data.courses;
      if (courses && courses.length) {
        res.send(courses);
      } else {
        res.send("No courses found");
      }
    }
  );
});

app.get('/logout', (req, res)=>{
    res.clearCookie('token');
    res.redirect('/');
})
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:`+ PORT);
});
