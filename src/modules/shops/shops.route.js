import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.post('/register', authentication, services.shops.register)
router.put('/update', authentication, services.shops.update)

export default router;