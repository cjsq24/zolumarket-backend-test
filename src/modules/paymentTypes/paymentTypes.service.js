import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		const query = await db.paymentTypes.findAll()
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.paymentTypes.create({ name: req.body.name })
		if (newRecord) {
			res.json({ success: true, data: newRecord, message: 'SUCCESS_REGISTER' })
		} else {
			res.status(400).json({ success: true, data: newRecord, message: 'FAILED_REGISTER' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	try {
		const query = await db.paymentTypes.findOne({ where: { id_payment_type: req.id_payment_type } });
		if (query) {
			const update = db.paymentTypes.update({ name: req.body.name }, { where: { id_payment_type: req.id_payment_type } })

			if (update) {
				res.json({ success: true, data: newRecord, message: 'SUCCESS_UPDATE' })
			} else {
				res.status(400).json({ success: true, data: newRecord, message: 'FAILED_UPDATE' })
			}
		} else {
			res.status(400).json({ success: false, data: {}, message: 'NOT_EXISTS' })
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