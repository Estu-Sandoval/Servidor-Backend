"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var paramedicoControllers_1 = __importDefault(require("../controllers/paramedicoControllers"));
var ParamedicoRoutes = /** @class */ (function () {
    function ParamedicoRoutes() {
        this.route = express_1.Router();
        this.config();
    }
    ParamedicoRoutes.prototype.config = function () {
        this.route.get("/:legajo", paramedicoControllers_1.default.getParamedico);
    };
    return ParamedicoRoutes;
}());
var paramedicoRoutes = new ParamedicoRoutes();
exports.default = paramedicoRoutes.route;
