import {db} from '../models.js'
import sequelize from '../../db.js';

export const list = async (req, res) => {
	try {
		//const query = await db.payments.findAll({ where: {id_user: req.query.id_user }})
		const query = await db.payments.findAll({
			where: { id_user: req.idUser },
			attributes: [
				'price',
				'id_invoice',
				'id_account',
				'reference_payment',
				[sequelize.fn('date_format', sequelize.col('payments.createdAt'), '%d-%m-%Y %h:%i %p'), 'createdAt']
			],
			include: [{
					model: db.paymentTypes,
					attributes: ['name']
				}, {
					model: db.banks,
					attributes: ['name']
				}
			],
			order: [['id_payment', 'DESC']]
		})
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		console.log(e)
		res.status(400).json({ success: false, data: {}, message: '' })
	}
}

export const register = async (params) => {
	try {
		let data = params.data
		if (!Number.isInteger(data.id_payment_type)) {
			if (data.id_payment_type === 'key1') { //efectivo
				data.id_payment_type = 1
				data.referencePayment = null
			} else if (data.id_payment_type === 'key2') { //transferencia/depósito
				data.id_payment_type = 2
				data.id_bank = 1
				data.referencePayment = null
			} else if (data.id_payment_type === 'key5') { //paypal
				data.id_payment_type = 5
				data.id_bank = 1
				data.referencePayment = null
			}

			/*let date = new Date()
			let day = date.getDate()
			let month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
			let year = date.getFullYear()
			data.date = `${day}-${month}-${year}`*/
		}

		const new_record = await db.payments.create({
			reference: params.reference,
			price: params.total_price,
			id_invoice: params.id_invoice,
			id_user: params.id_user,
			id_payment_type: data.id_payment_type,
			id_bank: data.id_bank,
			reference_payment: data.reference_payment,
			id_account: data.id_account,
			date: data.date
		}, { transaction: params.transaction })

		return true
	} catch (e) {
		console.log(e)
		return false
	}
}

export const update = async (totalPrice, data) => {
	try {
		const query = await db.payments.findOne({ where: { id_invoice: data.idInvoice } });
		if (query) {
			if (data.id_payment_type === 'efectivo') {
				data.idPaymentType = 1 //efectivo
				data.idBank = 1 //efectivo
				data.referencePayment = 1 //efectivo

				let date = new Date()
				let day = date.getDate()
				let month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
				let year = date.getFullYear()
				data.date = `${day}-${month}-${year}`
			} else {
				data.idPaymentType = 2 //efectivo
				data.idBank = data.banco
				data.referencePayment = data.referencia
				data.date = data.fecha
			}

			const update = await db.payments.update({
					reference: data.reference,
					price: totalPrice,
					id_user: data.idUser,
					id_payment_type: data.idPaymentType,
					id_bank: data.idBank,
					reference_payment: data.referencePayment,
					date: data.date
				}, { where: { id_invoice: idInvoice } }
			)
		}
	} catch (e) {}
}

export const payments = {
	list,
	register,
	update
}