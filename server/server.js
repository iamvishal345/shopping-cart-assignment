import express, { json, urlencoded } from "express";
import cors from "cors";
import { join } from "path";
import compression from "compression";
import { HTTPS } from "express-sslify";
const router = require("./router");
// import serverRenderer from "./middleware/renderer";
// import helmet from "helmet";
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));
// app.use(helmet());
const allowedOrigins = ["http://localhost:3000", "http://localhost:5000"];
const options = {
  origin: allowedOrigins,
  methods: ["GET", "POST"],
};

app.use(cors(options));
app.use("/api", router);
// app.use("^/$", serverRenderer);
// if (process.env.NODE_ENV === "production") {
// app.use(HTTPS({ trustProtoHeader: true }));
app.use(express.static(join(__dirname, "./build")));
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "./build", "index.html"));
});
// }

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server running on port ", port);
});

// app.get("/service-worker.js", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "build", "service-worker.js"));
// });
