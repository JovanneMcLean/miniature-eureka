const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'))) 
app.use(express.urlencoded({extended:true}))

app.use('/api/notes', function(request, response){
  response.send('run the alert')
})

app.use('/test', function(request, response){
  response.send('run the alert')
})

app.use('/notes', function(request, response){
  response.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

app.use('/', function(request, response){
  response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, function(){
  console.log('listening on port', PORT)
})