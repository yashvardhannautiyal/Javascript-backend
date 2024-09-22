require('dotenv').config()

const express = require('express') //to include express in project
const app = express() //this makes "app" a powerfull variable for ex: as in MATH have functions like MATH.Pi so "app" will also have various functions that can be used in the project
const port = 3000 //in computer we have ports like usb similarlly we have virtual ports and this is not fixed

app.get('/', (req, res) => { //takes a callback function and request in "home" and response "hello world"
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('yashvardhan is here')
})

app.get('/login', (req,res) =>{
  res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req,res) =>{
  res.send('<h1>chai aur code</h1>')
})

app.listen(process.env.PORT, () => { //this will listen the request 
    //this will execute only when the server listen the request successfuly 
  console.log(`Example app listening on port ${port}`)
})




//this is overall a server that listens on '/' and '/twitter' and gives the response on successfull execution

//whenever we update the code we need to restart it again in order to see the changes