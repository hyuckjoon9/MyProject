require('dotenv').config();

module.exports = {
  mongoURI: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.1mcyyba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
};
