import {db} from '../models.js'
import sequelize from '../../db.js'
import SequelizeErrorMsg from '../../../helpers/SequelizeValidations.js'

export const list = async (req, res) => {
	try {
		let whereParams = {}
		if (req.query.params && req.query.params.length > 0) {
			req.query.params.map((param, key) => {
				param = JSON.parse(param)
				whereParams[[param.field]] = param.value
			})
		}
		
		const query = await db.products.findAll({
			where: whereParams,
			attributes: [
				['id_product', 'id'], 
				['name', 'producto'], 
				['description', 'descripcion'], 
				['picture', 'foto'], 
				[sequelize.fn('ROUND', sequelize.col('price'), 2), 'precio'],
				'id_category'
			],
			include: [{
				model: db.providers,
				attributes: ['name']
			}]
		})

		//Acá adapto para como recibe el valor en el front
		if (query) {
			query.map((e) => {
				e.dataValues.proveedor = e.dataValues.provider.dataValues.name
			})
		}
		res.json({ success: true, data: query, message: '' })
	} catch (e) {
		console.log(e)
		res.status(400).json({ success: false, data: {}, message: 'error' })
	}
}

export const register = async (req, res) => {
	try {
		const idProvider = (req.body.proveedor == 'ZoluMarket') ? 1 : null
		const idUnit = (req.body.unidad == 'gr') ? 1 : ((req.body.unidad == 'libra') ? 2 : null)
		const newRecord = await db.products.create({
			reference: req.body.referencia,
			name: req.body.producto,
			price: req.body.precio,
			id_category: req.body.idCategory,
			id_unit: idUnit,
			id_provider: idProvider,
			id_shop: req.body.idShop,
			picture: req.body.foto,
			description: req.body.descripcion
		})
		res.json({ success: true, data: newRecord, message: '' })
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
	}
}

export const update = async (req, res) => {
	const query = await db.products.findOne({ where: { id_product: req.body.key } });
	if (query) {
		try {
			const idProvider = (req.body.proveedor == 'ZoluMarket') ? 1 : null
			const idUnit = (req.body.unidad == 'gr') ? 1 : null
			const update = await db.products.update({
					reference: req.body.referencia,
					name: req.body.producto,
					price: req.body.precio,
					//id_category: req.body.id_category,
					id_unit: idUnit,
					id_provider: idProvider,
					id_shop: req.body.idShop,
					picture: req.body.foto,
					description: req.body.descripcion
				}, { where: { id_product: req.body.key } }
			)
			res.json({ success: true, data: update, message: '' })
		} catch (e) {
			res.status(400).json({ success: false, data: {}, message: SequelizeErrorMsg(e) })
		}
	} else {
		res.status(400).json({ success: false, data: {}, message: 'Product not exist' })
	}
}

export const products = {
	list,
	register,
	update
}