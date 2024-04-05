const express = require('express')
const exphbs = require('express-handlebars')
const todosRoutes = require('./routes/todos')
const html = require('html')

const PORT = process.env.PORT || 4000 //npm run dev

const app = express()
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:"hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

app.get ('/',(req,res)=>{
    res.render('index')
})

app.use(todosRoutes)


app.listen(PORT,() => {
    console.log('Сервер запущен...')
})

// const html = require('./html/inndex.hbs')
// async function test(){
// app.listen(PORT,() => {
//     console.log('есть контакт')
// })}
// test()