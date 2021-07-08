const http = require('http');
const porta = 3000;
const host = '127.0.0.1';


const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type': 'text/html'});
    if (req.url == '/') {
        res.write('<h1>Seja Bem Vindo!</h1>');
    }else if(req.url == '/01'){
        res.write('<h1>Servidor rodando na rota 01</h1>');
    }if(req.url == '/02'){
        res.write('<h1>Servidor rodando na rota 02</h1>');
    }
    res.end();

});

servidor.listen(porta,host,()=>{console.log('Servidor rodando favor testar no Browser')});