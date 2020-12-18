import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import admin from "firebase-admin"
const serviceAccount = require("../zolumarket-mobile-firebase-adminsdk-7vxoj-40c9b7e7ea.json");

export const PushNotification = {
		send: async (message) => {
		await admin.initializeApp({
			credential: admin.credential.cert(serviceAccount)
		});

		const registrationToken = 'fFv-M4xzRpy6ZoqTbwpVk8:APA91bF2vLmEV670xgfLxBdwYn_c1qNdmbXFMX3Tn-jXwkbXERdwC-mcSlv2KsUeNahYbAvM0LkJjjlzxjC7UJ6sKp3MVwXKnV-rB3EzEa2gmiXnKY5bMfuZHV8gSZWkiTt9QhAG7OR0';

		message = {
			...message,
			token: registrationToken
		}

		admin.messaging().send(message)
			.then((response) => {
				// Response is a message ID string.
				console.log('Successfully sent message:', response);
			})
			.catch((error) => {
				console.log('Error sending message:', error);
			});
	}
}

//Ejemplo:
/*const message = {
	notification: {
		title: 'ZoluMarket',
		body: 'Notificación de ZoluMarket',
		image: 'https://as01.epimg.net/meristation/imagenes/2019/06/10/betech/1560195710_365328_1560195842_sumario_normal.jpg'
	}
}
PushNotification.send(message)*/