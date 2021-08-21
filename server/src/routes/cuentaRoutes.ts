import { Router } from "express";
import cuentaController from "../controllers/cuentaControllers";

class CuentaRoutes{
    route: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.route.get("/:usuario",cuentaController.getCuenta);
        this.route.post("/",cuentaController.createCuenta);
        //this.route.delete("/:id",pacienteController.delete);
        //this.route.put("/:id",pacienteController.update);
    }
}

const cuentaRoutes = new CuentaRoutes()

export default cuentaRoutes.route;