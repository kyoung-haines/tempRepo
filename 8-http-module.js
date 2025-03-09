const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end(`
                <h1>Welcome to home page!</h1>
                <a href="/about">About</a>
                `);
    }
    else if(req.url === '/about'){
        res.end(`<h1>About</h1>
            <p>Our history!</p>`);
    }
    else {
        res.end(`<h1>Error - Resource Not Found</h1>`);
    }

});

server.listen(5000);