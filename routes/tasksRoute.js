const express = require('express');
const {get_Tasks, getTasks_By_Id, 
createTask, updateTask,
deleteTask} = require('../controllers/tasks');

const router = express.Router();


router.get('/', get_Tasks)
router.get('/:id', getTasks_By_Id)
router.post('/', createTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router