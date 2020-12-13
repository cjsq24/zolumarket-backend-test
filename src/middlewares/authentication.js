import jwt from 'jsonwebtoken'
export const authentication = async (req,res,next) => {
	if(!req.headers.authorization) return res.status(401).json({success:false,data:{},message:'not auth'})
	const token = req.headers.authorization
	try{
		const {id_user} = await jwt.verify(token, process.env.SECRET)
		if(id_user){
			req.idUser = id_user
			next()
		}else{
			return false
		}
	}catch(e){
		res.status(401).json({success:false,data:{},message:'invalid Token'})
		return false
	}
}