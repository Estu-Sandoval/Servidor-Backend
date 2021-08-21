"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
var cuentaRoutes_1 = __importDefault(require("./routes/cuentaRoutes"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var historialRoutes_1 = __importDefault(require("./routes/historialRoutes"));
var paramedicoRoutes_1 = __importDefault(require("./routes/paramedicoRoutes"));
var atiendeRoutes_1 = __importDefault(require("./routes/atiendeRoutes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default("dev"));
    };
    Server.prototype.routes = function () {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/pacientes", pacienteRoutes_1.default);
        this.app.use("/api/cuentas", cuentaRoutes_1.default);
        this.app.use("/api/historial", historialRoutes_1.default);
        this.app.use("/api/paramedico", paramedicoRoutes_1.default);
        this.app.use("/api/atiende", atiendeRoutes_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("Servidor corriendo en el puerto", _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
