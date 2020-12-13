export default function SequelizeErrorMessage(e) {
	console.log('*************************************************************')
	console.log('*************************************************************')
	console.log('SQL ERROR: ', e.parent.sqlMessage)
	console.log('-------------------------------------------------------------')
	console.log('SQL: ', e.parent.sql)
	console.log('*************************************************************')
	console.log('*************************************************************')
	if (e.errors[0].validatorKey == 'not_unique') {
		if (e.errors[0].path == 'name') {
			return 'Name exists'
		} else if (e.errors[0].path == 'reference') {
			return 'Reference exists'
		} else if (e.errors[0].path == 'email') {
			return 'Email exists'
		} else if (e.errors[0].path == 'phone_number') {
			return 'Phone exists'
		} else if (e.errors[0].path == 'reference_payment') {
			return 'Reference exists'
		}
	}
	return 'Operation Failed'
}