import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: '../../.env' });

const connectionstring:any = process.env.MONGO_CONNECTIONSTRING;

const db = async () => {
  try {
    await mongoose.connect(connectionstring);
    console.log("mongoDB connection OK");
  } catch (error) {
    console.error(`ERRO: ${error}`);
  }
};

export default db;

// TO CONNECT:

// import mongodb from '../config/mongo.ts'; // CONEXAO SENDO FEITA EM SERVER.TS TEMPORARIAMENTE. SERA REMOVIDO POSTERIORMENTE QUANDO OS HANDLERS FOREM CRIADOS.
// await mongodb()
// .then(() => {
//     app.emit('mongodb OK')
// });