import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
    res.write("Hey Gloire ! \n")
    res.end("Bonjour Node-React!");
});

server.listen(8000);