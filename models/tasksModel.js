const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true,'must provide a name'],
        trim: true,
        maxlength: [20, 'name must not pass 20 characters']
         
    },
    completed: {
        type: Boolean,
        default: false
    }
})
const TaskModel = mongoose.model('Task', TaskSchema)
module.exports = TaskModel