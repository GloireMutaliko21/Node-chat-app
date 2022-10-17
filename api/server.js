import http from "http";
import fs from "fs";

const server = http.createServer();

server.on("request", (req, res) => {
    fs.readFile('message.txt', (err, data) => {
        if (err) console.log("Echec");
        return res.end(data);
    })

});

server.listen(8001);