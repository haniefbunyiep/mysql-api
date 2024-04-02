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
exports.TotalSurvivedQuery = exports.getPclassSurvivedQuery = exports.findPassengerSurviveQuery = exports.findNameQuery = exports.findPassengerQuery = void 0;
const connection_1 = __importDefault(require("./../connection"));
const util_1 = __importDefault(require("util"));
const query = util_1.default.promisify(connection_1.default.query).bind(connection_1.default);
const findPassengerQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield query(`SELECT * FROM passengers`);
});
exports.findPassengerQuery = findPassengerQuery;
const findNameQuery = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield query(`SELECT * FROM passengers WHERE name LIKE ?`, [
        `%${name}%`,
    ]);
});
exports.findNameQuery = findNameQuery;
const findPassengerSurviveQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield yield query(`select count(Survived) as Total_Survived from passengers where Survived = 1`);
});
exports.findPassengerSurviveQuery = findPassengerSurviveQuery;
const getPclassSurvivedQuery = (pclass) => __awaiter(void 0, void 0, void 0, function* () {
    return query(`SELECT COUNT( Pclass ), Survived, Pclass  FROM passengers p
  WHERE Pclass = ?
  Group by Survived`, [`${pclass}`]);
});
exports.getPclassSurvivedQuery = getPclassSurvivedQuery;
const TotalSurvivedQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield query(`SELECT COUNT(Survived) as Total_Survive, Sex FROM passengers p
  WHERE Survived = 1
  GROUP BY Sex`);
});
exports.TotalSurvivedQuery = TotalSurvivedQuery;
