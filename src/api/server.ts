import express from 'express';
import redis from './config/redis.ts';
import mongodb from '../handler/config/mongo.ts'; // CONEXAO SENDO FEITA EM SERVER.TS TEMPORARIAMENTE. SERA REMOVIDO POSTERIORMENTE QUANDO OS HANDLERS FOREM CRIADOS.
import controller from './controller/index.ts'
const app = express();

await mongodb()
.then(() => {
    app.emit('mongodb OK')
});

await redis.connect()
.then(()=>console.log('redis connect'));

app.post('/', controller.store);

app.listen('5000', () => {
    console.log(`http://127.0.0.1:5000`)
})
