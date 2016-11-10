var http = require('http');
var colors = require('colors');
var fs = require('fs');
var mime=require('mime')


//importando el objeto configurador
var config = require('./config/config');
// estableciendo tema
colors.setTheme(config.colorTheme);
// importando configuraciones
var IP = config.IP,
 PORT = config.PORT;
var server = http.createServer(function (req, res) 
{
    var url = req.url;
    if(url === "/")
    {
        url= '/index.html'
    }

    console.log(`>Recurso solicitado> ${url}`.data);
    var filePath = './static'+url;
    console.log(`> Se servira archivo: ${filePath}`.data);

var mimeType=mime.lookup(filePath);
    fs.readFile(filePath, 'utf8', function (err, content) 
    {
        if (err) 
        {
            // hubo error
            res.writeHead(500, 
            {
                'Content-Type': "text/html"

            });
            console.log('>Error en la lectura de un archivo: ln20 server.js'.error);
            res.end("<h1>Error interno</h1>");
        }
        else 
        {
            //no hubo error
            res.writeHead(200, 
            {
                'Content-Type': "text/html"
            });
            console.log('>Sirviendo index.html'.data);
            res.end(content);

        }
    });
});

server.listen(PORT, IP, function () 
{
    console.log(`>Server corriendo en http://${IP}:${PORT}...`.info);
});