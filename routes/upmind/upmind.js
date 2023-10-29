import express from 'express';
import clientRouter from './client.js'
import contractProductRouter from './contractproduct.js'
import invoiceRouter from './invoice.js'

const router = express.Router()

router.use('/client', clientRouter);
router.use('/contractproduct', contractProductRouter);
router.use('/invoice', invoiceRouter);

export default router
