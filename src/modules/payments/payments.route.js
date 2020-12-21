import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.get('/list', authentication, services.payments.list)
router.post('/register', authentication, services.payments.register)
router.put('/update', authentication, services.payments.update)

export default router;