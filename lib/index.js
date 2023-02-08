require("dotenv").config();
const express = require("express");
let app = express();
const JSONdb = require("simple-json-db");
const db = new JSONdb(process.cwd() + "/.db/storage.json");
console.debug(process.cwd());
app.use("/", express.static(process.cwd() + "/"));
app.use("/js", express.static(process.cwd() + "/js"));
app.use("/images", express.static(process.cwd() + "/images"));
app.use("/views", express.static(process.cwd() + "/views"));
const port = process.env.PORT || process.env.SERVER_PORT || 1422;
let requests = db.get("requests") || 0;
let school_people_requests = db.get("s_requests") || 0;
let school_ip = process.env.SCHOOL_IP;
app.get("/build", (req, res) =>
  res.sendFile(process.cwd() + "/build/files.zip")
);
app.get("/requests", (req, res) => {
  res.json({ requests, school_people_requests });
});
app.post("/request", (req, res) => {
  if (req.ip.includes(school_ip)) school_people_requests++;
  requests++;
  db.set("requests", requests);
  db.set("s_requests", school_people_requests);
  res.status(201).end();
});
app.listen(port, () => {
  console.log("On port ::" + port);
});
