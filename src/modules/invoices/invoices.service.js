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
		console.log('entramos')
		const reference = randomstring.generate({
			length: 30,
			charset: 'alphabetic'
		});

		//Calculo el precio total de los productos
		let totalPrice = 0
		req.body.datosfactura.map(data => {
			totalPrice += data.precio
		})

		//concateno los productos
		let products = ''
		req.body.datosfactura.map(p => {
			products = p.id + ',' + products
		})

		//registramos la factura
		const newInvoice = await db.invoices.create({
			reference: reference,
			tax: req.body.tax,
			total_price: totalPrice,
			id_user: req.idUser,
			data_user: req.body.datosusuario,
			products: products,
			address: req.body.address,
			transaction_status: (req.body.transactionStatus) ? req.body.transactionStatus : 0
		}, { transaction: transaction })

		//registramos el detalle de productos de la factura
		await invoiceProducts.register({
			transaction: transaction, 
			idInvoice: newInvoice.dataValues.id_invoice, 
			products: req.body.datosfactura
		})

		//registramos el pago
		await payments.register({
			transaction: transaction, 
			idInvoice: newInvoice.dataValues.id_invoice, 
			reference: reference, 
			totalPrice: totalPrice, 
			data: req.body, 
			idUser: req.idUser
		})

		//registramos el delivery
		await deliveries.registerFromInvoice({
			transaction: transaction, 
			reference: reference, 
			totalPrice: totalPrice, 
			data: req.body, 
			idUser: req.idUser
		})

		await transaction.commit()

		res.json({ success: true, data: newInvoice, message: '' })
	} catch (e) {
		await transaction.rollback()
		res.status(400).json({ success: false, data: [], message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	const query = await db.invoices.findOne({ where: { id_invoice: req.body.idInvoice } });
	if (query) {
		try {
			//Calculo el precio total de los productos
			let totalPrice = 0
			req.body.datosfactura = [
				{ id: 1, precio: 15 },
				{ id: 9, precio: 20 }
			]
			req.body.datosfactura.map(data => {
				totalPrice += data.precio
			})

			//concateno los productos
			let products = ''
			req.body.datosfactura.map(p => {
				products = p.id + ',' + products
			})

			const updatedInvoice = await db.invoices.update({
					reference: req.body.reference,
					tax: req.body.tax,
					total_price: req.body.totalPrice,
					id_user: req.body.idUser,
					address: req.body.address,
					transaction_status: req.body.transactionStatus
				}, { where: { id_invoice: req.body.idInvoice } }
			)

			if (updatedInvoice) {
				//actualizamos el detalle de productos de la factura
				invoiceProducts.update(req.body.idInvoice, req.body.datosfactura)
	
				//actualizamos el pago
				payments.update(totalPrice, req.body)
	
				//actualizamos el delivery
				//deliveries.updateFromInvoice(reference, totalPrice, req.body)
	
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