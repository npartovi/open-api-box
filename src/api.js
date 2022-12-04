const express = require("express");
const serverless = require("serverless-http");
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  const openai = new OpenAIApi(configuration);
  const response = await openai.listModels();

  res.json({
    hello: "is this thing even working",
  });
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
