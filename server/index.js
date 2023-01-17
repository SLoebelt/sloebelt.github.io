import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import Question from "./models/Question.js";
import Action from "./models/Action.js";
import Special from "./models/Special.js";


const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));

app.get("/api/test", (req, res) => {
    res.send("Dies war ein HTTP Request")
});

/* INSERT ROUTES*/
app.post('/api/question/create', (req,res) => {

  Question.create(req.body).then(function(quesdata){
      res.send(quesdata)
  })
});


app.post('/api/action/create', (req,res) => {

  Action.create(req.body).then(function(actiondata){
      res.send(actiondata)
  })
});


app.post('/api/special/create', (req,res) => {

  Special.create(req.body).then(function(specialdata){
      res.send(specialdata)
  })
});


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Connected to backend"));
  })
  .catch((error) => console.log(`${error} did not connect`));






  // app.post('/question/createquestion', (req,res) => {

  //   let questions = {
  //       content: 'Warum?',
  //       answers: [{content:'A', correct: false, order: 1}, {content: 'B', correct: false, order: 2}, {content: 'C', correct: true, order: 3}],
  //       difficulty: 1,
  //       hint:[{content: "Es ist immer C", used: true}],
  //       explanation: 'is halt so'
  //   }
  
  //   Question.create(questions).then(function(quesdata){
  //       res.send(quesdata)
  //   })
  // });
  
  // app.post('/action/createaction', (req,res) => {
  
  //   let actions = {
  //       description: 'Öffnen Sie die Kamera auf dem Smartphone und nehmen Sie Foto von dem Spielbrett auf. Zeigen Sie das Foto anschließend Ihren Mitspieler:innen',
  //       solution: {
  //         description: 'liegt im Teams Ordner “Lösungen” als Bildschirmaufnahme', 
  //         slides: [
  //           {
  //             description:'Slide 1', 
  //             mediaURL: 'https://www.zeitblueten.com/wp-content/uploads/pxb-problem-loesen.jpg', 
  //             mimetype: 'image'
  //           },
  //         ] 
  //       },
  //       difficulty: 1,
  //       hint:[{content: "Das ist so einfach, das kriegen Sie auch so hin.", used: false},],
  //   }
  
  //   Action.create(actions).then(function(actiondata){
  //       res.send(actiondata)
  //   })
  // });
  
  // app.post('/special/createspecial', (req,res) => {
  
  //   let specials = {
  //       content: 'Wie infiziert sich ein Gerät mit Schadprogrammen? Geben Sie mindestens 1 Antwort ab.',
  //       answer: 'o	E-Mail Anhänge: Einige Dateiformate (z.B. mit der Endung .exe oder .scr) werden beim Anklicken automatisch ausgeführt. Dabei könnten sich automatisch Schadprogramme installieren. Auch harmlos wirkende Verlinkungen im Text einer E-Mail, die beim Anklicken auf infizierte Webseiten verweisen oder den Download einer bösartigen Datei einleiten, können eine Gefahrenquelle für das System sein.'
  //             + 'o	Infizierte Software: Schadkomponenten für eine Software werden auch als Trojaner bezeichnet. Diese werden von Nutzer:innen eigenständig, jedoch unbemerkt, installiert. Oft ist dies bei kostenlosen Software Angeboten der Fall.'
  //             + 'o	Webseiten: Der Aufruf einer Webseite im Browser, die eine Schadsoftware enthält, kann ein Gerät infizieren. Auch manipulierte Werbebanner auf seriöse Webseiten können schädliche Inhalte aufweisen.'
  //             + 'o	Quelle und weitere Informationen: https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Schadprogramme/schadprogramme_node.html'
  //             + 'o	So Schützt man sich vor Schadsoftware: Schutzprogramme wie Virenschutzprogramme können installiert werden. Diese Programme überprüfen heruntergeladene Dateien und Anwendungen auf Schadsoftware. Weitere Infos gibt es unter: https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Virenschutz-Firewall/virenschutz-firewall_node.html'
  //   }
  
  //   Special.create(specials).then(function(specialdata){
  //       res.send(specialdata)
  //   })
  // });