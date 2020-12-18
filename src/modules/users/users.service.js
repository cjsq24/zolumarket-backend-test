import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	const query = await db.users.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const login = async (req, res) => {
	try {
		const query = await db.users.findOne({ where: { email: req.body.email } });
		if (query) {
			if (await bcrypt.compare(req.body.password, query.password)) {
				const token = jwt.sign({ id_user: query.id_user, email: query.email }, process.env.SECRET);
				console.log(token)
				res.json({ success: true, data: { ...query.dataValues, token }, message: '' })
			} else {
				res.status(400).json({ success: false, data: {}, message: 'email or password incorrect' })
			}
		} else {
			res.status(400).json({ success: false, data: {}, message:'email or password incorrect' })
		}
	} catch (e) {
		console.log(e)
		res.status(400).json({ success: false, data: {}, message:JSON.parse(e) })
	}
}

export const register = async (req,res) => {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 10)
		const newRecord = await db.users.create({
			name: req.body.nombre,
			last_name: req.body.apellido,
			email: req.body.email,
			//id_country: req.body.pais,
			phone_number: req.body.telefono,
			password: req.body.password,
			//address: req.body.direccion
		})
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const updateProfile = async (req, res) => {
	try {
		const query = await db.users.findOne({ where: { id_user: req.id_user } });
		if (query) {
			const update = db.users.update({
					name: req.body.nombre,
					last_name: req.body.apellido,
					email: req.body.email,
					id_country: req.body.pais,
					phone_number: req.body.telefono
				}, { where: { id_user: req.id_user } }
			)
			res.json({ success: true, data: update, message: '' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'User not exist' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const users = {
	list,
	login,
	register,
	updateProfile
}