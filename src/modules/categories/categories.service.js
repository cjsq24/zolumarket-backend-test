import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	const query = await db.categories.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.categories.create({ name: req.body.name })
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	try {
		const query = await db.categories.findOne({ where: { id_category: req.body.id_category } });
		if (query) {
			const update = db.categories.update({ name: req.body.name }, 
				{ where: { id_category: req.body.id_category } }
			)
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Category not exists' })
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