import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.get('/list'/*, authentication*/, services.products.list)
router.post('/register', authentication, services.products.register)
router.put('/update', authentication, services.products.update)

export default router;