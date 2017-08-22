require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const options = {
  auth: {
    authSource: 'admin',
  },
};
mongoose.connect(process.env.MONGODB, options, (err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(process.env.PORT || 3000, () => {
      console.warn('Server is listening on port: ', process.env.PORT || 3000);
    });
  }
});