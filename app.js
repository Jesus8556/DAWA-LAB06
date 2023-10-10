const express = require('express');
const app = express();

app.use(express.static('public'))
// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);


app.get('/',(req,res) => {
    res.render('inicio.ejs')
})
app.get('/projects',(req,res) => {
    res.render('project.pug')
})
app.get('/contacto',(req,res) => {
    res.render('contact.ejs')
})


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
