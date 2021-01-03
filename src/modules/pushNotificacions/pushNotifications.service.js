//Esto es para poder hacer require
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import admin from "firebase-admin"
const serviceAccount = require("../../../zolumarket-mobile-firebase-adminsdk-7vxoj-40c9b7e7ea.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

export const sendToDevice = async (req, res) => {
	try {
		admin.messaging().sendToDevice(req.query.device_token, {
				notification: {
					title: (req.query.title) ? req.query.title : 'Zolumarket',
					body: (req.query.body) ? req.query.body : 'Notificación de Zolumarket',
					image: (req.query.image) ? req.query.image : '',
				}
			})
			.then((response) => {
				console.log('Successfully sent message:', response);
				res.json({ success: true, data: {response}, message: 'success' })
			})
			.catch((error) => {
				console.log('Error sending message:', error);
				res.status(400).json({ success: false, data: {}, message: 'error' })
			});
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: 'error 1' })
	}
}

export const sendTopic = async (req, res) => {
	try {
		admin.messaging().send({
				notification: {
					title: (req.query.title) ? req.query.title : 'Zolumarket',
					body: (req.query.body) ? req.query.body : 'Notificación de Zolumarket',
					image: (req.query.image) ? req.query.image : '',
				},
				topic: '/topics/'+req.query.topic
			})
			.then((response) => {
				// Response is a message ID string.
				console.log('Successfully sent message:', response);
				res.json({ success: true, data: {response}, message: 'success' })
			})
			.catch((error) => {
				console.log('Error sending message:', error);
				res.status(400).json({ success: false, data: {}, message: 'error' })
			});
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: 'error 1' })
	}
}

export const send = async (req, res) => {
	try {
	const message = {
		notification: {
			title: (req.query.title) ? req.query.title : 'Zolumarket',
			body: (req.query.body) ? req.query.body : 'Notificación de Zolumarket',
			image: (req.query.image) ? req.query.image : '',
		},
		token: req.query.deviceToken
	}

	admin.messaging().sendToDevice(req.query.deviceToken, message)
		.then((response) => {
			// Response is a message ID string.
			console.log('Successfully sent message:', response);
			res.json({ success: true, data: {response}, message: 'success' })
		})
		.catch((error) => {
			console.log('Error sending message:', error);
			res.status(400).json({ success: false, data: {}, message: 'error' })
		});
	} catch (e) {
		res.status(400).json({ success: false, data: {}, message: 'error 1' })
	}
}

export const pushNotifications = {
	sendToDevice,
	sendTopic
}