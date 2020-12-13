import {db} from '../models.js'

export const list = async (req,res) => {
  const roles = db.roles.findAll()
  res.json({success:true,data:roles,message:''})
}

export const add = async (req,res) => {
  const newRole = db.roles.create({name:req.body.name,})
  res.json({success:true,data:newRole,message:''})
}

export const update = async (req,res) => {
  const updateRole = db.roles.update({name:req.body.name},{ where: { id:req.body.id } })
  res.json({success:true,data:updateRole,message:''})
}

export const roles = {
  list,
  add,
  update
}