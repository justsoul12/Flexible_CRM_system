const { json } = require('express')
const mongoose= require('mongoose')

const AdminSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    pwd: String,
    contact: String,
    photo_id: String,
    meeting_id: String,
    list_of_ERR: Object,
    fin_interaction: Object,

})

const CRMadminModel = mongoose.model('Admin', AdminSchema)
module.exports = CRMadminModel