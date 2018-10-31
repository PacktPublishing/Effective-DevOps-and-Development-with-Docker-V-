const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const url = 'mongodb://mongo:27017'

app.get('/', async (req, res, next) => {
  let client;
  try {
    client = await MongoClient.connect(url);
    const db = client.db('test');
    const rand = db.collection('rand');
    const result = await rand.insertOne({
      value: Math.random()
    });
    console.log("Result", result);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  } finally {
    if (client && client.isConnected()) {
      client.close();
    }
  }
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
