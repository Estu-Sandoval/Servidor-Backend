"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_mysql_1 = require("promise-mysql");
var keys_1 = __importDefault(require("./keys"));
var pool = promise_mysql_1.createPool(keys_1.default.database);
pool.getConnection()
    .then(function (connection) {
    pool.releaseConnection(connection);
    console.log("DB is connects");
});
exports.default = pool;
