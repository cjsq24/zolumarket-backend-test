import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		const query = await db.banks.findAll()
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.banks.create({ name: req.body.name })
		if (newRecord) {
			res.json({ success: true, data: newRecord, message: 'SUCCESS_REGISTER' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'FAILED_REGISTER' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	try {
		const query = await db.banks.findOne({ where: { id_bank: req.body.id_bank } });
		if (query) {
			const update = db.banks.update({ name: req.body.name }, { where: { id_bank: req.body.id_bank } })
			
			if (update) {
				res.json({ success: true, data: update, message: 'SUCCESS_UPDATE' })
			} else {
				res.status(400).json({ success: false, data: {}, message: 'FAILED_UPDATE' })
			}
		} else {
			res.status(400).json({ success: false, data: {}, message: 'NOT_EXISTS' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const banks = {
	list,
	register,
	update
}