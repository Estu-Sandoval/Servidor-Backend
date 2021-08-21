import {Request, Response} from "express";
import pool from "../database";
class ParamedicoController{
    async getParamedico(req: Request, res: Response){
        const {legajo}=req.params;
        const paramedico = await pool.query("SELECT idParamedico FROM paramedico WHERE legajo = ?",[legajo]);
        res.json(paramedico);
    }


}


const paramedicoController = new ParamedicoController();

export default paramedicoController;