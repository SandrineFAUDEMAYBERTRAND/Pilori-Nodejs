import validator from 'validator';

const authController = {
showFormConnexion: (req, res) => {
    res.render('formulaire de connexion');
},

showFormInscription: (req, res) => {
    res.render('formulaire d/inscription');
},

showTraitementFormConnexion: (req, res) => {
    res.render('traitement-formulaire d/inscription');
},

}

export default authController;