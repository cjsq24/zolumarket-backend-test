import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.post('/login', services.users.login)
router.post('/register', services.users.register)
router.put('/update-profile', authentication, services.users.updateProfile)

export default router;