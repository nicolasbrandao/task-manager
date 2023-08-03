import { Router } from "express"

export const taskController = Router()

taskController
  .use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

  .get('/', (req, res) => {
    res.send('List tasks')
  })

  .post('/', (req, res) => {
    res.send('Create tasks')
  })

  .delete('/:id', (req, res) => {
    res.send('Delete task: ' + req.params.id)
  })

  .put('/:id', (req, res) => {
    res.send('Update task: ' + req.params.id)
  })

  .get('/:id', (req, res) => {
    res.send('Task: ' + req.params.id)
  })