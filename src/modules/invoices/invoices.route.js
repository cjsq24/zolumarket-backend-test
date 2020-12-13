import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.post('/register', authentication, services.invoices.register)
router.put('/update', authentication, services.invoices.update)

export default router;