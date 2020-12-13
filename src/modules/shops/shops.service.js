import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	const query = await db.shops.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.shops.create({ name: req.body.name })
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	try {
		const query = await db.shops.findOne({ where: { id_shop: req.body.id_shop } });
		if (query) {
			const update = db.shops.update({ name: req.body.name }, 
				{ where: { id_shop: req.body.id_shop } }
			)
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Shop not exists' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const shops = {
	list,
	register,
	update
}