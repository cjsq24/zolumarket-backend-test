import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	const query = await db.trademarks.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.trademarks.create({ name: req.body.name })
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	try {
		const query = await db.trademarks.findOne({ where: { id_trademark: req.body.id_trademark } });
		if (query) {
			const update = db.trademarks.update({ name: req.body.name }, 
				{ where: { id_trademark: req.body.id_trademark } }
			)
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Shop not exists' })
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