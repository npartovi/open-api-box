const express = require("express");
const serverless = require("serverless-http");
const { Configuration, OpenAIApi } = require("openai");
const { faker } = require("@faker-js/faker");

const configuration = new Configuration({
  apiKey: "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",
});

const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  const prompt = `Tell me my cause of death involving a ${faker.animal.insect()} and a ${faker.random.word()}`;
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 64,
    temperature: 0,
  });

  res.json({
    prompt,
    response: response.data.choices[0].text,
  });
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
