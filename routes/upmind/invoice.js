import express from 'express';
import {
  invoiceCreated,
  invoicePaymentFailed,
  invoiceCancelled,
  invoicePaidWithNextCard,
  invoicePaid,
  invoiceRefunded,
  invoicePaymentReceived,
  invoicePaymentRefunded
} from '../../controllers/upmind.js'

const router = express.Router()

router.post('/created', invoiceCreated);
router.post('/paymentfailed', invoicePaymentFailed);
router.post('/cancelled', invoiceCancelled);
router.post('/paidWithNextCard', invoicePaidWithNextCard);
router.post('/paid', invoicePaid);
router.post('/refunded', invoiceRefunded);
router.post('/paymentReceived', invoicePaymentReceived);
router.post('/paymentRefunded', invoicePaymentRefunded);

export default router;
