
const mongoose= require('mongoose')

const HR_FINSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    pwd: String,
    contact: String,
    photo_id: String,
    meeting_id: String,
    Employees_list: {
        '$ref': 'Employees',
        '$id': ObjectId
    },
    registration_info: {
        '$ref':'Clients',
        '$id':ObjectId,
    },
    performance_track: {
        '$ref':'Employees',
        '$id':ObjectId,
    },
    lsit_of_costs: {
        reason: String,
        amount: Integer,
    }

})

const CRMHRFINModel = mongoose.model('HR&FIN', HR_FINSchema)
module.exports = CRMadminModel