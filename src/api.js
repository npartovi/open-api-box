const express = require("express");
const serverless = require("serverless-http");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Tell me a joke about a cop and a jewish man in a bowling alley",
    max_tokens: 64,
    temperature: 0.4,
  });

  res.json({
    response: "hello",
    data: response.data,
  });
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
