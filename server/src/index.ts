import express, { Application } from "express";
import indexRoutes from "./routes/indexRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";
import cuentaRoutes from "./routes/cuentaRoutes";
import cors from "cors";
import morgan from "morgan";
import historialRoutes from "./routes/historialRoutes";
import paramedicoRoutes from "./routes/paramedicoRoutes";
import atiendeRoutes from "./routes/atiendeRoutes"

class Server{
    public app: Application
    constructor(){
        this.app = express();
        this.config();
        this.routes();

    }
    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan("dev"));

    }

    routes():void{
        this.app.use("/",indexRoutes);
        this.app.use("/api/pacientes",pacienteRoutes);
        this.app.use("/api/cuentas",cuentaRoutes);
        this.app.use("/api/historial", historialRoutes);
        this.app.use("/api/paramedico", paramedicoRoutes)
        this.app.use("/api/atiende", atiendeRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("Servidor corriendo en el puerto",this.app.get('port'));
        })
    }
}

const server = new Server();

server.start()

