import * as methodOverride from "method-override";
import * as express from "express";
import * as bodyParser from "body-parser";
import { RegisterRoutes } from "../swagger/output/routes";

// controllers need to be referenced in order to get crawled by the generator
import "./controllers/index";

const app = express();

// Config UI swagger
// app.use("/swagger", express.static(swagger));
// app.use("/swagger.json", (_req, res) => {
//     res.sendFile("../swagger/output/swagger.json");
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

RegisterRoutes(app);

app.listen(3000);
