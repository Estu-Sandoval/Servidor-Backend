import { Router } from "express";
import atiendeController from "../controllers/atiendeControllers"

class AtiendeRoutes{
    route: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.route.post("/",atiendeController.createMotivo);
        //this.route.delete("/:id",pacienteController.delete);
        //this.route.put("/:id",pacienteController.update);
    }
}

const atiendeRoutes = new AtiendeRoutes()

export default atiendeRoutes.route;