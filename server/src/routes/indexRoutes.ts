import { Router } from "express";

class IndexRoutes{
    route: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.route.get("/",(req,res)=>{
            res.send("<center><img src='https://imgur.com/m5j4jzE.png' width='600' height='450'></img></center>");
        })
    }
}

const indexRoutes = new IndexRoutes()

export default indexRoutes.route;