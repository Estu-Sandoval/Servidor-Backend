import { Router } from "express";
import historialController from "../controllers/historialControllers";

class HistorialRoutes{
    route: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.route.get("/:dni",historialController.getHistorial);
        //this.route.post("/",pacienteController.create);
        //this.route.delete("/:id",pacienteController.delete);
        //this.route.put("/:id",pacienteController.update);
    }
}

const historialRoutes = new HistorialRoutes()

export default historialRoutes.route;