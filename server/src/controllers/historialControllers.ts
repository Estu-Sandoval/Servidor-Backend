import {Request, Response} from "express";
import pool from "../database";

class HistorialController{

    async getHistorial(req: Request,res:Response){
        const {dni}=req.params;
        const historial = await pool.query("SELECT \*\ FROM (SELECT \*\ FROM (SELECT idPaciente FROM paciente WHERE DNI = ?) SC1 NATURAL JOIN atiende) SC2 NATURAL JOIN paramedico;",[dni]);
        res.json(historial);
        /*'SELECT \*\
        FROM (SELECT * FROM paciente NATURAL JOIN HistorialClinico WHERE paciente.DNI = ?) SC NATURAL JOIN atiende',[dni]*/
    }
}
const historialController = new HistorialController();

export default historialController;