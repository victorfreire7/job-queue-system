import mongo_schema from '../model/User.ts';

import { faker } from '@faker-js/faker';
let i = 0


const store = async (req: any, res: any) => {
    while (i < 1000) {        
        try {
            const user_email = faker.internet.email();
            const user_password = faker.internet.password();
            const info:string = `${user_email} ${user_password}`;

            await mongo_schema.create({ // estou buscando o schema de dentro da API; talvez nao seja a melhor maneira de fazer isso.
                email: user_email,
                password: user_password
            });

            console.log(info)

            i++; 
            continue  
        } catch (error) {
            console.error(`ERRO: ${error}`)
        }
    }

    i = 0;
    res.json({
        "finish": true,
    })
}

export default { store }