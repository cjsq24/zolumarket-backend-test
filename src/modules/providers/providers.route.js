import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.post('/register', authentication, services.providers.register)
router.put('/update', authentication, services.providers.update)

export default router;