import express from 'express';
import {
  invoiceCreated,
  invoicePaymentFailed
} from '../../controllers/upmind.js'

const router = express.Router()

router.post('/created', invoiceCreated);
router.post('/paymentfailed', invoicePaymentFailed);

export default router;
