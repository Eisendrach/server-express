const express = require('express')
const fs = require('fs')
/* const { TemplateString } = require('./template')  */
const app = express()
const port = 8000

app.use(express.static( __dirname +'/public'))

app.get("/", (req, res)=>{
  res.sendFile('public/home.html', {root : __dirname})
})
/* 
app.get("/", (req, res)=>{
  const query = req.query
  res.send(TemplateString(query.nome, query.cognome), {root : __dirname})
})
  */
app.listen(8000, console.log("working as intended"))
