import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.get('/list', authentication, services.roles.list)
router.post('/register', /*authentication,*/ services.roles.register)
router.put('/update', authentication, services.roles.update)

export default router;