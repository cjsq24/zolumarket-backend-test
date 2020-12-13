import {db} from '../models.js'

export const list = async (req, res) => {
	const query = db.deliveries.findAll()
	res.json({ success: true, data: query, message: '' })
}

export const register = async (req, res) => {
	const query = await db.deliveries.findOne({ where: { reference: req.body.reference } });
	if (!query) {
		const newRecord = db.deliveries.create({
			reference: req.body.reference,
			price: req.body.price,
			id_user: req.body.id_user,
			shipping_address: req.body.shipping_address,
			courier_address: req.body.courier_address,
			delivery_status: req.body.delivery_status
		})
		res.json({ success: true, data: newRecord, message: '' })
	} else {
		res.status(400).json({ success: false, data: {}, message: 'Reference exist' })
	}
}

export const registerFromInvoice = async (params) => {
		const location = await db.locations.findOne({ where: { id_location: params.data.id_location } })

		const newRecord = await db.deliveries.create({
			reference: params.reference,
			price: params.totalPrice,
			id_user: params.idUser,
			shipping_address: location.latitude + ', ' + location.latitude_delta + ', ' + location.longitude + ', ' + location.longitude_delta,
			courier_address: 'data.courierAddress',
			delivery_status: '1'
		}, { transaction: params.transaction })
}

export const update = async (req, res) => {
	const query = await db.deliveries.findOne({ where: { id_delivery: req.body.id_delivery } });
	if (query) {
		const update = db.deliveries.update({
				reference: req.body.reference,
				price: req.body.price,
				id_user: req.body.id_user,
				shipping_address: req.body.shipping_address,
				courier_address: req.body.courier_address,
				delivery_status: req.body.delivery_status
			}, { where: { id_delivery: req.body.id_delivery } }
		)
		res.json({ success: true, data: update, message: '' })
	} else {
		res.status(400).json({ success: false, data: {}, message: 'Delivery not exist' })
	}
}

export const updateFromInvoice = async (reference, totalPrice, data) => {
	try {
		const newRecord = await db.deliveries.update({
				reference: reference,
				price: totalPrice,
				id_user: data.idUser,
				shipping_address: data.shippingAddress,
				courier_address: data.courierAddress,
				delivery_status: data.deliveryStatus
			}, { where: { id_delivery: req.body.id_delivery } }
		)
		return newRecord
	} catch (e) {
		console.log(e.errors[0]) //acá obtengo el error del campo, en este caso sería que reference no es único
		return false
	}
}

export const deliveries = {
	list,
	register,
	registerFromInvoice,
	update,
	updateFromInvoice
}