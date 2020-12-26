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
				picture: 'https://cdn.shopify.com/s/files/1/0123/4455/7664/products/41331014731-aceituna-entera-gordal-goya-6-5-oz-17721491325092.jpg?v=1604711964',
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
				picture: 'https://www.solocarnes.com/wp-content/uploads/2019/02/como-pelar-un-pimiento.jpg',
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
				picture: 'https://mercaldas.vteximg.com.br/arquivos/ids/155610-1000-1000/14723.jpg?v=636885394313470000',
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
				picture: 'https://redbajas.com/public/frontend/files/ALIMENTOS/CARNES/227.jpg',
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
				picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGsUop6vAa8WZgCaoElrNT-FuCInF-zDrBw&usqp=CAU',
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
				picture: 'https://www.ranchoel17.com/wp-content/uploads/2017/03/pecho-n.png',
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