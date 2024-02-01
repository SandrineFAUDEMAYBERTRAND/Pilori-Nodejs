import validator from 'validator';

const authController = {

}


showFormConnexion: (req, res) => {
    res.render('formulaire de connexion');
},

showFormInscription: (req, res) => {
    res.render('formulaire d/inscription');
},


export default authController;