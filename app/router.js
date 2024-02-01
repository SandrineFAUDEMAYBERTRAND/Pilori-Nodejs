import express from 'express';
import mainController from './controllers/mainController.js';
import authController from './controllers/authController.js';
import profilUseController from './controllers/profilUseController.js';
import siteDenoncesController from './controllers/siteDenoncesController.js';

const router = express.Router();

router.get('/', mainController.showHomePage);
router.get('/mentions-legales', mainController.showMentionsLegales);
router.get('/contact', mainController.showContact);
router.get('/tomates', mainController.showTomates);
router.get('/tomates/denoncer', siteDenoncesController.showTomatesDenoncer);
router.get('/connexion', authController.showFormConnexion);
router.get('/inscription', authController.showFormInscription);
router.get('/deconnexion', profilUseController.showDeconnexion);
router.get('/profil', profilUseController.showProfilUtilisateur);

/* router.get('/tomates/:slug', mainController.) */; /* faire ici pages de detail d'un site denonce ainsi que route parametrer puis ds mainControler showSlug et  */

router.post('/tomates/denoncer', siteDenoncesController.showTomatesDenoncer);
router.post('/connexion', authController.showTraitementFormConnexion); /* a faire ds mainController traitementFormConnexion  */
router.post('incription', authController.showFormInscription);


export default router;