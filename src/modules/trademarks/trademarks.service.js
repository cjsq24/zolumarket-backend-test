import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		const query = await db.trademarks.findAll()
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.trademarks.create({ name: req.body.name })
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
		const query = await db.trademarks.findOne({ where: { id_trademark: req.body.id_trademark } });
		if (query) {
			const update = db.trademarks.update({ name: req.body.name }, { where: { id_trademark: req.body.id_trademark } })
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

export const trademarks = {
	list,
	register,
	update
}