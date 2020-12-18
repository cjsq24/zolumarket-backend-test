import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.get('/send-to-device', services.pushNotifications.sendToDevice)
router.get('/send-topic', services.pushNotifications.sendTopic)

export default router;