import express from 'express';
import mainController from './controllers/mainController.js';
const router = express.Router();

router.get('/accueil', mainController.showHomePage);
router.get('/mentions-legales', mainController.showMentionsLegales);


export default router;