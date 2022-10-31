

const http = require('http');

// TODO Es un callback que se dispara con varios argumentos
/**
 * request
 * response
 */
http.createServer( (req, res)  => {

    // console.log( req )

    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')//TODO Manda como archivo descargable
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    const persona = {
        id: 1,
        nombre: 'Fernando'
    }

    // res.write('Page Not FOund');
    // res.write(JSON.stringify(persona));
    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Maria\n');
    res.write('3, Juan\n');
    res.write('4, Pedro\n');

    res.end();

}).listen( 8080 );

console.log(' Escuchando en el puerto ', 8080 );