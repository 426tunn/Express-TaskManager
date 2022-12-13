const app = require('./index');
const {connectToDB} = require('./db')

const PORT = process.env.PORT || 5000
connectToDB();
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})