import validator from 'validator';


const profilUseController = {

showProfilUtilisateur: (req, res) => {
    res.render('profil d/un utilisateur');
},

showDeconnexion: (req, res) => {
    res.render('deconnexion');
},
}



export default profilUseController;