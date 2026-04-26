import { mongo } from 'mongoose';
import mongo_schema from '../api/model/User.ts';

import mongodb from '../config/mongo.ts';
import redis from '../config/redis.ts';

import express from 'express';
const app: express.Express = express();
const port: number = 8080;

await redis.connect()
.then(() => console.log('redis connect'));

await mongodb()
.then(() => console.log(`mongodb connect in port ${port}`));

app.listen(port, async () => {
    const HANDLE_1 = await redis.lRange("HANDLE_1", 0, -1) 
        
    const user = await redis.lRange( // Como a função do redis lpush armazena dados em formato de pilha, estou resgatando o último dado dentro da DB.
        'HANDLE_1',
        HANDLE_1.length - 1,
        HANDLE_1.length - 1
    );
    
    // estou buscando toda a lista e depois buscando apenas o ultimo elemento dela, de acordo com o tamanho da primeira variavel. 
    // PROCURAR MELHOR FORMA DE EXECUTAR ESSA AÇÃO

    const user_str: string[] | any = user[0]?.split(' ');
    const email: string | undefined = user_str[0]
    const password: string | undefined = user_str[1]
    console.log(user_str);
    console.log(email);
    console.log(password);

    
})