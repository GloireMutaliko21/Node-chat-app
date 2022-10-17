import http from "http";
import fs from "fs";

const server = http.createServer();

server.on("request", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    const messages = {}
    fs.writeFile('message.txt', Buffer.from(JSON.stringify(messages)), (err) => {
        if (err) console.log("erreur survenue")
    })

    fs.readFile('message.txt', (err, data) => {
        if (err) console.log("Echec");
        res.end(data);
    })


});

server.listen(8000);