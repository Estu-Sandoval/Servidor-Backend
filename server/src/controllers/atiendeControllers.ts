import {Request, Response} from "express";
import pool from "../database";
class AtiendeController{
    async createMotivo(req:Request,res:Response){
        const {idPaciente,idParamedico, fecha, causa} = req.body;

        await pool.query("INSERT INTO atiende set ?",[req.body]);

        res.json({
            ok: true,
            message: "Registro cargado con exito"
        })
    }
}


const atiendeController = new AtiendeController();

export default atiendeController;