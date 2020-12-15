'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const createdAt = new Date()
		const updatedAt = new Date()
		await queryInterface.bulkInsert('products', [
			{
				id_product: 1,
				name: 'Vegetales 1',
				price: 2,
				id_category: 1,
				id_unit: 2,
				id_provider: 1,
				picture: 'https://cdn.potatopro.com/sites/default/files/styles/1200_wide/public/field/image/argenpapa1.jpg?itok=NWWFFJ65',
				description: 'Esta es la la descripcion del producto lorem ipsum text...',
				createdAt,
				updatedAt
			},
			{
				id_product: 2,
				name: 'Vegetales 2',
				price: 5,
				id_category: 1,
				id_unit: 2,
				id_provider: 1,
				picture: 'https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59144d795cafe812663c986a/razonescomermanzana-int.jpg',
				description: 'Esta es la la descripcion del producto lorem ipsum text...',
				createdAt,
				updatedAt
			},
			{
				id_product: 3,
				name: 'Vegetales 3',
				price: 5,
				id_category: 1,
				id_unit: 2,
				id_provider: 1,
				picture: 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-2000w/public/aguacate-partido_0.jpg?ramen_itok=iqwQftIcTf',
				description: 'Esta es la la descripcion del producto lorem ipsum text...',
				createdAt,
				updatedAt
			},
			{
				id_product: 4,
				name: 'Aceituna Entera',
				price: 124,
				id_category: 2,
				id_unit: 1,
				id_provider: 1,
				picture: 'http://zolumarket.com/pruebas/productos/frutas%20y%20verduras/Aceituna%20Entera%20Gordal%20Goya%206.5%20Oz.%20RD$%20124.jpg',
				description: 'Esta es la la descripcion del producto lorem ipsum text...',
				createdAt,
				updatedAt
			},
			{
				id_product: 5,
				name: 'Ajíes Morrón 1 lb.',
				price: 64,
				id_category: 2,
				id_unit: 1,
				id_provider: 1,
				picture: 'http://zolumarket.com/pruebas/productos/frutas%20y%20verduras/Aj%c3%ades%20Morr%c3%b3n%201%20lb.%20RD$%2064.jpg',
				description: 'Esta es la la descripcion del producto lorem ipsum text...',
				createdAt,
				updatedAt
			},
			{
				id_product: 6,
				name: 'Apio Entero',
				price: 35,
				id_category: 2,
				id_unit: 1,
				id_provider: 1,
				picture: 'http://zolumarket.com/pruebas/productos/frutas%20y%20verduras/Apio%20Entero%201%20Libra.%20RD$%2035.jpg',
				description: 'Esta es la la descripcion del producto lorem ipsum text...',
				createdAt,
				updatedAt
			},
			{
				id_product: 7,
				name: 'Bistec Boliche',
				price: 154,
				id_category: 3,
				id_unit: 1,
				id_provider: 1,
				picture: 'http://zolumarket.com/pruebas/productos/carnes/Bistec%20Boliche%20de%20Res%20por%20Libras.%20RD$%20154.jpg',
				description: 'Esta es la la descripcion del producto lorem ipsum text...',
				createdAt,
				updatedAt
			},
			{
				id_product: 8,
				name: 'Churrasco de Res',
				price: 479,
				id_category: 3,
				id_unit: 1,
				id_provider: 1,
				picture: 'http://zolumarket.com/pruebas/productos/carnes/Churrasco%20de%20Res%20Angus%20Choice%20por%20Libras.%20RD$%20479.jpg',
				description: 'Esta es la la descripcion del producto lorem ipsum text...',
				createdAt,
				updatedAt
			},
			{
				id_product: 9,
				name: 'Pecho de Res',
				price: 83,
				id_category: 3,
				id_unit: 1,
				id_provider: 1,
				picture: 'http://zolumarket.com/pruebas/productos/carnes/Pecho%20de%20Res%20Corriente%20por%20Libras.%20RD$%2083.jpg',
				description: 'Esta es la la descripcion del producto lorem ipsum text...',
				createdAt,
				updatedAt
			},
		], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('products', null, {});
	}
};