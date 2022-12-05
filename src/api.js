const express = require("express");
const serverless = require("serverless-http");
const { Configuration, OpenAIApi } = require("openai");
const { faker } = require("@faker-js/faker");
const { textGenerator } = require("./lib/text-generator");

const configuration = new Configuration({
  apiKey: "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",
});

const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  const listOfQueries = textGenerator();
  const openai = new OpenAIApi(configuration);
  const response = {};

  for (const prompt of listOfQueries) {
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 64,
      temperature: 0,
    });

    response[res.data.id] = {
      question: prompt,
      answer: res.data.choices[0].text,
    };
  }

  res.json({
    response,
  });
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
