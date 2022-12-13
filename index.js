const express = require('express');
const TasksRoute = require('./routes/tasksRoute.js')
const NotFound = require('./middleware/not-found')

const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/v1/tasks', TasksRoute);
app.use(NotFound)
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to  Task Manager App'
    })
});

app.use((err, req, res, next) => {
    res.status(500).send({
        error: err.message
    })
});

module.exports = app