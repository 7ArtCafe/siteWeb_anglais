const express = require('express')
const port = 4242
const db = require('./seed.js')
const cors = require('cors')
const { where } = require('./seed.js')

// instantation du serveur
const app = express()

// Permet l'accès au données
app.use(cors())

// Configuration des routes
app.get('/', (req, res) => {
    res.send("<h1>Hello World données de la page d'accueil</h1>")
})

app.get('/carte', (req, res) => {
    db.select().from('Menus').then(function(data){
        res.send(data)
    })
})

app.get('/carte/menus', (req, res) => {
    db.select().from('Menus').then(function(data){
        res.send(data)
    })
})

app.get('/carte/plats/:idTypePlat', (req, res) => {
    db.select().from('Plats').where({
        preparer: 1,
        idTypePlat: req.params.idTypePlat}).then(function(data){
        res.send(data)
    })
})

app.get('/carte/fritures', (req, res) => {
    db.select().from('Fritures').then(function(data){
        res.send(data)
    })
})

app.get('/carte/desserts', (req, res) => {
    db.select().from('Desserts').then(function(data){
        res.send(data)
    })
})

app.get('/carte/option_menu/:id', (req, res) => {
    db.select('OptionMenu.*').from('OptionMenu').join('Opt_Mn_Menu', 'Opt_Mn_Menu.idOptionMenu', '=', 'OptionMenu.idOptionMenu' )
    .where({
        'Opt_Mn_Menu.idMenus': req.params.id
    }).then(function(data){
        res.send(data)
    })
})

app.get('/carte/boissons', (req, res) => {
    db.select().from('Boissons').then(function (data){
        res.send(data)
    })
})

// Insertion dans la base de donnée
app.post('/commande', (req, res) => {
    db.insert({})
})

// Lancement du serveur
app.listen(port, () => {
    console.log(`app listening on port: ${port}`)
  })