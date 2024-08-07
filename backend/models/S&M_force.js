
const mongoose= require('mongoose')

const S_M_forceSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    pwd: String,
    contact: String,
    photo_id: String,
    meeting_id: String,
    lead_score_info:{
            '$ref':'Clients',
            '$id':ObjectId,
    },
    news_subs_list:{
        '$ref': 'Clients',
        '$id': ObjectId,
    },
    Blogs:{
        date: Date,
        subject: String,
        Post: String,
    }

})

const CRMS_MforceModel = mongoose.model('S_Mforce', S_MforceSchema)
module.exports = CRMS_MforceModel