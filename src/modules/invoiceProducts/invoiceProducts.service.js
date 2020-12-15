import {db} from '../models.js'

export const list = async (req, res) => {
	const query = db.invoiceProducts.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const register = async (params) => {
		params.products.map(product => {
			db.invoiceProducts.create({
				id_invoice: params.idInvoice,
				id_product: product.id,
				quantity: product.cantidad,
				price: product.precio
			})
		}, { transaction: params.transaction })
}

export const update = async (idInvoice, products) => {
	await db.invoiceProducts.destroy({ where: { id_invoice: idInvoice } });
	register(idInvoice, products)
}

export const invoiceProducts = {
	list,
	register,
	update
}