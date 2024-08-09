const mongoose = require('mongoose')

const rolesSchema = new mongoose.Schema({
    role: String,
    description: String,
    job_agreement: String,
})
const rolesModel = mongoose.model('roles', rolesSchema)
module.exports= rolesModel