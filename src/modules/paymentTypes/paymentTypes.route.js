import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.get('/list', authentication, services.paymentTypes.list)
router.post('/register', authentication, services.paymentTypes.register)
router.put('/update', authentication, services.paymentTypes.update)

export default router;