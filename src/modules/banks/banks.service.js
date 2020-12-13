import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		const query = await db.banks.findAll()
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: 'error' })
	}
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.banks.create({ name: req.body.name })
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	try {
		const query = await db.banks.findOne({ where: { id_bank: req.body.id_bank } });
		if (query) {
			const update = db.banks.update({ name: req.body.name }, 
				{ where: { id_bank: req.body.id_bank } }
			)
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Bank not exists' })
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