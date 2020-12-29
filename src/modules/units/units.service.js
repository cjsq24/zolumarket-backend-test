import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		const query = await db.providers.findAll()
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const register = async (req, res) => {
	try {
		const newRecord = db.units.create({
			name: req.body.name,
			abbreviation: req.body.abbreviation
		})
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
		const query = await db.units.findOne({ where: { id_unit: req.body.id_unit } });
		if (query) {
			const update = db.units.update({
					name: req.body.name,
					abbreviation: req.body.abbreviation
				}, { where: { id_unit: req.body.id_unit } }
			)
			
			if (newRecord) {
				res.json({ success: true, data: newRecord, message: 'SUCCESS_REGISTER' })
			} else {
				res.status(400).json({ success: false, data: {}, message: 'FAILED_REGISTER' })
			}
		} else {
			res.status(400).json({ success: false, data: {}, message: 'NOT_EXISTS' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const units = {
	list,
	register,
	update
}