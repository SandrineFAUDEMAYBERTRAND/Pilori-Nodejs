//console.log("bonjour")
import express from "express";
import * as dotenv from 'dotenv';
import session from "express-session";
dotenv.config();

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

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});