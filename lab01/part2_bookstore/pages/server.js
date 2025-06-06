   const http = require('http');
   const fs = require('fs');
   const path = require('path');

   const server = http.createServer((req, res) => {
       let filePath = path.join(__dirname, 'pages', req.url === '/' ? 'index.html' : req.url);

       const extname = path.extname(filePath);
       let contentType = 'text/html';

       switch (extname) {
           case '.js':
               contentType = 'text/javascript';
               break;
           case '.css':
               contentType = 'text/css';
               break;
           case '.json':
               contentType = 'application/json';
               break;
           case '.png':
               contentType = 'image/png';
               break;
           case '.jpg':
               contentType = 'image/jpg';
               break;
       }

       fs.readFile(filePath, (error, content) => {
           if (error) {
               if (error.code == 'ENOENT') {
                   res.writeHead(404, { 'Content-Type': 'text/html' });
                   res.end('<h1>404 - Page Not Found</h1>', 'utf-8');
               } else {
                   res.writeHead(500);
                   res.end('Sorry, there was an error: ' + error.code + ' ..\n');
               }
           } else {
               res.writeHead(200, { 'Content-Type': contentType });
               res.end(content, 'utf-8');
           }
       });
   });

   const PORT = process.env.PORT || 3000;
   server.listen(PORT, () => {
       console.log(`Server running at http://localhost:${PORT}/`);
   });
   