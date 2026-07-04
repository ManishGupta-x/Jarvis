// Central config loaded from environment variables.
// Copy .env.example to .env and fill in the values (see README).
require('dotenv').config();

module.exports = {
  token: process.env.DISCORD_TOKEN,
  mongodb: process.env.MONGODB_URI,
  apiKey: process.env.OPENAI_API_KEY,
  cookie: process.env.YOUTUBE_COOKIE,
};
