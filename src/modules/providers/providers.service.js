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
		const newRecord = db.providers.create({
			name: req.body.name,
			email: req.body.email,
			phone_number: req.body.phone_number,
			address: req.body.address
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
		const query = await db.providers.findOne({ where: { id_provider: req.body.id_provider } });
		if (query) {
			const update = db.providers.update({
					name: req.body.name,
					email: req.body.email,
					phone_number: req.body.phone_number
				}, { where: { id_provider: req.body.id_provider } }
			)

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

export const providers = {
	list,
	register,
	update
}

function validationsSequelize(e) {
	if (e.errors[0].validatorKey == 'not_unique' && e.errors[0].path == 'name') {
		return message = 'Name exists'
	}
	return false
}