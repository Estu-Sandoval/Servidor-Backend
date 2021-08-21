import {Request, Response} from "express";
import pool from "../database";
class CuentaController{
    async getCuenta(req: Request, res: Response){
        const {usuario}=req.params;
        const cuentas = await pool.query("SELECT * FROM cuenta WHERE usuario = ?",[usuario]);
        res.json(cuentas);
    }

    async createCuenta(req:Request,res:Response){
        const {idParamedico, usuario, contrasena, permisos} = req.body;

        await pool.query("INSERT INTO cuenta set ?",[req.body]);

        res.json({
            ok: true,
            message: "Cuenta cargada con éxito"
        })
    }
}


const cuentaController = new CuentaController();

export default cuentaController;