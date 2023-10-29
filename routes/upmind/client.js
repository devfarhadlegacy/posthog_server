import express from 'express';
import {
  clientRegistered,
  clientLoggedIn,
  clientDeleted,
  clientLoginEmailUpdated,
  clientNotificationEmailsDeleted,
  clientUpdated
} from '../../controllers/upmind.js'
const router = express.Router()
router.post('/registered', clientRegistered);
router.post('/loggedin', clientLoggedIn);
router.post('/deleted', clientDeleted);
router.post('/notificationemailsdeleted', clientNotificationEmailsDeleted);
router.post('/loginemailupdated', clientLoginEmailUpdated);
router.post('/updated', clientUpdated);

export default router;
