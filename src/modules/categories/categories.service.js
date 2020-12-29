import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	const query = await db.categories.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.categories.create({ name: req.body.name })
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
		const query = await db.categories.findOne({ where: { id_category: req.body.id_category } });
		if (query) {
			const update = db.categories.update({ name: req.body.name }, { where: { id_category: req.body.id_category } })
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

export const categories = {
	list,
	register,
	update
}