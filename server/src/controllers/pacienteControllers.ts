import {Request, Response} from "express";
import pool from "../database";
class PacienteController{
    async getPacientes(req: Request,res:Response){
        const {dni}=req.params;
        const pacientes = await pool.query("SELECT *, paciente.idPaciente FROM paciente LEFT JOIN HistorialClinico ON paciente.idPaciente = HistorialClinico.idPaciente WHERE paciente.DNI = ?",[dni]);
        res.json(pacientes);
        /*'SELECT \*\
        FROM (SELECT * FROM paciente NATURAL JOIN HistorialClinico WHERE paciente.DNI = ?) SC NATURAL JOIN atiende',[dni]*/
    }
    
    async create(req:Request,res:Response){
        const {nombre,apellido,DNI,direccion,obraSocial,grupoSanguineo,fechaNac} = req.body;

        await pool.query("INSERT INTO paciente set ?",[req.body]);

        res.json({
            ok: true,
            message: "Paciente cargado con éxito"
        })
    }

    async delete(req:Request, res:Response){
        const {id}=req.params;
        await pool.query("DELETE FROM paciente WHERE idPaciente = ?",[id]);
        
        res.json({
            ok: true,
            message: "Paciente eliminado con éxito"
        })
    }

    async update(req:Request, res:Response){
        const {id}=req.params;
        await pool.query("UPDATE paciente set ? WHERE idPaciente = ?",[req.body,id]);
        
        res.json({
            ok: true,
            message: "Paciente actualizado con éxito"
        })
    }
}



const pacienteController = new PacienteController();

export default pacienteController;