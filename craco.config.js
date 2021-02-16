const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: "options",
          baseUrl: "./",
          aliases: {
            "@views": "./src/views",
            "@lay": "./src/layouts",
            "@store": "./src/store",
            "@api": "./src/api",
          }
        }
      }
    ]
  };