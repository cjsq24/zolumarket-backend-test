import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		const query = await db.locations.findAll({ where: {id_user: req.idUser }})
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: '' })
	}
}

export const register = async (req, res) => {
	try {
		const newRecord = await db.locations.create({ 
			name: req.body.name,
			latitude: req.body.latitude,
			latitude_delta: req.body.latitude_delta,
			longitude: req.body.longitude,
			longitude_delta: req.body.longitude_delta,
			favorite: req.body.favorite,
			id_user: req.idUser
		})
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	try {
		const query = await db.locations.findOne({ where: { id_location: req.body.id_location } });
		if (query) {
			const update = await db.locations.update({
					name: req.body.name,
					latitude: req.body.latitude,
					latitude_delta: req.body.latitude_delta,
					longitude: req.body.longitude,
					longitude_delta: req.body.longitude_delta
				}, { where: { id_location: req.body.id_location } }
			)
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Location not exists' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const deleteRecord = async (req, res) => {
	console.log(req.body)
	try {
		const query = await db.locations.destroy({ where: { id_location: req.body.id_location } });
		if (query) {
			res.json({ success: true, data: {}, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Failed operation' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const favorite = async (req, res) => {
	try {
		const favorite = (req.body.favorite) ? false : true
		const updateAll = await db.locations.update({ favorite: false }, { where: { id_user: req.idUser } })
		if (updateAll) {
			const query = await db.locations.update({ favorite: favorite}, { where: { id_location: req.body.id_location} })
			if (query) {
				res.json({ success: true, data: {}, message: '' })
			} else {
				res.status(400).json({ success: false, data: {}, message: 'Location failed update' })
			}
		} else {
			res.status(400).json({ success: false, data: {}, message: 'Location failed update' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const locations = {
	list,
	register,
	update,
	deleteRecord,
	favorite
}