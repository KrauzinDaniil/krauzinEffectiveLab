
import express, { json } from 'express';
import web from 'web-push';

const { setVapidDetails, sendNotification } = web;
const app = express();
const PORT = 3002;

const publicKey =
  'BFO5iqN259yigGJtLCzjb8xFCJBgrPLFtBrtaxzXKEa0l5UYx8qL1ORplM3471lzS9fQQAxXtoXswJYPyxoT0ws';
const privateKey = 'pi7md0SrZ7elpMtlcz3xbxExC-1TBylw6BjzU6jTpEY';

const subscriptions = [];

setVapidDetails(
  'mailto:konstantin.zelinsky@effective.band',
  publicKey,
  privateKey
);


app.use(json());

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/subscriptions', (req, res) => {
  res.status(200).json(subscriptions);
});

app.get('/', (req, res) => {
  res.status(200).json("");
});

app.post('/subscribe', (req, res) => {
  const subscription = req.body;

  if (
    subscriptions.findIndex(
      (subscriber) =>
        subscriber.keys.p256h === subscription.keys.p256h &&
        subscriber.keys.auth === subscription.keys.auth
    ) === -1
  ) {
    console.log('Add subscription');
    subscriptions.push(subscription);
  }

  res.status(201).end();
});

app.post('/send-notification', async (req, res) => {
  const payload = JSON.stringify(req.body);

  subscriptions.forEach(async (subscription) => {
    await sendNotification(subscription, payload);
  });

  res.status(200).end();
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
