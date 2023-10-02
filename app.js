//Load modules
const dotenv = require("dotenv");
dotenv.config();
const configurationManager = require("./src/config/api.config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const logger = require("./src/utils/logger");
//Create the Express App
const app = express();

//Importing routes

//Order Routes
const orderRoutes = require("./src/routes/order.service.routes");

//Authentication Routes
const routAuthentication = require("./src/routes/authentication.route");

//Payment Routes

//Delivery Service Routes
const deliveryServiceRoute = require("./src/routes/delivery.service.routes");
//Setup Request body JSON Parsing
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Enable All CORS Requests
app.use(cors());

app.use(helmet());

// Configure Services

//Authentication Services
app.use(routAuthentication);

//Order Services
app.use(orderRoutes);

//Delivery Services
app.use("/api/deleveryService", require("./src/routes/delivery.service.routes"));
app.use("/api/message", require("./src/routes/messages.routes"));
app.use("/api/dashboard", require("./src/routes/dashboard.routes"));
app.use("/api/report", require("./src/routes/pdf.report.generate.manager.routes"));
//"mongodb://localhost:27017/SPM"
mongoose.connect(configurationManager.connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
	logger.info(" Connect Database....");
});
if (app.get("env") === "development") {
	app.use(morgan("tiny"));
	startupDebugger("✨ Enabled Morgon......");
}

app.get("/", (request, response) => {
	response.send("<h3>🖥️ Welcome API Documentation</h3>");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	logger.info(`Web API Development: ${port}`);
});

/*npm run local:server*/
