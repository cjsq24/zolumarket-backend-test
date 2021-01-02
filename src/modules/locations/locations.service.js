import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		const query = await db.locations.findAll({ where: {id_user: req.idUser }})
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
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

		if (newRecord) {
			res.json({ success: true, data: newRecord, message: 'LOCATION_SUCCESS_REGISTER' })
		} else {
			res.status(400).json({ success: true, data: newRecord, message: 'LOCATION_FAILED_REGISTER' })
		}
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

			if (update) {
				res.json({ success: true, data: update, message: 'LOCATION_SUCCESS_UPDATE' })
			} else {
				res.status(400).json({ success: false, data: {}, message: 'LOCATION_FAILED_UPDATE' })
			}
		} else {
			res.status(400).json({ success: false, data: {}, message: 'NOT_EXISTS' })
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
			res.json({ success: true, data: {}, message: 'LOCATION_SUCCESS_DELETE' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'LOCATION_FAILED_DELETE' })
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
			const query = await db.locations.update({ favorite: favorite}, { where: { id_location: req.body.id_location } })
			if (query) {
				res.json({ success: true, data: {}, message: '' })
			} else {
				res.status(400).json({ success: false, data: {}, message: 'FAILED_OPERATION' })
			}
		} else {
			res.status(400).json({ success: false, data: {}, message: 'FAILED_OPERATION' })
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