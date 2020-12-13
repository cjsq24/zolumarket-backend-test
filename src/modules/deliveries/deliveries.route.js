import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.post('/register', authentication, services.deliveries.register)
router.put('/update', authentication, services.deliveries.update)

export default router;