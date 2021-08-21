"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var atiendeControllers_1 = __importDefault(require("../controllers/atiendeControllers"));
var AtiendeRoutes = /** @class */ (function () {
    function AtiendeRoutes() {
        this.route = express_1.Router();
        this.config();
    }
    AtiendeRoutes.prototype.config = function () {
        this.route.post("/", atiendeControllers_1.default.createMotivo);
        //this.route.delete("/:id",pacienteController.delete);
        //this.route.put("/:id",pacienteController.update);
    };
    return AtiendeRoutes;
}());
var atiendeRoutes = new AtiendeRoutes();
exports.default = atiendeRoutes.route;
