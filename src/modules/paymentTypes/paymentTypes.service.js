import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		const query = await db.paymentTypes.findAll()
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		console.log(e)
		res.status(400).json({ success: false, data: {}, message: 'error' })
	}
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.paymentTypes.create({ name: req.body.name })
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	try {
		const query = await db.paymentTypes.findOne({ where: { id_payment_type: req.id_payment_type } });
		if (query) {
			const update = db.paymentTypes.update({
					name: req.body.name
				}, { where: { id_payment_type: req.id_payment_type } }
			)
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Unit not exist' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const paymentTypes = {
	list,
	register,
	update
}