const mongoose= require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    pwd: String,
    contact: String,
    photo_id: String,
    meeting_id: String,
    Job_agreement: String,
    Salary_info: Integer,
    
   

})

const CRMemployeeModel = mongoose.model('Employees', EmployeeSchema)
module.exports = CRMemployeeModel