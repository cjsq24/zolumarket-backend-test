import {db} from '../models.js'
import {payments} from '../payments/payments.service.js'
import {invoiceProducts} from '../invoiceProducts/invoiceProducts.service.js'
import {deliveries} from '../deliveries/deliveries.service.js'
import randomstring from 'randomstring'
import sequelize from '../../db.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	const query = db.invoices.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const register = async (req, res) => {
	//Iniciamos la transacción para hacer commit o rollback
	const transaction = await sequelize.transaction()
	try {
		const reference = randomstring.generate({
			length: 30,
			charset: 'alphabetic'
		});

		//Calculo el precio total de los productos
		let total_price = 0
		req.body.products.map(data => {
			total_price += (data.price * data.quantity)
		})

		//registramos la factura
		const new_invoice = await db.invoices.create({
			reference: reference,
			tax: req.body.tax,
			total_price: total_price,
			id_user: req.idUser,
			address: req.body.address,
			transaction_status: (req.body.transaction_status) ? req.body.transaction_status : 0
		}, { transaction: transaction })

		//registramos el detalle de productos de la factura
		const register_products = await invoiceProducts.register({
			transaction: transaction, 
			id_invoice: new_invoice.dataValues.id_invoice, 
			products: req.body.products
		})

		//registramos el pago
		const register_payment = await payments.register({
			transaction: transaction, 
			id_invoice: new_invoice.dataValues.id_invoice, 
			reference: reference, 
			total_price: total_price, 
			data: req.body, 
			id_user: req.idUser
		})

		//registramos el delivery
		const register_delivery = await deliveries.registerFromInvoice({
			transaction: transaction, 
			reference: reference, 
			total_price: total_price, 
			data: req.body, 
			id_user: req.idUser
		})

		if (register_products && register_payment && register_delivery) {
			await transaction.commit()
			res.json({ success: true, data: new_invoice, message: 'INVOICE_SUCCESS_REGISTER' })
		} else {
			await transaction.rollback()
			res.status(400).json({ success: false, data: [], message: 'INVOICE_FAILED_REGISTER' })
		}
	} catch (e) {
		await transaction.rollback()
		res.status(400).json({ success: false, data: [], message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	const query = await db.invoices.findOne({ where: { id_invoice: req.body.id_invoice } });
	if (query) {
		try {
			//Calculo el precio total de los productos
			let total_price = 0
			req.body.datosfactura = [
				{ id: 1, precio: 15 },
				{ id: 9, precio: 20 }
			]
			req.body.datosfactura.map(data => {
				total_price += data.precio
			})

			//concateno los productos
			let products = ''
			req.body.datosfactura.map(p => {
				products = p.id + ',' + products
			})

			const updatedInvoice = await db.invoices.update({
					reference: req.body.reference,
					tax: req.body.tax,
					total_price: req.body.total_price,
					id_user: req.body.idUser,
					address: req.body.address,
					transaction_status: req.body.transaction_status
				}, { where: { id_invoice: req.body.id_invoice } }
			)

			if (updatedInvoice) {
				//actualizamos el detalle de productos de la factura
				invoiceProducts.update(req.body.id_invoice, req.body.datosfactura)
	
				//actualizamos el pago
				payments.update(total_price, req.body)
	
				//actualizamos el delivery
				//deliveries.updateFromInvoice(reference, total_price, req.body)
	
				res.json({ success: true, data: updatedInvoice, message: '' })
			} else {
				res.status(400).json({ success: false, data: [], message: 'Failed invoice record' })
			}
		} catch (e) {}
	} else {
		res.status(400).json({ success: false, data: {}, message: 'Invoice not exist' })
	}
}

export const invoices = {
	list,
	register,
	update
}