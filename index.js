const http = require('http');
const fs = require("fs");
const axios = require('axios');


const port = 8080;

const server = http.createServer(
    async (req, res) => {
        if (req.url == '/') {
            res.writeHead(200, { "Content-type": "text/html" });
            fs.readFile("./index.html", (err, data) => {
                if (!err) {
                    res.write(data);
                    res.end();
                }
            })
        }
        else if (req.url == '/books') {
            res.writeHead(200, { "Content-type": "application/JSON" });
            const response = await axios.get("https://api.itbook.store/1.0/search/mongodb");
            res.write(JSON.stringify(response.data.books));
            res.end();
        }

        else if (req.url == '/video') {
            res.writeHead(200, { "Content-type": "video/mp4" });
            fs.readFile("Pexels Videos 2048452.mp4", (err, data) => {
                if(!err){
                    res.write(data);
                    res.end();
                }
            })
        }

    }
);

server.listen(port, () => {
    console.log('Server started running on port 8080');
})





































































































































































































































