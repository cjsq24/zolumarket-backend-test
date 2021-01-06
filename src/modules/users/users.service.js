import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {db} from '../models.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		const query = await db.users.findAll()
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const login = async (req, res) => {
	try {
		const userType = (req.body.user_type == 'client') ? 1 : (req.body.user_type == 'delivery') ? 2 : null
		const query = await db.users.findOne({ where: { email: req.body.email } });
		if (query) {
			if (await bcrypt.compare(req.body.password, query.password)) {
				//Verifico Rol
				const roles = await query.getRoles()
				const validRol = roles.find(role => (role.id_role == userType && role.status))
				if (validRol) {
					const token = jwt.sign({ id_user: query.id_user, email: query.email }, process.env.SECRET);
					res.json({ success: true, data: { ...query.dataValues, token }, message: 'USER_LOGIN_SUCCESS' })
				} else {
					res.status(400).json({ success: false, data: {}, message: 'USER_ROL_INVALID' })
				}
			} else {
				res.status(400).json({ success: false, data: {}, message: 'USER_INVALID' })
			}
		} else {
			res.status(400).json({ success: false, data: {}, message:'USER_INVALID' })
		}
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: 'error' })
	}
}

export const register = async (req,res) => {
	try {
		const userType = (req.body.user_type == 'client') ? 1 : (req.body.user_type == 'delivery') ? 2 : null
		req.body.password = await bcrypt.hash(req.body.password, 10)
		const newRecord = await db.users.create({
			name: req.body.nombre,
			last_name: req.body.apellido,
			email: req.body.email,
			phone_number: req.body.telefono,
			password: req.body.password
		})

		if (newRecord) {
			if (userType) {
				newRecord.setRoles([userType])
			}
			res.json({ success: true, data: newRecord, message: 'SUCCESS_REGISTER' })
		} else {
			res.status(400).json({ success: false, data: {}, message: 'FAILED_REGISTER' })
		}
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
			if (update) {
				res.json({ success: false, data: {}, message: 'SUCCESS_UPDATE' })
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

export const users = {
	list,
	login,
	register,
	updateProfile
}