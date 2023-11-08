import express from 'express';
import {
  clientRegistered,
  clientLoggedIn,
  clientDeleted,
  clientLoginEmailUpdated,
  clientNotificationEmailsDeleted,
  clientUpdated,
  clientWalletBalanceAdjusted,
  clientConsolidationInvoicesDispatched,
  clientStaffCreatedVerifiedClient
} from '../../controllers/upmind.js'
const router = express.Router()
router.post('/registered', clientRegistered);
router.post('/loggedin', clientLoggedIn);
router.post('/deleted', clientDeleted);
router.post('/notificationemailsdeleted', clientNotificationEmailsDeleted);
router.post('/loginemailupdated', clientLoginEmailUpdated);
router.post('/updated', clientUpdated);
router.post('/walletBalanceAdjusted', clientWalletBalanceAdjusted);
router.post('/consolidationInvoicesDispatched', clientConsolidationInvoicesDispatched);
router.post('/staffCreatedVerifiedClient', clientStaffCreatedVerifiedClient);

export default router;
