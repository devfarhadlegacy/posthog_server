import express from 'express';
import {
  contractProductActivated,
  contractProductCreated,
  contractProductPackageChanged,
  contractProductPriceChanged,
  contractProductRenewOff,
  contractProductCancelled,
  contractProductCurrencyChanged,
  contractProductInvoicingStarted,
  contractProductOwnershipChanged,
  contractProductSetupFailed,
  contractProductClosed,
  contractProductRenewed,
  contractProductTrialStarted,
  contractProductSuspended,
  contractProductUnsuspended,
  contractProductTrialToPaid
} from '../../controllers/upmind.js'
const router = express.Router()
router.post('/activated', contractProductActivated)
router.post('/created', contractProductCreated)
router.post('/packagechanged', contractProductPackageChanged)
router.post('/pricechanged', contractProductPriceChanged)
router.post('/ownershipchanged', contractProductOwnershipChanged)
router.post('/renewoff', contractProductRenewOff)
router.post('/cancelled', contractProductCancelled)
router.post('/currencychanged', contractProductCurrencyChanged)
router.post('/invoicingstarted', contractProductInvoicingStarted)
router.post('/setupfailed', contractProductSetupFailed)
router.post('/closed', contractProductClosed)
router.post('/renewed', contractProductRenewed)
router.post('/trialStarted', contractProductTrialStarted)
router.post('/suspended', contractProductSuspended)
router.post('/unsuspended', contractProductUnsuspended)
router.post('/trialToPaid', contractProductTrialToPaid)

export default router;
