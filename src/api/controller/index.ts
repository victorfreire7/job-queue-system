import redis from '../../config/redis.ts';
const handler_numbs: number = 2;

const rand_numb = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min);
}

const store = async (req: any, res: any) => {
    try {
        const info:string = `${req.body.email} ${req.body.password}`;
        const rand: number = rand_numb(0.59, handler_numbs + 0.49)

        let handle:string = `HANDLE_${rand}`;
        
        await redis.lPush(
            handle, 
            info 
        );

        res.json({
            "HANDLE": handle,
            "EMAIL": req.body.email, 
            "PASSWORD": req.body.password
        })

    } catch (error) {
        console.error(`ERRO: ${error}`)
    }
}

export default { store }