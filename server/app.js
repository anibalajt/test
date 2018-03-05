import express from "express";
import bodyParser from "body-parser";

import api from "./routes";

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", api);

module.exports = app;
