import http from "http";
import fs from "fs";
const server = http.createServer();
server.on("request", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    let messages = {};
    if (req.method === "POST") {
        const body = [];
        let allMessages;
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            // console.log(body[0].toString())
            fs.readFile("message.txt", "utf-8", (err, data) => {
                if (err) console.log("Echec");
                allMessages = JSON.parse(data);
                messages = JSON.parse(data);
                let leng = Object.keys(messages).length;
                messages[leng] = body[0].toString();
                console.log(messages);
                fs.writeFile("message.txt", JSON.stringify(messages), (err) => {
                    if (err) console.log("erreur survenue");
                });
            });
        });
    }
    fs.readFile("message.txt", (err, data) => {
        if (err) console.log("Echec");
        return res.end(data);
    });
});
server.listen(8001);
