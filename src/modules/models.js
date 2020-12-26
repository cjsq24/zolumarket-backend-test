import users from './users/users.model.js'
import roles from './roles/roles.model.js'
import userRoles from './userRoles/userRoles.model.js'
import banks from './banks/banks.model.js'
import categories from './categories/categories.model.js'
import deliveries from './deliveries/deliveries.model.js'
import invoiceProducts from './invoiceProducts/invoiceProducts.model.js'
import invoices from './invoices/invoices.model.js'
import payments from './payments/payments.model.js'
import paymentTypes from './paymentTypes/paymentTypes.model.js'
import products from './products/products.model.js'
import providers from './providers/providers.model.js'
import trademarks from './trademarks/trademarks.model.js'
import units from './units/units.model.js'
import countries from './countries/countries.model.js'
import shops from './shops/shops.model.js'
import locations from './locations/locations.model.js'

countries.hasMany(users, {foreignKey: 'id_country'})
users.belongsTo(countries, {foreignKey: 'id_country'})

users.belongsToMany(roles, { through: userRoles, foreignKey: 'id_user' });
roles.belongsToMany(users, { through: userRoles, foreignKey: 'id_role' });

categories.hasMany(products, {foreignKey: 'id_category'})
products.belongsTo(categories, {foreignKey: 'id_category'})
units.hasMany(products, {foreignKey: 'id_unit'})
products.belongsTo(units, {foreignKey: 'id_unit'})
providers.hasMany(products, {foreignKey: 'id_provider'})
products.belongsTo(providers, {foreignKey: 'id_provider'})
shops.hasMany(products, {foreignKey: 'id_shop'})
products.belongsTo(shops, {foreignKey: 'id_shop'})

paymentTypes.hasMany(payments, {foreignKey: 'id_payment_type'})
payments.belongsTo(paymentTypes, {foreignKey: 'id_payment_type'})
users.hasMany(payments, {foreignKey: 'id_user'})
payments.belongsTo(users, {foreignKey: 'id_user'})
banks.hasMany(payments, {foreignKey: 'id_bank'})
payments.belongsTo(banks, {foreignKey: 'id_bank'})
invoices.hasMany(payments, {foreignKey: 'id_invoice'})
payments.belongsTo(invoices, {foreignKey: 'id_invoice'})

users.hasMany(invoices, {foreignKey: 'id_user'})
invoices.belongsTo(users, {foreignKey: 'id_user'})

invoices.hasMany(invoiceProducts, {foreignKey: 'id_invoice'})
invoiceProducts.belongsTo(invoices, {foreignKey: 'id_invoice'})
products.hasMany(invoiceProducts, {foreignKey: 'id_product'})
invoiceProducts.belongsTo(products, {foreignKey: 'id_product'})

users.hasMany(deliveries, {foreignKey: 'id_user'})
deliveries.belongsTo(users, {foreignKey: 'id_user'})

export const db = {
	users,
	roles,
	userRoles,
	banks,
	categories,
	deliveries,
	invoiceProducts,
	invoices,
	payments,
	paymentTypes,
	products,
	providers,
	trademarks,
	units,
	countries,
	shops,
	locations
}