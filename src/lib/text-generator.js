const { faker } = require("@faker-js/faker");

export const textGenerator = () => {
  const listOfQueries = [
    `Tell me my cause of death involving a ${faker.animal.insect()} and a ${faker.random.word()}`,
    `Tell me a joke involving a ${faker.hacker.noun()}`,
  ];

  return listOfQueries;
};
