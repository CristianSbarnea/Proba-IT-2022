# Proba IT 2022

## Pentru rularea frontend-ului

    1) cd frontend
    2) npm i
    3) npm start
    4) serverul va fi rulat pe localhost:3000
    5) deschideti http://localhost:3000 pentru a vedea in browser

Pachete de instalat: react, react-bootstrap, react-dom, react-dropzone, react-scripts, bootstrap, web-vitals

Aplicatia de frontend pt website a fost implementata in mare folosind react si css pentru styling.
Aceasta este responsive pentru orice fel de device, de la desktop la tablete si telefoane. Probleme
ar putea aparea la modale, unde am folosit implementarea din react-bootstrap.

Am implementat aproape toate taskurile, exceptie facand functionalitatea partii cu drag&drop si 
afisarea unor butoane pt userii logati si a altora pentru cei nelogati.

Cel mai dificil task a fost sa fac website-ul sa fie responsive. Am reusit sa o rezolv folosind in cea
mai mare parte media queries.

## Pentru rularea backend-ului

    1) cd backend
    2) npm i
    3) npm start
    4) serverul va fi rulat pe localhost:3000
    5) deschideti http://localhost:3000 pentru a vedea in browser
    
Pachete de instalat: dotenv, body-parser, express, ejs, express-station, mongoose, morgan, multer, path, nodemon

La partea de backend nu am implementat foarte multe. -> To be solved

Am implementat doar schemele pt useri si meme-uri si conexiunea cu baza de date.

Cea mai dificila parte a fost sa inteleg cum functioneaza requesturile si chestiile
specifice pentru partea de backend. 
