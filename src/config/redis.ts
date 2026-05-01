import { createClient} from 'redis';
import { config } from "dotenv";
import { connect } from 'mongoose';
config();

const redis_user:string | undefined = process.env.REDIS_USER
const redis_password:string | undefined = process.env.REDIS_PASSWORD
const redis_host:string | undefined = process.env.REDIS_HOST

export default (() => {
    if(
        typeof redis_user == 'string' && 
        typeof redis_password == 'string' && 
        typeof redis_host == 'string'
    ){
        async (): Promise<void> => {
            console.log('connect')
            await createClient({
                username: redis_user,
                password: redis_password,
                socket: {
                    host: redis_host,
                    port: 13460
                }
            }).connect();
        }
    } else {
        console.log('NOT connect')
    }
})();