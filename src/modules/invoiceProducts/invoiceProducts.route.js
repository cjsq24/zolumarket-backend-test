import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.post('/register', authentication, services.invoiceProducts.register)
router.put('/update', authentication, services.invoiceProducts.update)

export default router;