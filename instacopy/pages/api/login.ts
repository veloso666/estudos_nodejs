import type {NextApiRequest, NextApiResponse} from "next";
import {conectarMongoDB} from '../../middlewares/MongodbConnection'
import type {RespostaPadraoMsg} from '../../types/RespostaPadraoMsg';
import type {loginResposta} from '../../types/loginResposta';
import md5 from 'md5'
import { UsuarioModel } from "@/models/UsuarioModel";
import jwt from 'jsonwebtoken';

const endpointLogin = async(
    req : NextApiRequest,
    res : NextApiResponse<RespostaPadraoMsg | loginResposta>
) => {

 const {MINHA_CHAVE_JWT} = process.env
 if(!MINHA_CHAVE_JWT){
    return res.status(500).json({erro: 'ENV JWT não informada'})
 }

    if(req.method === 'POST'){
        const {login, senha} = req.body;

        const usuariosEncontrados = await UsuarioModel.find({email : login,senha : md5(senha)});
        if(usuariosEncontrados && usuariosEncontrados.length > 0){
            const usuarioEncontrado = usuariosEncontrados[0];

            const token = jwt.sign({_id: usuarioEncontrado._id}, MINHA_CHAVE_JWT);

            return res.status(200).json({nome: usuarioEncontrado.nome, email: usuarioEncontrado.email, token});
        }
        return res.status(400).json({erro : 'Usuario ou senha nao encontrado'});
    }
    return res.status(405).json({erro : 'Metodo informado nao e valido'});
}

export default conectarMongoDB(endpointLogin);