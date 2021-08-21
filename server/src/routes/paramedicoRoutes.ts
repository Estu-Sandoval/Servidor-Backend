import { Router } from "express";
import paramedicoController from "../controllers/paramedicoControllers";

class ParamedicoRoutes{
    route: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.route.get("/:legajo",paramedicoController.getParamedico);
    }
}

const paramedicoRoutes = new ParamedicoRoutes()

export default paramedicoRoutes.route;