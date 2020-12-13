import {db} from '../models.js'

export const list = async (req, res) => {
	const query = db.providers.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const register = async (req, res) => {
	try {
		const newRecord = db.providers.create({
			name: req.body.name,
			email: req.body.email,
			phone_number: req.body.phone_number,
			address: req.body.address
		})
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		let message = ''
		if (validationsSequelize(e)) message = validationsSequelize(e)
		res.status(400).json({ success: false, data: {}, message: message })
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
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Provider not exist' })
		}
	} catch (e) {
		let message = ''
		if (validationsSequelize(e)) message = validationsSequelize(e)
		res.status(400).json({ success: false, data: {}, message: message })
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