import {Router} from 'express'
import {services} from '../services.js'
import {authentication} from '../../middlewares/authentication.js'
const router = Router()

router.post('/register', authentication, services.locations.register)
router.put('/update', authentication, services.locations.update)
router.post('/delete', authentication, services.locations.deleteRecord)
router.put('/favorite', authentication, services.locations.favorite)
router.get('/list', authentication, services.locations.list)

export default router;