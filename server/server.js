import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import "isomorphic-fetch";
import App from "../src/App";

const PORT = 8000;

const app = express();

app.use("^/$", (req, res, next) => {
  fetch("https://api.spacexdata.com/v3/launches?limit=100")
    .then((response) => response.json())
    .then((initialData) => {
      fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Some error happened");
        }
        return res.send(
          data.replace(
            '<div id="root"></div>',
            `<script>window.__initialData__ = ${JSON.stringify(
              initialData
            )}</script><div id="root">${renderToString(
              <App initialData={initialData} />
            )}</div>`
          )
        );
      });
    });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  process.send && process.send(`App launched on ${PORT}`);
});
