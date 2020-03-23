const express = require('express')
const app = express()
app.use(express.json())
const port = 3001
const ctrl = require('./controller/message_controller')

app.use(express.static('../public/build'))

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

app.post('/api/messages', ctrl.createMessage )
app.get('/api/messages', ctrl.returnMessages)
app.put('/api/messages/:id', ctrl.updateMessage)
app.delete('/api/messages/:id', ctrl.deleteMessage)