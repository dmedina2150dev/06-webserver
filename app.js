require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;


// HandleBars
app.set('view engine', 'hbs');// TODO esto le dice a express que cuando renderice utilice handrebars
hbs.registerPartials(__dirname + '/views/partials', function (err) { console.log(err) });


// Servir contenido estatico
app.use( express.static('public') ); // TODO Asi se usan los middelware de node

// TODO Renderizar desde el servidor
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Dajan Medina',
        titulo: 'Curso de Node'
    }// TODO los argumentos se mandan como segundo parametro de render -> que serian las opciones 
    ); // TODO no hace falta ponerle la extencion
});

app.get('/generic', (req, res) => {
    res.render('generic', { titulo: 'Curso de Node' });
});
app.get('/elements', (req, res) => {
    res.render('elements', { titulo: 'Curso de Node' });
});


// Como pasa por el middleware anterior esta no se ejecuta
// app.get('/', (req, res) => {
//   res.send('Home Page')
// });

// TODO Los path de los archivos html para que no aparezca la extencion
// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });
// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });


app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo desde su ruta')
});

// TODO Comodin para capturar rutas no existentes
app.get('*', (req, res) => {
    // res.send('404 | Page not Found');
    res.sendFile(__dirname + '/public/404.html');
});

app.listen( port, () => {
    console.log(`Aplicación corriendo en http://localhost:${ port }`)
});