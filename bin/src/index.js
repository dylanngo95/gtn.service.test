"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methodOverride = require("method-override");
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("../swagger/output/routes");
const swagger_dist_1 = require("swagger-dist");
console.log(swagger_dist_1.default);
// controllers need to be referenced in order to get crawled by the generator
require("./controllers/index");
const app = express();
// Config UI swagger
// app.use("/swagger", express.static(swagger));
// app.use("/swagger.json", (_req, res) => {
//     res.sendFile("../swagger/output/swagger.json");
// });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
routes_1.RegisterRoutes(app);
app.listen(3000);
