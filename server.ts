import express from 'express';
import { faker } from '@faker-js/faker';
import redis from './src/config/redis.ts';
import mongodb from './src/config/mongo.ts';
const app = express();

await mongodb()
.then(() => {
    app.emit('mongodb OK')
});

await redis.connect()
.then(()=>console.log('redis connect'));

app.listen('8080', () => {
    console.log(`http://127.0.0.1:8080`)
})
