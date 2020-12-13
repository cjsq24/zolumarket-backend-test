import {Router} from 'express'
import users from './users/users.route.js'
import roles from './roles/roles.route.js'
import banks from './banks/banks.route.js'
import categories from './categories/categories.route.js'
import deliveries from './deliveries/deliveries.route.js'
import invoiceProducts from './invoiceProducts/invoiceProducts.route.js'
import invoices from './invoices/invoices.route.js'
import paymentTypes from './paymentTypes/paymentTypes.route.js'
import products from './products/products.route.js'
import providers from './providers/providers.route.js'
import trademarks from './trademarks/trademarks.route.js'
import units from './units/units.route.js'
import countries from './countries/countries.route.js'
import shops from './shops/shops.route.js'
import locations from './locations/locations.route.js'
const router = Router()

router.use('/users', users)
router.use('/roles', roles)
router.use('/banks', banks)
router.use('/categories', categories)
router.use('/deliveries', deliveries)
router.use('/invoice-products', invoiceProducts)
router.use('/invoices', invoices)
router.use('/payment-types', paymentTypes)
router.use('/products', products)
router.use('/providers', providers)
router.use('/trademarks', trademarks)
router.use('/units', units)
router.use('/countries', countries)
router.use('/shops', shops)
router.use('/locations', locations)

export default router