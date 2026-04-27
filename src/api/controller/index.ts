import redis from '../../config/redis.ts';
import { faker } from '@faker-js/faker';
let i = 0


const store = async (req: any, res: any) => {
    while (i < 1000) {        
        try {
            const email = faker.internet.email();
            const password = faker.internet.password();
            const info:any = `${email} ${password}`;
    
            const HANDLE_1 = await redis.lRange("HANDLE_1", 0, -1) // RETORNO = ARRAY
            const HANDLE_2 = await redis.lRange("HANDLE_2", 0, -1) // RETORNO = ARRAY
    
            let handle:string | any = 'HANDLE_1';
            if(HANDLE_1.length > HANDLE_2.length){            
                handle = 'HANDLE_2';
            }
    
            // LPUSH (HANDLE_1 || HANDLE_2) "EMAIL PASSWORD"
    
            await redis.lPush(
                handle, 
                info 
            );
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