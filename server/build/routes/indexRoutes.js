"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.route = express_1.Router();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        this.route.get("/", function (req, res) {
            res.send("<center><img src='https://imgur.com/m5j4jzE.png' width='600' height='450'></img></center>");
        });
    };
    return IndexRoutes;
}());
var indexRoutes = new IndexRoutes();
exports.default = indexRoutes.route;
