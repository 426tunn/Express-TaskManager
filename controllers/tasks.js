const express = require('express');
const Tasks = require('../models/tasksModel')
const AsyncWrapper = require('../middleware/async')



exports.get_Tasks = AsyncWrapper( async (req, res) => {
        const AllTasks = await Tasks.find({})
      res.status(200).json({AllTasks})  
})
exports.getTasks_By_Id = AsyncWrapper( async (req, res) => {
       const {id:taskId} = req.params
       const Task = await Tasks.findOne({_id:taskId})
       if (!Task){
       res.status(404).json({message: 'Invalid user ID'})
       return
       }
      res.status(200).json({Task})     
})

exports.createTask =  async (req, res) => {
    try {
   const Task = await Tasks.create(req.body)
   res.status(200).json({Task})
} catch(error){
  res.status(500).json({
    message: error
  })
}
}

exports.updateTask = async (req, res) => {
    try{
        const {postBody} = req.body
    const {id:taskId} = req.params
    const Task = await Tasks.findOneAndUpdate({_id:taskId}, {postBody}, 
        {new: true})
        // console.log('im Task')
    if (!Task){
        // console.log('im ifff')
    res.status(404).json({message: 'Invalid user ID'})
    return
    }    
          res.status(200).json({Task})

    } catch(error){
        res.status(500).json({
            message: error
    })
}
}

exports.deleteTask = async (req, res) => {
    try{
        const {id:taskId} = req.params
        const Task = await Tasks.findOneAndDelete({_id:taskId})
        console.log(Task)
       res.status(200).json({message: `Task with id ${taskId} was deleted`})
       
     } catch(error){
        res.status(500).json({
            message: error
    })
}
}