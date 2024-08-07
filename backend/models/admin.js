const mongoose= require('mongoose')

const AdminSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    pwd: String,
    contact: String,
    photo_id: String,
    meeting_id: String,

})

const CRMadminModel = mongoose.model('users', AdminSchema)
module.exports = CRMadminModel