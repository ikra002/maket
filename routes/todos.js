const { Router } = require('express')
const Todo = require('../views/models/Todo')
const router = Router()

/*router.get('/todos', async (req, res) => {
  const todos = await Todo.find({})

  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
  })
})*/

router.get('/', async (req, res) => {  //название ссылки
    const todos = await Todo.find({})
  
    res.render('index', {
      title: 'platon.teyhb.ru',
      isIndex: true,
      todos
    })
  })

// router.get('/create', (req, res) => { //название ссылки

//   res.render('create', {
//     title: 'Create todo',
//     isCreate: true
//   })
// })

// router.post('/create', async (req, res) => {
//     //console.log(req.body);
//     const todo = new Todo({
//     title: req.body.title
//   })

//   await todo.save()
//   res.redirect('/')
// })

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id)

  todo.completed = !!req.body.completed
  await todo.save()

  res.redirect('/')
})

module.exports = router