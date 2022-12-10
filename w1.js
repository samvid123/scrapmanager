const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors and more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: aquamarine;
              padding: 34px;
              width: 666px;
              margin: auto;
              font-family: product Arial, Helvetica, sans-serif ;
  
          }
          .btn{
              background-color: blue;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          a{
              text-decoration: none;
              color: black;
  
          }
          a:hover{
              color: rgb(86, 56, 0);
              background-color: rgb(0, 0, 176);
          
          }
          a:visited{
              color: yellow ;
          }
          #btn1{
              color: black;
              
  
          }
          #btn1:hover{
              color: rgb(86, 56, 0);
              background-color: rgb(0, 0, 176);
          }
          
  
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is the Heading</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium vel minima nesciunt quod dolorem pariatur quis numquam libero nemo rem ex autem dolores laboriosam, quasi sequi accusantium.</p>
          <a href="https://www.duckduckgo.com" class="btn">read more</a>
          <button class="btn" id="btn1">contact us</button>
      </div>
      
  </body>
  </html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});