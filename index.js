//console.log("bonjour")
import express from "express";
import * as dotenv from 'dotenv';
import session from "express-session";
dotenv.config();

import router from './app/router.js';
import Website from "./app/models/webSite.js";
import website from "./app/data/website.js";


const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET
}));

app.use(express.static('./S06-inte-pilori-sandrineFAUDEMAYBERTRAND/public'));
app.use(express.urlencoded({ extended: true }));

app.use(router);



app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});