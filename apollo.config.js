module.exports = {
  client: {
    includes: ["components/**/*.ts"],
    service: {
      name: "swapi",
      url: `https://swapi-graphql.netlify.app/.netlify/functions/index`,
    },
  },
};
