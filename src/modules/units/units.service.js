import {db} from '../models.js'

export const list = async (req, res) => {
	const query = db.units.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const register = async (req, res) => {
	try {
		const newRecord = db.units.create({
			name: req.body.name,
			abbreviation: req.body.abbreviation
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
		const query = await db.units.findOne({ where: { id_unit: req.body.id_unit } });
		if (query) {
			const update = db.units.update({
					name: req.body.name,
					abbreviation: req.body.abbreviation
				}, { where: { id_unit: req.body.id_unit } }
			)
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Unit not exist' })
		}
	} catch (e) {
		let message = ''
		if (validationsSequelize(e)) message = validationsSequelize(e)
		res.status(400).json({ success: false, data: {}, message: message })
	}
}

export const units = {
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