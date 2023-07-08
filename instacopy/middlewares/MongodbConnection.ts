import type {NextApiRequest, NextApiResponse, NextApiHandler} from 'next';
import mongoose  from 'mongoose';
export const connectorMongodb = (handler : NextApiHandler) =>
   async (req: NextApiRequest, res : NextApiResponse) =>{
        /*verifica se o banco esta conectado,
         se estiver, seguir para o endpoint ou proximo middleware */
        if(mongoose.connections[0].readyState){
            return handler(req, res);
        }
        /*se nao estiver conectado, vamos conectar
        obter a variavel de ambiente preenchida do env
        */
       const {DB_CONEXAO_STRING} = process.env

       //se a env estiver vazia, aborta o uso do sistema, e avisa o programador
        if(!DB_CONEXAO_STRING){
            return res.status(500).json({erro : 'ENV de configuracao do banco, nao informada'});
            }
            mongoose.connection.on('connected', ()=> console.log('Banco de dados conectado'))
            mongoose.connection.on('error', error => console.log(`Ocorreu um erro ao conectar: ${error}`))
           await mongoose.connect(DB_CONEXAO_STRING);

           //agora pode seguir para o endpoint, pois estou conectado no banco
           return handler(req, res)
        }
    
