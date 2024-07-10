// Module einbringen:

const express = require('express');
const bodyParser = require('body-parser');
//const lescape = require('escape-latex');
const latex = require('node-latex');
const fs = require('fs');

// Variabeln definieren, die als States genutzt werden
let Löschstate = true;
let Sendstate = false;

const app = express();
const FilePath = __dirname + '/output.pdf';

 
//Express sagen was es tun soll:
// Parse application/x-www-form-urlencoded

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.json());

// Wenn die http route / aufgerufen wird, wird auf diesen GET request als antwort die index.htlm gesendet, die sich im public folder befindet

  app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');
  
  });
  
  
   // Sobald /generate-muster aufgerufen wird, passiert folgendes:
  
  app.post('/generate-pdf', (req, res) => {
    // Die Daten des html forms werden von der request in dem bodyparser in das Objket 'data' geschrieben
    
    const data = req.body;

    // es werden neue variablen definiert:
    // ortData ist ein String der Output der lescape funktion ist, die von dem escape-latex modul kommt. Hier wird ein String eingegeben und alle Latex relevanten charaktäre wie z.b. {,} \ werden durch "nicht latex relevante" ersetzt.
    // dabei ist data.erste der string des values von 'erste' in dem data objekt.
    const variable1Data = data.eins;
    const variable2Data = data.zwei;
    const variable3Data = data.drei;
    const variable4Data = data.vier;
    const variable5Data = data.fünf;
    const variable6Data = data.sechs;
    const variable7Data = data.sieben;
    const variable8Data = data.acht;
    const variable9Data = data.neun;
    const variable10Data = data.zehn;
    const variable11Data = data.elf;
    const variable12Data = data.zwölf;
    const variable13Data = data.dreizehn;
    const variable14Data = data.vierzehn;
    const variable15Data = data.fünfzehn;
    const variable16Data = data.sechzehn;
    const variable17Data = data.siebzehn;
    const variable18Data = data.achtzehn;
    const variable19Data = data.neunzehn;
    const variable20Data = data.zwanzig;
    const variable21Data = data.einundzwanzig;
    const variable22Data = data.zweiundzwanzig;
    const variable23Data = data.dreiundzwanzig;
    const variable24Data = data.vierundzwanzig;
    const variable25Data = data.fünfundzwanzig;
    const variable26Data = data.sechsundzwanzig;
    const variable27Data = data.siebenundzwanzig;
    const variable28Data = data.achtundzwanzig;
    const variable29Data = data.neunundzwanzig;
    const variable30Data = data.dreißig;
    const variable31Data = data.einunddreißig;
    const variable32Data = data.zweiunddreißig;
    const variable33Data = data.dreiunddreißig;
    const variable34Data = data.vierunddreißig;
    const variable35Data = data.fünfunddreißig;
    const variable36Data = data.sechsunddreißig;
    const variable37Data = data.siebenunddreißig;
    const variable38Data = data.achtunddreißig;
    const variable39Data = data.neununddreißig;
    const variable40Data = data.vierzig;
    const variable41Data = data.einundvierzig;
    const variable42Data = data.zweiundvierzig;
    const variable43Data = data.dreiundvierzig;
    const variable44Data = data.vierundvierzig;
    const variable45Data = data.fünfundvierzig;
    const variable46Data = data.sechsundvierzig;
    const variable47Data = data.siebenundvierzig;
    const variable48Data = data.achtundvierzig;
    const variable49Data = data.neunundvierzig;
    const variable50Data = data.fünfzig;
    const variable51Data = data.einundfünfzig;
    const variable52Data = data.zweiundfünfzig;
    const variable53Data = data.dreiundfünfzig;
    const variable54Data = data.vierundfünfzig;
    const variable55Data = data.fünfundfünfzig;
    const variable56Data = data.sechsundfünfzig;
    const variable57Data = data.siebenundfünfzig;
    const variable58Data = data.achtundfünfzig;
    const variable59Data = data.neunundfünfzig;
    const variable60Data = data.sechzig;
    const variable61Data = data.einundsechzig;
    const variable62Data = data.zweiundsechzig;
    const variable63Data = data.dreiundsechzig;
    const variable64Data = data.vierundsechzig;
    const variable65Data = data.fünfundsechzig;
    const variable66Data = data.sechsundsechzig;
    const variable67Data = data.siebenundsechzig;
    const variable68Data = data.achtundsechzig;
    const variable69Data = data.neunundsechzig;
    const variable70Data = data.siebzig;
    const variable71Data = data.einundsiebzig;
    const variable72Data = data.zweiundsiebzig;
    const variable73Data = data.dreiundsiebzig;
    const variable74Data = data.vierundsiebzig;
    const variable75Data = data.fünfundsiebzig;
    const variable76Data = data.sechsundsiebzig;
    const variable77Data = data.siebenundsiebzig;
    const variable78Data = data.achtundsiebzig;
    const variable79Data = data.neunundsiebzig;
    const variable80Data = data.achtzig;
    const variable81Data = data.einundachtzig;
    const variable82Data = data.zweiundachtzig;
    const variable83Data = data.dreiundachtzig;
    const variable84Data = data.vierundachtzig;
    const variable85Data = data.fünfundachtzig;
    const variable86Data = data.sechsundachtzig;
    const variable87Data = data.siebenundachtzig;
    const variable88Data = data.achtundachtzig;
    const variable89Data = data.neunundachtzig;
    const variable90Data = data.neunzig;
    const variable91Data = data.einundneunzig;
    const variable92Data = data.zweiundneunzig;
    const variable93Data = data.dreiundneunzig;
    const variable94Data = data.vierundneunzig;
    const variable95Data = data.fünfundneunzig;
    const variable96Data = data.sechsundneunzig;
    const variable97Data = data.siebenundneunzig;
    const variable98Data = data.achtundneunzig;
    const variable99Data = data.neunundneunzig;
    const variable100Data = data.einhundert;
    const variable101Data = data.einhunderteins;
    const variable102Data = data.einhundertzwei;
    const variable103Data = data.einhundertdrei;
    const variable104Data = data.einhundertvier;
    const variable105Data = data.einhundertfünf;
    const variable106Data = data.einhundertsechs;
    const variable107Data = data.einhundertsieben;
    const variable108Data = data.einhundertacht;
    const variable109Data = data.einhundertneun;
    const variable110Data = data.einhundertzehn;
    const variable111Data = data.einhundertelf;
    const variable112Data = data.einhundertzwölf;
    const variable113Data = data.einhundertdreizehn;
    const variable114Data = data.einhundertvierzehn;
    const variable115Data = data.einhundertfünfzehn;
    const variable116Data = data.einhundertsechzehn;
    const variable117Data = data.einhundertsiebzehn;
    const variable118Data = data.einhundertachtzehn;
    const variable119Data = data.einhundertneunzehn;
    const variable120Data = data.einhundertzwanzig;


    console.log(data);
    console.log(variable1Data,variable2Data);
  
   
  // die muster.tex datei wird aus dem dateinsystem gelesen und als string die die variable inputString gespeichert.
    const inputString = fs.readFileSync('muster.tex').toString();

    // hier passier die Magie:
    //in dem Latex string werden jetzt die platzhalter wie z.b. 'hierwirdspäterersetzt' mit dem Wert der Variable ersetzt von variable1Data.
    // d.h. es ist wichtig, dass die Platzhalter in eurem Latex dokument einzigartig sind, da alles ersetzt wird, was so heißt.
    const input_1 = inputString.replace('eins',variable1Data).replace('zwei',variable2Data).replace('drei', variable3Data)
    .replace('vier', variable4Data)
    .replace('fünf', variable5Data)
    .replace('sechs', variable6Data)
    .replace('sieben', variable7Data)
    .replace('acht', variable8Data)
    .replace('neun', variable9Data)
    .replace('zehn', variable10Data)
    .replace('elf', variable11Data)
    .replace('zwölf', variable12Data)
    .replace('dreizehn', variable13Data)
    .replace('vierzehn', variable14Data)
    .replace('fünfzehn', variable15Data)
    .replace('sechszehn', variable16Data)
    .replace('siebzehn', variable17Data)
    .replace('achtzehn', variable18Data)
    .replace('neunzehn', variable19Data)
    .replace('zwanzig', variable20Data)
    .replace('einundzwanzig', variable21Data)
    .replace('zweiundzwanzig', variable22Data)
    .replace('dreiundzwanzig', variable23Data)
    .replace('vierundzwanzig', variable24Data)
    .replace('fünfundzwandig', variable25Data)
    .replace('sechsundzwanzig', variable26Data)
    .replace('siebenundzwanzig', variable27Data)
    .replace('achtundzwanzig', variable28Data)
    .replace('neunundzwanzig', variable29Data)
    .replace('dreißig', variable30Data)
    .replace('einunddreißig', variable31Data)
    .replace('zweiunddreißig', variable32Data)
    .replace('dreiundreißig', variable33Data)
    .replace('vierunddreißig', variable34Data)
    .replace('fünfunddreißig', variable35Data)
    .replace('sechsunddreißig', variable36Data)
    .replace('siebenunddreißig', variable37Data)
    .replace('achtunddreißig', variable38Data)
    .replace('neununddreißig', variable39Data)
    .replace('vierzig', variable40Data)
    .replace('einundvierzig', variable41Data)
    .replace('zweiundvierzig', variable42Data)
    .replace('dreiundvierzig', variable43Data)
    .replace('vierundvierzig', variable44Data)
    .replace('fünfundvierzig', variable45Data)
    .replace('sechsundvierzig', variable46Data)
    .replace('siebenundvierzig', variable47Data)
    .replace('achtundvierzig', variable48Data)
    .replace('neunundvierzig', variable49Data)
    .replace('fünfzig', variable50Data)
    .replace('einundfünfzig', variable51Data)
    .replace('zweiundfünfzig', variable52Data)
    .replace('dreiundfünfzig', variable53Data)
    .replace('vierundfünfzig', variable54Data)
    .replace('fünfundfünfzig', variable55Data)
    .replace('sechsundfünfzig', variable56Data)
    .replace('siebenundfünfzig', variable57Data)
    .replace('achtundfünfzig', variable58Data)
    .replace('neunundfünfzig', variable59Data)
    .replace('sechzig', variable60Data)
    .replace('einundsechzig', variable61Data)
    .replace('zweiundsechzig', variable62Data)
    .replace('dreiundsechzig', variable63Data)
    .replace('vierundsechzig', variable64Data)
    .replace('fünfundsechzig', variable65Data)
    .replace('sechsundsechzig', variable66Data)
    .replace('siebenundsechzig', variable67Data)
    .replace('achtundsechzig', variable68Data)
    .replace('neunundsechzig', variable69Data)
    .replace('siebzig', variable70Data)
    .replace('einundsiebzig', variable71Data)
    .replace('zweiundsiebzig', variable72Data)
    .replace('dreiundsiebzig', variable73Data)
    .replace('vierundsiebzig', variable74Data)
    .replace('fünfundsiebzig', variable75Data)
    .replace('sechsundsiebzig', variable76Data)
    .replace('siebenundsiebzig', variable77Data)
    .replace('achtundsiebzig', variable78Data)
    .replace('neunundsiebzig', variable79Data)
    .replace('achtzig', variable80Data)
    .replace('einundachtzig', variable81Data)
    .replace('zweiundachtzig', variable82Data)
    .replace('dreiundachtzig', variable83Data)
    .replace('vierundachtzig', variable84Data)
    .replace('fünfundachtzig', variable85Data)
    .replace('sechsundachtzig', variable86Data)
    .replace('siebenundachtzig', variable87Data)
    .replace('achtundachtzig', variable88Data)
    .replace('neunundachtzig', variable89Data)
    .replace('neunzig', variable90Data)
    .replace('einundneunzig', variable91Data)
    .replace('zweiundneunzig', variable92Data)
    .replace('dreiundneunzig', variable93Data)
    .replace('vierundneunzig', variable94Data)
    .replace('fünfundneunzig', variable95Data)
    .replace('sechsundneunzig', variable96Data)
    .replace('siebenundneunzig', variable97Data)
    .replace('achtundneunzig', variable98Data)
    .replace('neunundneunzig', variable99Data)
    .replace('einhundert', variable100Data)
    .replace('einhunderteins', variable101Data)
    .replace('einhundertzwei', variable102Data)
    .replace('einhundertdrei', variable103Data)
    .replace('einhundertvier', variable104Data)
    .replace('einhundertfünf', variable105Data)
    .replace('einhundertsechs', variable106Data)
    .replace('einhundertsieben', variable107Data)
    .replace('einhundertacht', variable108Data)
    .replace('einhundertneun', variable109Data)
    .replace('einhundertzehn', variable110Data)
    .replace('einhundertelf', variable111Data)
    .replace('einhundertzwölf', variable112Data)
    .replace('einhundertdreizehn', variable113Data)
    .replace('einhundertvierzehn', variable114Data)
    .replace('einhundertfünfzehn', variable115Data)
    .replace('einhundertsechzehn', variable116Data)
    .replace('einhundertsiebzehn', variable117Data)
    .replace('einhundertachtzehn', variable118Data)
    .replace('einhundertneunzehn', variable119Data)
    // wenn es mehr als 2 variablen gibt dann muss auch jeweils eine weitere replace funktion hinzugefügt werden.


    //let input_1 = "";
    //for (let i = 1; i <= 120; i++) {
   //  input_1 = inputString.replace(new RegExp(i, "g"), `variable${i}Data`);
   // }
    console.log(input_1);

    // A1
    const output = fs.createWriteStream('output.pdf');
    // erst wenn die Löschugn der vorherigen datei erfolgreich war wird der folgende code ausgeführt.
    if(Löschstate === false){
      res.sendStatus(500);
      console.log('Output kann nicht erzeugt werden, da Löschung unvollständig');
      return;

    }
    else{
      // hier wird jetzt der neue String, der unsern Latex code enthält und die ersetzten variablen in 
      // die funktion latex eingesetzt, die zusammen mit dem 'output' stream (siehe A1) die pdf generiert und als output.pdf speichert 
      const pdf = latex(input_1);
      //res.send('something')
      pdf.pipe(output);
      //res.setHeader('Content-Type', 'application/pdf');

      
      output.on('finish', () => {
        // erst wenn die datei vollkommen generiert wurde wird sie an den client gesendet. 
        //res.sendFile(__dirname + '/output.pdf');
        res.sendStatus(200);
        res.on('finish', ()=> {
          Sendstate = true;
          console.log('Sending complete');
          console.log(Sendstate);
        
          return Sendstate;
        });
      });
    };
// hier wird alle 1000ms gecheckt ob sendstate true ist, welches erst nach vollständigem senden der pdf true wird.
// danach wird die output.pdf gelöscht mit der deletfile() funktion
    const interval = setInterval(() => {
      if (Sendstate === true) {
        clearInterval(interval); // Intervall beenden
        //deletfile();
      }
    }, 1000);
    
  });

// funktion die die output datei löscht

function deletfile() {
  if(Sendstate === false){
    console.log('sending not yet complete')
    
  }
  else{
    fs.unlink(FilePath, (err) => {
      if (err) {
        console.error('There was an error whil deleting:', err);
        Löschstate = false;
        
        return Löschstate;
      } else {
        console.log('File succesfully deleted!');
        
      }
    });
  };
};


app.get('/generate-pdf2', (req, res) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.sendFile(__dirname + '/output.pdf');
  
  });
// Express Server fängt an auf Anfragen auf Port 3001 zu warten.

app.listen(3001, () => {

  console.log('Server listening on port 3001');

});