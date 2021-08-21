"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var clienteControllers_1 = __importDefault(require("../controllers/clienteControllers"));
var ClienteRoutes = /** @class */ (function () {
    function ClienteRoutes() {
        this.route = express_1.Router();
        this.config();
    }
    ClienteRoutes.prototype.config = function () {
        this.route.get("/", clienteControllers_1.default.getClientes);
        this.route.post("/", clienteControllers_1.default.create);
        this.route.delete("/:id", clienteControllers_1.default.delete);
        this.route.put("/:id", clienteControllers_1.default.update);
    };
    return ClienteRoutes;
}());
var clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.route;
