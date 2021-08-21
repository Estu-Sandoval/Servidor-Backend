"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cuentaControllers_1 = __importDefault(require("../controllers/cuentaControllers"));
var CuentaRoutes = /** @class */ (function () {
    function CuentaRoutes() {
        this.route = express_1.Router();
        this.config();
    }
    CuentaRoutes.prototype.config = function () {
        this.route.get("/:usuario", cuentaControllers_1.default.getCuenta);
        this.route.post("/", cuentaControllers_1.default.createCuenta);
        //this.route.delete("/:id",pacienteController.delete);
        //this.route.put("/:id",pacienteController.update);
    };
    return CuentaRoutes;
}());
var cuentaRoutes = new CuentaRoutes();
exports.default = cuentaRoutes.route;
