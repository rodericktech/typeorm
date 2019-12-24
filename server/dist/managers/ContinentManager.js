"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Continent_1 = __importDefault(require("../models/Continent"));
const TypeOrmRepository_1 = __importDefault(require("../repositories/TypeOrmRepository"));
class ContinentManager {
    constructor(dbConn) {
        this.dbConn = null;
        this.repo = null;
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            return this.repo.findAll();
        });
        if (dbConn) {
            this.dbConn = dbConn;
        }
        if (dbConn && this.repo === null) {
            this.repo = new TypeOrmRepository_1.default(this.dbConn, Continent_1.default);
        }
    }
}
exports.default = ContinentManager;
//# sourceMappingURL=ContinentManager.js.map