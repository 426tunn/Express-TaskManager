const express = require('express');
const TasksRoute = require('./routes/tasksRoute.js')
const NotFound = require('./middleware/not-found')
const errorHandler = require('./middleware/Error')

const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/v1/tasks', TasksRoute);
app.use(NotFound)
app.use(errorHandler)
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to  Task Manager App'
    })
});


module.exports = app