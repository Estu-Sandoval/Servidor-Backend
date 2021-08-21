import { Router } from "express";
import pacienteController from "../controllers/pacienteControllers";

class PacienteRoutes{
    route: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.route.get("/:dni",pacienteController.getPacientes);
        this.route.post("/",pacienteController.create);
        this.route.delete("/:id",pacienteController.delete);
        this.route.put("/:id",pacienteController.update);
    }
}

const pacienteRoutes = new PacienteRoutes()

export default pacienteRoutes.route;