"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pacienteControllers_1 = __importDefault(require("../controllers/pacienteControllers"));
var PacienteRoutes = /** @class */ (function () {
    function PacienteRoutes() {
        this.route = express_1.Router();
        this.config();
    }
    PacienteRoutes.prototype.config = function () {
        this.route.get("/:dni", pacienteControllers_1.default.getPacientes);
        this.route.post("/", pacienteControllers_1.default.create);
        this.route.delete("/:id", pacienteControllers_1.default.delete);
        this.route.put("/:id", pacienteControllers_1.default.update);
    };
    return PacienteRoutes;
}());
var pacienteRoutes = new PacienteRoutes();
exports.default = pacienteRoutes.route;
