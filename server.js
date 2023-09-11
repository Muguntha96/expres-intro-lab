import express from 'express'
import { students } from './students-data/students-data.js'
const app = express()
// configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)



// mount routes
app.get('/', (req, res) => res.redirect('/students'))
app.get('/students', (req, res) => res.render('students/index',{
  students:students
}))


// tell the app to listen on port 3000
app.listen(3000, function () {
  console.log("listening local host")
})