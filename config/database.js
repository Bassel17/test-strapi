const path = require("path");

const sqlite = {
  client: "sqlite",
  connection: {
    filename: path.join(
      __dirname,
      "..",
      process.env.DATABASE_FILENAME || ".tmp/data.db"
    ),
  },
  useNullAsDefault: true,
};

const postgres = {
  client: "postgres",
  connection: {
    database: process.env.database || "strapi",
    user: process.env.user || "strapi",
    password: process.env.password || "strapi",
    port: process.env.db_port || 5432,
    host: process.env.host || "localhost",
  },
};

const db = {
  sqlite,
  postgres,
};

module.exports = {
  connection: process.env.DB ? db[process.env.DB] || db.sqlite : db.sqlite,
};
