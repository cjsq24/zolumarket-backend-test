import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.get('/list', services.countries.list)
router.post('/register', authentication, services.countries.register)
router.put('/update', authentication, services.countries.update)

export default router;