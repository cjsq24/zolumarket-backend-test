import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	const query = await db.countries.findAll({
		order: [['name', 'ASC']]
	})
	res.json({ success: true, data: query, message: '' })
}

export const register = async (req, res) => {
	try {
		const newRecord = db.countries.create({ name: req.body.name })
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	try {
		const query = await db.countries.findOne({ where: { id_country: req.body.id_country } });
		if (query) {
			const update = db.countries.update({ name: req.body.name }, 
				{ where: { id_country: req.body.id_country } }
			)
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Country not exists' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const countries = {
	list,
	register,
	update
}