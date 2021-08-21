"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var historialControllers_1 = __importDefault(require("../controllers/historialControllers"));
var HistorialRoutes = /** @class */ (function () {
    function HistorialRoutes() {
        this.route = express_1.Router();
        this.config();
    }
    HistorialRoutes.prototype.config = function () {
        this.route.get("/:dni", historialControllers_1.default.getHistorial);
        //this.route.post("/",pacienteController.create);
        //this.route.delete("/:id",pacienteController.delete);
        //this.route.put("/:id",pacienteController.update);
    };
    return HistorialRoutes;
}());
var historialRoutes = new HistorialRoutes();
exports.default = historialRoutes.route;
