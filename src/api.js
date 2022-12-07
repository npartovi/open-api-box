const express = require("express");
const serverless = require("serverless-http");
const { Configuration, OpenAIApi } = require("openai");
const {
  textGenerator,
  getRandomSFCharacter,
  getRandomChuckNorrisJoke,
} = require("./lib/text-generator.js");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  const listOfQueries = textGenerator();
  const openai = new OpenAIApi(configuration);
  const chuckNorris = await getRandomChuckNorrisJoke();
  const response = {
    sfCharacter: getRandomSFCharacter(),
    chuckNorris,
  };

  console.log(process.env.OPENAI_API_KEY);

  // for (const prompt of listOfQueries) {
  //   const res = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt,
  //     max_tokens: 64,
  //     temperature: 0,
  //   });

  //   response[res.data.id] = {
  //     question: prompt,
  //     answer: res.data.choices[0].text,
  //   };
  // }

  res.json({
    response,
  });
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
