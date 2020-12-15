'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const createdAt = new Date()
		const updatedAt = new Date()
		await queryInterface.bulkInsert('countries', [
			{
			id_country: 1,
			name: 'Afghanistan',
			iso2: 'AF',
			iso3: 'AFG',
			code: '93',
			createdAt,
			updatedAt
			},
			{
			id_country: 2,
			name: 'Albania',
			iso2: 'AL',
			iso3: 'ALB',
			code: '355',
			createdAt,
			updatedAt
			},
			{
			id_country: 3,
			name: 'Germany',
			iso2: 'DE',
			iso3: 'DEU',
			code: '49',
			createdAt,
			updatedAt
			},
			{
			id_country: 4,
			name: 'Algeria',
			iso2: 'DZ',
			iso3: 'DZA',
			code: '213',
			createdAt,
			updatedAt
			},
			{
			id_country: 5,
			name: 'Andorra',
			iso2: 'AD',
			iso3: 'AND',
			code: '376',
			createdAt,
			updatedAt
			},
			{
			id_country: 6,
			name: 'Angola',
			iso2: 'AO',
			iso3: 'AGO',
			code: '244',
			createdAt,
			updatedAt
			},
			{
			id_country: 7,
			name: 'Anguilla',
			iso2: 'AI',
			iso3: 'AIA',
			code: '1264',
			createdAt,
			updatedAt
			},
			{
			id_country: 8,
			name: 'Antarctica',
			iso2: 'AQ',
			iso3: 'ATA',
			code: '672',
			createdAt,
			updatedAt
			},
			{
			id_country: 9,
			name: 'Antigua and Barbuda',
			iso2: 'AG',
			iso3: 'ATG',
			code: '1268',
			createdAt,
			updatedAt
			},
			{
			id_country: 10,
			name: 'Netherlands Antilles',
			iso2: 'AN',
			iso3: 'ANT',
			code: '599',
			createdAt,
			updatedAt
			},
			{
			id_country: 11,
			name: 'Saudi Arabia',
			iso2: 'SA',
			iso3: 'SAU',
			code: '966',
			createdAt,
			updatedAt
			},
			{
			id_country: 12,
			name: 'Argentina',
			iso2: 'AR',
			iso3: 'ARG',
			code: '54',
			createdAt,
			updatedAt
			},
			{
			id_country: 13,
			name: 'Armenia',
			iso2: 'AM',
			iso3: 'ARM',
			code: '374',
			createdAt,
			updatedAt
			},
			{
			id_country: 14,
			name: 'Aruba',
			iso2: 'AW',
			iso3: 'ABW',
			code: '297',
			createdAt,
			updatedAt
			},
			{
			id_country: 15,
			name: 'Australia',
			iso2: 'AU',
			iso3: 'AUS',
			code: '61',
			createdAt,
			updatedAt
			},
			{
			id_country: 16,
			name: 'Austria',
			iso2: 'AT',
			iso3: 'AUT',
			code: '43',
			createdAt,
			updatedAt
			},
			{
			id_country: 17,
			name: 'Azerbaijan',
			iso2: 'AZ',
			iso3: 'AZE',
			code: '994',
			createdAt,
			updatedAt
			},
			{
			id_country: 18,
			name: 'Belgium',
			iso2: 'BE',
			iso3: 'BEL',
			code: '32',
			createdAt,
			updatedAt
			},
			{
			id_country: 19,
			name: 'Bahamas',
			iso2: 'BS',
			iso3: 'BHS',
			code: '1242',
			createdAt,
			updatedAt
			},
			{
			id_country: 20,
			name: 'Bahrain',
			iso2: 'BH',
			iso3: 'BHR',
			code: '973',
			createdAt,
			updatedAt
			},
			{
			id_country: 21,
			name: 'Bangladesh',
			iso2: 'BD',
			iso3: 'BGD',
			code: '880',
			createdAt,
			updatedAt
			},
			{
			id_country: 22,
			name: 'Barbados',
			iso2: 'BB',
			iso3: 'BRB',
			code: '1246',
			createdAt,
			updatedAt
			},
			{
			id_country: 23,
			name: 'Belize',
			iso2: 'BZ',
			iso3: 'BLZ',
			code: '501',
			createdAt,
			updatedAt
			},
			{
			id_country: 24,
			name: 'Benin',
			iso2: 'BJ',
			iso3: 'BEN',
			code: '229',
			createdAt,
			updatedAt
			},
			{
			id_country: 25,
			name: 'Bhutan',
			iso2: 'BT',
			iso3: 'BTN',
			code: '975',
			createdAt,
			updatedAt
			},
			{
			id_country: 26,
			name: 'Belarus',
			iso2: 'BY',
			iso3: 'BLR',
			code: '375',
			createdAt,
			updatedAt
			},
			{
			id_country: 27,
			name: 'Myanmar',
			iso2: 'MM',
			iso3: 'MMR',
			code: '95',
			createdAt,
			updatedAt
			},
			{
			id_country: 28,
			name: 'Bolivia',
			iso2: 'BO',
			iso3: 'BOL',
			code: '591',
			createdAt,
			updatedAt
			},
			{
			id_country: 29,
			name: 'Bosnia and Herzegovina',
			iso2: 'BA',
			iso3: 'BIH',
			code: '387',
			createdAt,
			updatedAt
			},
			{
			id_country: 30,
			name: 'Botswana',
			iso2: 'BW',
			iso3: 'BWA',
			code: '267',
			createdAt,
			updatedAt
			},
			{
			id_country: 31,
			name: 'Brazil',
			iso2: 'BR',
			iso3: 'BRA',
			code: '55',
			createdAt,
			updatedAt
			},
			{
			id_country: 32,
			name: 'Brunei',
			iso2: 'BN',
			iso3: 'BRN',
			code: '673',
			createdAt,
			updatedAt
			},
			{
			id_country: 33,
			name: 'Bulgaria',
			iso2: 'BG',
			iso3: 'BGR',
			code: '359',
			createdAt,
			updatedAt
			},
			{
			id_country: 34,
			name: 'Burkina Faso',
			iso2: 'BF',
			iso3: 'BFA',
			code: '226',
			createdAt,
			updatedAt
			},
			{
			id_country: 35,
			name: 'Burundi',
			iso2: 'BI',
			iso3: 'BDI',
			code: '257',
			createdAt,
			updatedAt
			},
			{
			id_country: 36,
			name: 'Cape Verde',
			iso2: 'CV',
			iso3: 'CPV',
			code: '238',
			createdAt,
			updatedAt
			},
			{
			id_country: 37,
			name: 'Cambodia',
			iso2: 'KH',
			iso3: 'KHM',
			code: '855',
			createdAt,
			updatedAt
			},
			{
			id_country: 38,
			name: 'Cameroon',
			iso2: 'CM',
			iso3: 'CMR',
			code: '237',
			createdAt,
			updatedAt
			},
			{
			id_country: 39,
			name: 'Canada',
			iso2: 'CA',
			iso3: 'CAN',
			code: '1',
			createdAt,
			updatedAt
			},
			{
			id_country: 40,
			name: 'Chad',
			iso2: 'TD',
			iso3: 'TCD',
			code: '235',
			createdAt,
			updatedAt
			},
			{
			id_country: 41,
			name: 'Chile',
			iso2: 'CL',
			iso3: 'CHL',
			code: '56',
			createdAt,
			updatedAt
			},
			{
			id_country: 42,
			name: 'China',
			iso2: 'CN',
			iso3: 'CHN',
			code: '86',
			createdAt,
			updatedAt
			},
			{
			id_country: 43,
			name: 'Cyprus',
			iso2: 'CY',
			iso3: 'CYP',
			code: '357',
			createdAt,
			updatedAt
			},
			{
			id_country: 44,
			name: 'Vatican City State',
			iso2: 'VA',
			iso3: 'VAT',
			code: '39',
			createdAt,
			updatedAt
			},
			{
			id_country: 45,
			name: 'Colombia',
			iso2: 'CO',
			iso3: 'COL',
			code: '57',
			createdAt,
			updatedAt
			},
			{
			id_country: 46,
			name: 'Comoros',
			iso2: 'KM',
			iso3: 'COM',
			code: '269',
			createdAt,
			updatedAt
			},
			{
			id_country: 47,
			name: 'Congo',
			iso2: 'CG',
			iso3: 'COG',
			code: '242',
			createdAt,
			updatedAt
			},
			{
			id_country: 48,
			name: 'Congo',
			iso2: 'CD',
			iso3: 'COD',
			code: '243',
			createdAt,
			updatedAt
			},
			{
			id_country: 49,
			name: 'North Korea',
			iso2: 'KP',
			iso3: 'PRK',
			code: '850',
			createdAt,
			updatedAt
			},
			{
			id_country: 50,
			name: 'South Korea',
			iso2: 'KR',
			iso3: 'KOR',
			code: '82',
			createdAt,
			updatedAt
			},
			{
			id_country: 51,
			name: 'Ivory Coast',
			iso2: 'CI',
			iso3: 'CIV',
			code: '225',
			createdAt,
			updatedAt
			},
			{
			id_country: 52,
			name: 'Costa Rica',
			iso2: 'CR',
			iso3: 'CRI',
			code: '506',
			createdAt,
			updatedAt
			},
			{
			id_country: 53,
			name: 'Croatia',
			iso2: 'HR',
			iso3: 'HRV',
			code: '385',
			createdAt,
			updatedAt
			},
			{
			id_country: 54,
			name: 'Cuba',
			iso2: 'CU',
			iso3: 'CUB',
			code: '53',
			createdAt,
			updatedAt
			},
			{
			id_country: 55,
			name: 'Denmark',
			iso2: 'DK',
			iso3: 'DNK',
			code: '45',
			createdAt,
			updatedAt
			},
			{
			id_country: 56,
			name: 'Dominica',
			iso2: 'DM',
			iso3: 'DMA',
			code: '1767',
			createdAt,
			updatedAt
			},
			{
			id_country: 57,
			name: 'Ecuador',
			iso2: 'EC',
			iso3: 'ECU',
			code: '593',
			createdAt,
			updatedAt
			},
			{
			id_country: 58,
			name: 'Egypt',
			iso2: 'EG',
			iso3: 'EGY',
			code: '20',
			createdAt,
			updatedAt
			},
			{
			id_country: 59,
			name: 'El Salvador',
			iso2: 'SV',
			iso3: 'SLV',
			code: '503',
			createdAt,
			updatedAt
			},
			{
			id_country: 60,
			name: 'United Arab Emirates',
			iso2: 'AE',
			iso3: 'ARE',
			code: '971',
			createdAt,
			updatedAt
			},
			{
			id_country: 61,
			name: 'Eritrea',
			iso2: 'ER',
			iso3: 'ERI',
			code: '291',
			createdAt,
			updatedAt
			},
			{
			id_country: 62,
			name: 'Slovakia',
			iso2: 'SK',
			iso3: 'SVK',
			code: '421',
			createdAt,
			updatedAt
			},
			{
			id_country: 63,
			name: 'Slovenia',
			iso2: 'SI',
			iso3: 'SVN',
			code: '386',
			createdAt,
			updatedAt
			},
			{
			id_country: 64,
			name: 'Spain',
			iso2: 'ES',
			iso3: 'ESP',
			code: '34',
			createdAt,
			updatedAt
			},
			{
			id_country: 65,
			name: 'United States of America',
			iso2: 'US',
			iso3: 'USA',
			code: '1',
			createdAt,
			updatedAt
			},
			{
			id_country: 66,
			name: 'Estonia',
			iso2: 'EE',
			iso3: 'EST',
			code: '372',
			createdAt,
			updatedAt
			},
			{
			id_country: 67,
			name: 'Ethiopia',
			iso2: 'ET',
			iso3: 'ETH',
			code: '251',
			createdAt,
			updatedAt
			},
			{
			id_country: 68,
			name: 'Philippines',
			iso2: 'PH',
			iso3: 'PHL',
			code: '63',
			createdAt,
			updatedAt
			},
			{
			id_country: 69,
			name: 'Finland',
			iso2: 'FI',
			iso3: 'FIN',
			code: '358',
			createdAt,
			updatedAt
			},
			{
			id_country: 70,
			name: 'Fiji',
			iso2: 'FJ',
			iso3: 'FJI',
			code: '679',
			createdAt,
			updatedAt
			},
			{
			id_country: 71,
			name: 'France',
			iso2: 'FR',
			iso3: 'FRA',
			code: '33',
			createdAt,
			updatedAt
			},
			{
			id_country: 72,
			name: 'Gabon',
			iso2: 'GA',
			iso3: 'GAB',
			code: '241',
			createdAt,
			updatedAt
			},
			{
			id_country: 73,
			name: 'Gambia',
			iso2: 'GM',
			iso3: 'GMB',
			code: '220',
			createdAt,
			updatedAt
			},
			{
			id_country: 74,
			name: 'Georgia',
			iso2: 'GE',
			iso3: 'GEO',
			code: '995',
			createdAt,
			updatedAt
			},
			{
			id_country: 75,
			name: 'Ghana',
			iso2: 'GH',
			iso3: 'GHA',
			code: '233',
			createdAt,
			updatedAt
			},
			{
			id_country: 76,
			name: 'Gibraltar',
			iso2: 'GI',
			iso3: 'GIB',
			code: '350',
			createdAt,
			updatedAt
			},
			{
			id_country: 77,
			name: 'Grenada',
			iso2: 'GD',
			iso3: 'GRD',
			code: '1473',
			createdAt,
			updatedAt
			},
			{
			id_country: 78,
			name: 'Greece',
			iso2: 'GR',
			iso3: 'GRC',
			code: '30',
			createdAt,
			updatedAt
			},
			{
			id_country: 79,
			name: 'Greenland',
			iso2: 'GL',
			iso3: 'GRL',
			code: '299',
			createdAt,
			updatedAt
			},
			{
			id_country: 80,
			name: 'Guadeloupe',
			iso2: 'GP',
			iso3: 'GLP',
			code: '590',
			createdAt,
			updatedAt
			},
			{
			id_country: 81,
			name: 'Guam',
			iso2: 'GU',
			iso3: 'GUM',
			code: '1671',
			createdAt,
			updatedAt
			},
			{
			id_country: 82,
			name: 'Guatemala',
			iso2: 'GT',
			iso3: 'GTM',
			code: '502',
			createdAt,
			updatedAt
			},
			{
			id_country: 83,
			name: 'French Guiana',
			iso2: 'GF',
			iso3: 'GUF',
			code: '594',
			createdAt,
			updatedAt
			},
			{
			id_country: 84,
			name: 'Guernsey',
			iso2: 'GG',
			iso3: 'GGY',
			code: '44',
			createdAt,
			updatedAt
			},
			{
			id_country: 85,
			name: 'Guinea',
			iso2: 'GN',
			iso3: 'GIN',
			code: '224',
			createdAt,
			updatedAt
			},
			{
			id_country: 86,
			name: 'Equatorial Guinea',
			iso2: 'GQ',
			iso3: 'GNQ',
			code: '240',
			createdAt,
			updatedAt
			},
			{
			id_country: 87,
			name: 'Guinea-Bissau',
			iso2: 'GW',
			iso3: 'GNB',
			code: '245',
			createdAt,
			updatedAt
			},
			{
			id_country: 88,
			name: 'Guyana',
			iso2: 'GY',
			iso3: 'GUY',
			code: '592',
			createdAt,
			updatedAt
			},
			{
			id_country: 89,
			name: 'Haiti',
			iso2: 'HT',
			iso3: 'HTI',
			code: '509',
			createdAt,
			updatedAt
			},
			{
			id_country: 90,
			name: 'Honduras',
			iso2: 'HN',
			iso3: 'HND',
			code: '504',
			createdAt,
			updatedAt
			},
			{
			id_country: 91,
			name: 'Hong Kong',
			iso2: 'HK',
			iso3: 'HKG',
			code: '852',
			createdAt,
			updatedAt
			},
			{
			id_country: 92,
			name: 'Hungary',
			iso2: 'HU',
			iso3: 'HUN',
			code: '36',
			createdAt,
			updatedAt
			},
			{
			id_country: 93,
			name: 'India',
			iso2: 'IN',
			iso3: 'IND',
			code: '91',
			createdAt,
			updatedAt
			},
			{
			id_country: 94,
			name: 'Indonesia',
			iso2: 'ID',
			iso3: 'IDN',
			code: '62',
			createdAt,
			updatedAt
			},
			{
			id_country: 95,
			name: 'Iran',
			iso2: 'IR',
			iso3: 'IRN',
			code: '98',
			createdAt,
			updatedAt
			},
			{
			id_country: 96,
			name: 'Iraq',
			iso2: 'IQ',
			iso3: 'IRQ',
			code: '964',
			createdAt,
			updatedAt
			},
			{
			id_country: 97,
			name: 'Ireland',
			iso2: 'IE',
			iso3: 'IRL',
			code: '353',
			createdAt,
			updatedAt
			},
			{
			id_country: 98,
			name: 'Bouvet Island',
			iso2: 'BV',
			iso3: 'BVT',
			code: null,
			createdAt,
			updatedAt
			},
			{
			id_country: 99,
			name: 'Isle of Man',
			iso2: 'IM',
			iso3: 'IMN',
			code: '44',
			createdAt,
			updatedAt
			},
			{
			id_country: 100,
			name: 'Christmas Island',
			iso2: 'CX',
			iso3: 'CXR',
			code: '61',
			createdAt,
			updatedAt
			},
			{
			id_country: 101,
			name: 'Norfolk Island',
			iso2: 'NF',
			iso3: 'NFK',
			code: '672',
			createdAt,
			updatedAt
			},
			{
			id_country: 102,
			name: 'Iceland',
			iso2: 'IS',
			iso3: 'ISL',
			code: '354',
			createdAt,
			updatedAt
			},
			{
			id_country: 103,
			name: 'Bermuda Islands',
			iso2: 'BM',
			iso3: 'BMU',
			code: '1441',
			createdAt,
			updatedAt
			},
			{
			id_country: 104,
			name: 'Cayman Islands',
			iso2: 'KY',
			iso3: 'CYM',
			code: '1345',
			createdAt,
			updatedAt
			},
			{
			id_country: 105,
			name: 'Cocos (Keeling) Islands',
			iso2: 'CC',
			iso3: 'CCK',
			code: '61',
			createdAt,
			updatedAt
			},
			{
			id_country: 106,
			name: 'Cook Islands',
			iso2: 'CK',
			iso3: 'COK',
			code: '682',
			createdAt,
			updatedAt
			},
			{
			id_country: 107,
			name: 'Åland Islands',
			iso2: 'AX',
			iso3: 'ALA',
			code: null,
			createdAt,
			updatedAt
			},
			{
			id_country: 108,
			name: 'Faroe Islands',
			iso2: 'FO',
			iso3: 'FRO',
			code: '298',
			createdAt,
			updatedAt
			},
			{
			id_country: 109,
			name: 'South Georgia and the South Sandwich Islands',
			iso2: 'GS',
			iso3: 'SGS',
			code: '500',
			createdAt,
			updatedAt
			},
			{
			id_country: 110,
			name: 'Heard Island and McDonald Islands',
			iso2: 'HM',
			iso3: 'HMD',
			code: null,
			createdAt,
			updatedAt
			},
			{
			id_country: 111,
			name: 'Maldives',
			iso2: 'MV',
			iso3: 'MDV',
			code: '960',
			createdAt,
			updatedAt
			},
			{
			id_country: 112,
			name: 'Falkland Islands (Malvinas)',
			iso2: 'FK',
			iso3: 'FLK',
			code: '500',
			createdAt,
			updatedAt
			},
			{
			id_country: 113,
			name: 'Northern Mariana Islands',
			iso2: 'MP',
			iso3: 'MNP',
			code: '1670',
			createdAt,
			updatedAt
			},
			{
			id_country: 114,
			name: 'Marshall Islands',
			iso2: 'MH',
			iso3: 'MHL',
			code: '692',
			createdAt,
			updatedAt
			},
			{
			id_country: 115,
			name: 'Pitcairn Islands',
			iso2: 'PN',
			iso3: 'PCN',
			code: '870',
			createdAt,
			updatedAt
			},
			{
			id_country: 116,
			name: 'Solomon Islands',
			iso2: 'SB',
			iso3: 'SLB',
			code: '677',
			createdAt,
			updatedAt
			},
			{
			id_country: 117,
			name: 'Turks and Caicos Islands',
			iso2: 'TC',
			iso3: 'TCA',
			code: '1649',
			createdAt,
			updatedAt
			},
			{
			id_country: 118,
			name: 'United States Minor Outlying Islands',
			iso2: 'UM',
			iso3: 'UMI',
			code: null,
			createdAt,
			updatedAt
			},
			{
			id_country: 119,
			name: 'Virgin Islands',
			iso2: 'VG',
			iso3: 'VG',
			code: '1284',
			createdAt,
			updatedAt
			},
			{
			id_country: 120,
			name: 'United States Virgin Islands',
			iso2: 'VI',
			iso3: 'VIR',
			code: '1340',
			createdAt,
			updatedAt
			},
			{
			id_country: 121,
			name: 'Israel',
			iso2: 'IL',
			iso3: 'ISR',
			code: '972',
			createdAt,
			updatedAt
			},
			{
			id_country: 122,
			name: 'Italy',
			iso2: 'IT',
			iso3: 'ITA',
			code: '39',
			createdAt,
			updatedAt
			},
			{
			id_country: 123,
			name: 'Jamaica',
			iso2: 'JM',
			iso3: 'JAM',
			code: '1876',
			createdAt,
			updatedAt
			},
			{
			id_country: 124,
			name: 'Japan',
			iso2: 'JP',
			iso3: 'JPN',
			code: '81',
			createdAt,
			updatedAt
			},
			{
			id_country: 125,
			name: 'Jersey',
			iso2: 'JE',
			iso3: 'JEY',
			code: '44',
			createdAt,
			updatedAt
			},
			{
			id_country: 126,
			name: 'Jordan',
			iso2: 'JO',
			iso3: 'JOR',
			code: '962',
			createdAt,
			updatedAt
			},
			{
			id_country: 127,
			name: 'Kazakhstan',
			iso2: 'KZ',
			iso3: 'KAZ',
			code: '7',
			createdAt,
			updatedAt
			},
			{
			id_country: 128,
			name: 'Kenya',
			iso2: 'KE',
			iso3: 'KEN',
			code: '254',
			createdAt,
			updatedAt
			},
			{
			id_country: 129,
			name: 'Kyrgyzstan',
			iso2: 'KG',
			iso3: 'KGZ',
			code: '996',
			createdAt,
			updatedAt
			},
			{
			id_country: 130,
			name: 'Kiribati',
			iso2: 'KI',
			iso3: 'KIR',
			code: '686',
			createdAt,
			updatedAt
			},
			{
			id_country: 131,
			name: 'Kuwait',
			iso2: 'KW',
			iso3: 'KWT',
			code: '965',
			createdAt,
			updatedAt
			},
			{
			id_country: 132,
			name: 'Lebanon',
			iso2: 'LB',
			iso3: 'LBN',
			code: '961',
			createdAt,
			updatedAt
			},
			{
			id_country: 133,
			name: 'Laos',
			iso2: 'LA',
			iso3: 'LAO',
			code: '856',
			createdAt,
			updatedAt
			},
			{
			id_country: 134,
			name: 'Lesotho',
			iso2: 'LS',
			iso3: 'LSO',
			code: '266',
			createdAt,
			updatedAt
			},
			{
			id_country: 135,
			name: 'Latvia',
			iso2: 'LV',
			iso3: 'LVA',
			code: '371',
			createdAt,
			updatedAt
			},
			{
			id_country: 136,
			name: 'Liberia',
			iso2: 'LR',
			iso3: 'LBR',
			code: '231',
			createdAt,
			updatedAt
			},
			{
			id_country: 137,
			name: 'Libya',
			iso2: 'LY',
			iso3: 'LBY',
			code: '218',
			createdAt,
			updatedAt
			},
			{
			id_country: 138,
			name: 'Liechtenstein',
			iso2: 'LI',
			iso3: 'LIE',
			code: '423',
			createdAt,
			updatedAt
			},
			{
			id_country: 139,
			name: 'Lithuania',
			iso2: 'LT',
			iso3: 'LTU',
			code: '370',
			createdAt,
			updatedAt
			},
			{
			id_country: 140,
			name: 'Luxembourg',
			iso2: 'LU',
			iso3: 'LUX',
			code: '352',
			createdAt,
			updatedAt
			},
			{
			id_country: 141,
			name: 'Mexico',
			iso2: 'MX',
			iso3: 'MEX',
			code: '52',
			createdAt,
			updatedAt
			},
			{
			id_country: 142,
			name: 'Monaco',
			iso2: 'MC',
			iso3: 'MCO',
			code: '377',
			createdAt,
			updatedAt
			},
			{
			id_country: 143,
			name: 'Macao',
			iso2: 'MO',
			iso3: 'MAC',
			code: '853',
			createdAt,
			updatedAt
			},
			{
			id_country: 144,
			name: 'Macedonia',
			iso2: 'MK',
			iso3: 'MKD',
			code: '389',
			createdAt,
			updatedAt
			},
			{
			id_country: 145,
			name: 'Madagascar',
			iso2: 'MG',
			iso3: 'MDG',
			code: '261',
			createdAt,
			updatedAt
			},
			{
			id_country: 146,
			name: 'Malaysia',
			iso2: 'MY',
			iso3: 'MYS',
			code: '60',
			createdAt,
			updatedAt
			},
			{
			id_country: 147,
			name: 'Malawi',
			iso2: 'MW',
			iso3: 'MWI',
			code: '265',
			createdAt,
			updatedAt
			},
			{
			id_country: 148,
			name: 'Mali',
			iso2: 'ML',
			iso3: 'MLI',
			code: '223',
			createdAt,
			updatedAt
			},
			{
			id_country: 149,
			name: 'Malta',
			iso2: 'MT',
			iso3: 'MLT',
			code: '356',
			createdAt,
			updatedAt
			},
			{
			id_country: 150,
			name: 'Morocco',
			iso2: 'MA',
			iso3: 'MAR',
			code: '212',
			createdAt,
			updatedAt
			},
			{
			id_country: 151,
			name: 'Martinique',
			iso2: 'MQ',
			iso3: 'MTQ',
			code: '596',
			createdAt,
			updatedAt
			},
			{
			id_country: 152,
			name: 'Mauritius',
			iso2: 'MU',
			iso3: 'MUS',
			code: '230',
			createdAt,
			updatedAt
			},
			{
			id_country: 153,
			name: 'Mauritania',
			iso2: 'MR',
			iso3: 'MRT',
			code: '222',
			createdAt,
			updatedAt
			},
			{
			id_country: 154,
			name: 'Mayotte',
			iso2: 'YT',
			iso3: 'MYT',
			code: '262',
			createdAt,
			updatedAt
			},
			{
			id_country: 155,
			name: 'Estados Federados de',
			iso2: 'FM',
			iso3: 'FSM',
			code: '691',
			createdAt,
			updatedAt
			},
			{
			id_country: 156,
			name: 'Moldova',
			iso2: 'MD',
			iso3: 'MDA',
			code: '373',
			createdAt,
			updatedAt
			},
			{
			id_country: 157,
			name: 'Mongolia',
			iso2: 'MN',
			iso3: 'MNG',
			code: '976',
			createdAt,
			updatedAt
			},
			{
			id_country: 158,
			name: 'Montenegro',
			iso2: 'ME',
			iso3: 'MNE',
			code: '382',
			createdAt,
			updatedAt
			},
			{
			id_country: 159,
			name: 'Montserrat',
			iso2: 'MS',
			iso3: 'MSR',
			code: '1664',
			createdAt,
			updatedAt
			},
			{
			id_country: 160,
			name: 'Mozambique',
			iso2: 'MZ',
			iso3: 'MOZ',
			code: '258',
			createdAt,
			updatedAt
			},
			{
			id_country: 161,
			name: 'Namibia',
			iso2: 'NA',
			iso3: 'NAM',
			code: '264',
			createdAt,
			updatedAt
			},
			{
			id_country: 162,
			name: 'Nauru',
			iso2: 'NR',
			iso3: 'NRU',
			code: '674',
			createdAt,
			updatedAt
			},
			{
			id_country: 163,
			name: 'Nepal',
			iso2: 'NP',
			iso3: 'NPL',
			code: '977',
			createdAt,
			updatedAt
			},
			{
			id_country: 164,
			name: 'Nicaragua',
			iso2: 'NI',
			iso3: 'NIC',
			code: '505',
			createdAt,
			updatedAt
			},
			{
			id_country: 165,
			name: 'Niger',
			iso2: 'NE',
			iso3: 'NER',
			code: '227',
			createdAt,
			updatedAt
			},
			{
			id_country: 166,
			name: 'Nigeria',
			iso2: 'NG',
			iso3: 'NGA',
			code: '234',
			createdAt,
			updatedAt
			},
			{
			id_country: 167,
			name: 'Niue',
			iso2: 'NU',
			iso3: 'NIU',
			code: '683',
			createdAt,
			updatedAt
			},
			{
			id_country: 168,
			name: 'Norway',
			iso2: 'NO',
			iso3: 'NOR',
			code: '47',
			createdAt,
			updatedAt
			},
			{
			id_country: 169,
			name: 'New Caledonia',
			iso2: 'NC',
			iso3: 'NCL',
			code: '687',
			createdAt,
			updatedAt
			},
			{
			id_country: 170,
			name: 'New Zealand',
			iso2: 'NZ',
			iso3: 'NZL',
			code: '64',
			createdAt,
			updatedAt
			},
			{
			id_country: 171,
			name: 'Oman',
			iso2: 'OM',
			iso3: 'OMN',
			code: '968',
			createdAt,
			updatedAt
			},
			{
			id_country: 172,
			name: 'Netherlands',
			iso2: 'NL',
			iso3: 'NLD',
			code: '31',
			createdAt,
			updatedAt
			},
			{
			id_country: 173,
			name: 'Pakistan',
			iso2: 'PK',
			iso3: 'PAK',
			code: '92',
			createdAt,
			updatedAt
			},
			{
			id_country: 174,
			name: 'Palau',
			iso2: 'PW',
			iso3: 'PLW',
			code: '680',
			createdAt,
			updatedAt
			},
			{
			id_country: 175,
			name: 'Palestine',
			iso2: 'PS',
			iso3: 'PSE',
			code: '970',
			createdAt,
			updatedAt
			},
			{
			id_country: 176,
			name: 'Panama',
			iso2: 'PA',
			iso3: 'PAN',
			code: '507',
			createdAt,
			updatedAt
			},
			{
			id_country: 177,
			name: 'Papua New Guinea',
			iso2: 'PG',
			iso3: 'PNG',
			code: '675',
			createdAt,
			updatedAt
			},
			{
			id_country: 178,
			name: 'Paraguay',
			iso2: 'PY',
			iso3: 'PRY',
			code: '595',
			createdAt,
			updatedAt
			},
			{
			id_country: 179,
			name: 'Peru',
			iso2: 'PE',
			iso3: 'PER',
			code: '51',
			createdAt,
			updatedAt
			},
			{
			id_country: 180,
			name: 'French Polynesia',
			iso2: 'PF',
			iso3: 'PYF',
			code: '689',
			createdAt,
			updatedAt
			},
			{
			id_country: 181,
			name: 'Poland',
			iso2: 'PL',
			iso3: 'POL',
			code: '48',
			createdAt,
			updatedAt
			},
			{
			id_country: 182,
			name: 'Portugal',
			iso2: 'PT',
			iso3: 'PRT',
			code: '351',
			createdAt,
			updatedAt
			},
			{
			id_country: 183,
			name: 'Puerto Rico',
			iso2: 'PR',
			iso3: 'PRI',
			code: '1',
			createdAt,
			updatedAt
			},
			{
			id_country: 184,
			name: 'Qatar',
			iso2: 'QA',
			iso3: 'QAT',
			code: '974',
			createdAt,
			updatedAt
			},
			{
			id_country: 185,
			name: 'United Kingdom',
			iso2: 'GB',
			iso3: 'GBR',
			code: '44',
			createdAt,
			updatedAt
			},
			{
			id_country: 186,
			name: 'Central African Republic',
			iso2: 'CF',
			iso3: 'CAF',
			code: '236',
			createdAt,
			updatedAt
			},
			{
			id_country: 187,
			name: 'Czech Republic',
			iso2: 'CZ',
			iso3: 'CZE',
			code: '420',
			createdAt,
			updatedAt
			},
			{
			id_country: 188,
			name: 'Dominican Republic',
			iso2: 'DO',
			iso3: 'DOM',
			code: '1809',
			createdAt,
			updatedAt
			},
			{
			id_country: 189,
			name: 'Réunion',
			iso2: 'RE',
			iso3: 'REU',
			code: null,
			createdAt,
			updatedAt
			},
			{
			id_country: 190,
			name: 'Rwanda',
			iso2: 'RW',
			iso3: 'RWA',
			code: '250',
			createdAt,
			updatedAt
			},
			{
			id_country: 191,
			name: 'Romania',
			iso2: 'RO',
			iso3: 'ROU',
			code: '40',
			createdAt,
			updatedAt
			},
			{
			id_country: 192,
			name: 'Russia',
			iso2: 'RU',
			iso3: 'RUS',
			code: '7',
			createdAt,
			updatedAt
			},
			{
			id_country: 193,
			name: 'Western Sahara',
			iso2: 'EH',
			iso3: 'ESH',
			code: '212',
			createdAt,
			updatedAt
			},
			{
			id_country: 194,
			name: 'Samoa',
			iso2: 'WS',
			iso3: 'WSM',
			code: '685',
			createdAt,
			updatedAt
			},
			{
			id_country: 195,
			name: 'American Samoa',
			iso2: 'AS',
			iso3: 'ASM',
			code: '1684',
			createdAt,
			updatedAt
			},
			{
			id_country: 196,
			name: 'Saint Barthélemy',
			iso2: 'BL',
			iso3: 'BLM',
			code: '590',
			createdAt,
			updatedAt
			},
			{
			id_country: 197,
			name: 'Saint Kitts and Nevis',
			iso2: 'KN',
			iso3: 'KNA',
			code: '1869',
			createdAt,
			updatedAt
			},
			{
			id_country: 198,
			name: 'San Marino',
			iso2: 'SM',
			iso3: 'SMR',
			code: '378',
			createdAt,
			updatedAt
			},
			{
			id_country: 199,
			name: 'Saint Martin (French part)',
			iso2: 'MF',
			iso3: 'MAF',
			code: '1599',
			createdAt,
			updatedAt
			},
			{
			id_country: 200,
			name: 'Saint Pierre and Miquelon',
			iso2: 'PM',
			iso3: 'SPM',
			code: '508',
			createdAt,
			updatedAt
			},
			{
			id_country: 201,
			name: 'Saint Vincent and the Grenadines',
			iso2: 'VC',
			iso3: 'VCT',
			code: '1784',
			createdAt,
			updatedAt
			},
			{
			id_country: 202,
			name: 'Ascensión y Tristán de Acuña',
			iso2: 'SH',
			iso3: 'SHN',
			code: '290',
			createdAt,
			updatedAt
			},
			{
			id_country: 203,
			name: 'Saint Lucia',
			iso2: 'LC',
			iso3: 'LCA',
			code: '1758',
			createdAt,
			updatedAt
			},
			{
			id_country: 204,
			name: 'Sao Tome and Principe',
			iso2: 'ST',
			iso3: 'STP',
			code: '239',
			createdAt,
			updatedAt
			},
			{
			id_country: 205,
			name: 'Senegal',
			iso2: 'SN',
			iso3: 'SEN',
			code: '221',
			createdAt,
			updatedAt
			},
			{
			id_country: 206,
			name: 'Serbia',
			iso2: 'RS',
			iso3: 'SRB',
			code: '381',
			createdAt,
			updatedAt
			},
			{
			id_country: 207,
			name: 'Seychelles',
			iso2: 'SC',
			iso3: 'SYC',
			code: '248',
			createdAt,
			updatedAt
			},
			{
			id_country: 208,
			name: 'Sierra Leone',
			iso2: 'SL',
			iso3: 'SLE',
			code: '232',
			createdAt,
			updatedAt
			},
			{
			id_country: 209,
			name: 'Singapore',
			iso2: 'SG',
			iso3: 'SGP',
			code: '65',
			createdAt,
			updatedAt
			},
			{
			id_country: 210,
			name: 'Syria',
			iso2: 'SY',
			iso3: 'SYR',
			code: '963',
			createdAt,
			updatedAt
			},
			{
			id_country: 211,
			name: 'Somalia',
			iso2: 'SO',
			iso3: 'SOM',
			code: '252',
			createdAt,
			updatedAt
			},
			{
			id_country: 212,
			name: 'Sri Lanka',
			iso2: 'LK',
			iso3: 'LKA',
			code: '94',
			createdAt,
			updatedAt
			},
			{
			id_country: 213,
			name: 'South Africa',
			iso2: 'ZA',
			iso3: 'ZAF',
			code: '27',
			createdAt,
			updatedAt
			},
			{
			id_country: 214,
			name: 'Sudan',
			iso2: 'SD',
			iso3: 'SDN',
			code: '249',
			createdAt,
			updatedAt
			},
			{
			id_country: 215,
			name: 'Sweden',
			iso2: 'SE',
			iso3: 'SWE',
			code: '46',
			createdAt,
			updatedAt
			},
			{
			id_country: 216,
			name: 'Switzerland',
			iso2: 'CH',
			iso3: 'CHE',
			code: '41',
			createdAt,
			updatedAt
			},
			{
			id_country: 217,
			name: 'Suriname',
			iso2: 'SR',
			iso3: 'SUR',
			code: '597',
			createdAt,
			updatedAt
			},
			{
			id_country: 218,
			name: 'Svalbard and Jan Mayen',
			iso2: 'SJ',
			iso3: 'SJM',
			code: '4779',
			createdAt,
			updatedAt
			},
			{
			id_country: 219,
			name: 'Swaziland',
			iso2: 'SZ',
			iso3: 'SWZ',
			code: '268',
			createdAt,
			updatedAt
			},
			{
			id_country: 220,
			name: 'Tajikistan',
			iso2: 'TJ',
			iso3: 'TJK',
			code: '992',
			createdAt,
			updatedAt
			},
			{
			id_country: 221,
			name: 'Thailand',
			iso2: 'TH',
			iso3: 'THA',
			code: '66',
			createdAt,
			updatedAt
			},
			{
			id_country: 222,
			name: 'Taiwan',
			iso2: 'TW',
			iso3: 'TWN',
			code: '886',
			createdAt,
			updatedAt
			},
			{
			id_country: 223,
			name: 'Tanzania',
			iso2: 'TZ',
			iso3: 'TZA',
			code: '255',
			createdAt,
			updatedAt
			},
			{
			id_country: 224,
			name: 'British Indian Ocean Territory',
			iso2: 'IO',
			iso3: 'IOT',
			code: '246',
			createdAt,
			updatedAt
			},
			{
			id_country: 225,
			name: 'French Southern Territories',
			iso2: 'TF',
			iso3: 'ATF',
			code: null,
			createdAt,
			updatedAt
			},
			{
			id_country: 226,
			name: 'East Timor',
			iso2: 'TL',
			iso3: 'TLS',
			code: '670',
			createdAt,
			updatedAt
			},
			{
			id_country: 227,
			name: 'Togo',
			iso2: 'TG',
			iso3: 'TGO',
			code: '228',
			createdAt,
			updatedAt
			},
			{
			id_country: 228,
			name: 'Tokelau',
			iso2: 'TK',
			iso3: 'TKL',
			code: '690',
			createdAt,
			updatedAt
			},
			{
			id_country: 229,
			name: 'Tonga',
			iso2: 'TO',
			iso3: 'TON',
			code: '676',
			createdAt,
			updatedAt
			},
			{
			id_country: 230,
			name: 'Trinidad and Tobago',
			iso2: 'TT',
			iso3: 'TTO',
			code: '1868',
			createdAt,
			updatedAt
			},
			{
			id_country: 231,
			name: 'Tunisia',
			iso2: 'TN',
			iso3: 'TUN',
			code: '216',
			createdAt,
			updatedAt
			},
			{
			id_country: 232,
			name: 'Turkmenistan',
			iso2: 'TM',
			iso3: 'TKM',
			code: '993',
			createdAt,
			updatedAt
			},
			{
			id_country: 233,
			name: 'Turkey',
			iso2: 'TR',
			iso3: 'TUR',
			code: '90',
			createdAt,
			updatedAt
			},
			{
			id_country: 234,
			name: 'Tuvalu',
			iso2: 'TV',
			iso3: 'TUV',
			code: '688',
			createdAt,
			updatedAt
			},
			{
			id_country: 235,
			name: 'Ukraine',
			iso2: 'UA',
			iso3: 'UKR',
			code: '380',
			createdAt,
			updatedAt
			},
			{
			id_country: 236,
			name: 'Uganda',
			iso2: 'UG',
			iso3: 'UGA',
			code: '256',
			createdAt,
			updatedAt
			},
			{
			id_country: 237,
			name: 'Uruguay',
			iso2: 'UY',
			iso3: 'URY',
			code: '598',
			createdAt,
			updatedAt
			},
			{
			id_country: 238,
			name: 'Uzbekistan',
			iso2: 'UZ',
			iso3: 'UZB',
			code: '998',
			createdAt,
			updatedAt
			},
			{
			id_country: 239,
			name: 'Vanuatu',
			iso2: 'VU',
			iso3: 'VUT',
			code: '678',
			createdAt,
			updatedAt
			},
			{
			id_country: 240,
			name: 'Venezuela',
			iso2: 'VE',
			iso3: 'VEN',
			code: '58',
			createdAt,
			updatedAt
			},
			{
			id_country: 241,
			name: 'Vietnam',
			iso2: 'VN',
			iso3: 'VNM',
			code: '84',
			createdAt,
			updatedAt
			},
			{
			id_country: 242,
			name: 'Wallis and Futuna',
			iso2: 'WF',
			iso3: 'WLF',
			code: '681',
			createdAt,
			updatedAt
			},
			{
			id_country: 243,
			name: 'Yemen',
			iso2: 'YE',
			iso3: 'YEM',
			code: '967',
			createdAt,
			updatedAt
			},
			{
			id_country: 244,
			name: 'Djibouti',
			iso2: 'DJ',
			iso3: 'DJI',
			code: '253',
			createdAt,
			updatedAt
			},
			{
			id_country: 245,
			name: 'Zambia',
			iso2: 'ZM',
			iso3: 'ZMB',
			code: '260',
			createdAt,
			updatedAt
			},
			{
			id_country: 246,
			name: 'Zimbabwe',
			iso2: 'ZW',
			iso3: 'ZWE',
			code: '263',
			createdAt,
			updatedAt
			},
		],
{});
	},

	down: async (queryInterface,
Sequelize) => {
		await queryInterface.bulkDelete('countries',
null,
{});
	}
};