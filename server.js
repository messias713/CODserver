const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Olá mundo! Agora foi de vez.</h1>');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
