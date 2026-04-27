import express from 'express';
import redis from '../config/redis.ts';
import controller from './controller/index.ts'
import mongodb from '../config/mongo.ts';
const app = express();

await mongodb()
.then(() => console.log(`mongodb connect in server`));

await redis.connect()
.then(()=>console.log('redis connect'));

app.post('/', controller.store);

app.listen('5000', () => {
    console.log(`http://127.0.0.1:5000`)
})
