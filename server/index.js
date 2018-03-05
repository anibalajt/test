import app from "./app";
import config from "./config";
import http from "http";

let server = http.createServer(app);
server.listen(config.port, () => {
  console.log("API REST corriendo en http://127.0.0.1:" + config.port);
});
