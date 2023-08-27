import express from 'express';
import { contactCreated, contactUpdated, converstationCreated, converstationStatusChanged, webWidgetTriggered, } from '../controllers/upmind.js'

const router = express.Router()

router.post('/converstationcreated', converstationCreated)
router.post('/converstationstatuschanged', converstationStatusChanged)
router.post('/webwidgettriggered', webWidgetTriggered)
router.post('/contactcreated', contactCreated)
router.post('/contactupdated', contactUpdated)

export default router