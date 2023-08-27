import express from 'express';
import clientRouter from './routes/client.js'
import contractProductRouter from './routes/contractproduct.js'
import invoiceRouter from './routes/invoice.js'

const router = express.Router()

router.use('/client', clientRouter);
router.use('/contractproduct', contractProductRouter);
router.use('/invoice', invoiceRouter);

export default router