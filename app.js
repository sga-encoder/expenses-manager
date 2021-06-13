const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/Views')


app.get('/', ({res}) => {
    res.render('index', {title: 'Bienvenido!'})
})

app.get('/dashboard', ({res}) => {
    res.render('dashboard', {title: 'Dashboard'})
})

app.use('/sources', express.static(__dirname + '/Public'))

app.listen(port, () => {
    console.log(`Server listening at port: ${port} | http://localhost:${port}`)
})
