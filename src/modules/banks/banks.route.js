import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.get('/list', authentication, services.banks.list)
router.post('/register', authentication, services.banks.register)
router.put('/update', authentication, services.banks.update)

export default router;