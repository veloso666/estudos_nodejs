import type { NextApiResponse, NextApiRequest } from "next";
import { validarTokenJwt } from '../../middlewares/validarTokenJwt'

const usuarioEndpoint = (req: NextApiRequest, res: NextApiResponse)=>{
    return res.status(200).json('usuario autenticado com sucesso')
}

export default validarTokenJwt(usuarioEndpoint);