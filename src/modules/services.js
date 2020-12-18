import {users} from './users/users.service.js'
import {roles} from './roles/roles.service.js'
import {banks} from './banks/banks.service.js'
import {categories} from './categories/categories.service.js'
import {deliveries} from './deliveries/deliveries.service.js'
import {invoiceProducts} from './invoiceProducts/invoiceProducts.service.js'
import {invoices} from './invoices/invoices.service.js'
import {paymentTypes} from './paymentTypes/paymentTypes.service.js'
import {products} from './products/products.service.js'
import {providers} from './providers/providers.service.js'
import {trademarks} from './trademarks/trademarks.service.js'
import {units} from './units/units.service.js'
import {countries} from './countries/countries.service.js'
import {shops} from './shops/shops.service.js'
import {locations} from './locations/locations.service.js'
import {pushNotifications} from './pushNotificacions/pushNotifications.service.js'

export const services = {
	users,
	roles,
	banks,
	categories,
	deliveries,
	invoiceProducts,
	invoices,
	paymentTypes,
	products,
	providers,
	trademarks,
	units,
	countries,
	shops,
	locations,
	pushNotifications
}