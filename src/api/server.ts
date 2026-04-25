import express from 'express';
import controller from './controller/index.ts'
const app = express();

app.post('/', controller.store);

app.listen('5000', () => {
    console.log(`http://127.0.0.1:5000`)
})
