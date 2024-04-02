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
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalSurvive = exports.findPassengerSurvive = exports.findPassenger = void 0;
const passengersService_1 = require("../services/passengersService");
const findPassenger = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (name) {
            const findName = yield (0, passengersService_1.findNameQuery)(name);
            res.send(findName);
        }
        else {
            const findPassenger = yield (0, passengersService_1.findPassengerQuery)();
            res.status(200).send({
                error: false,
                message: 'Success',
                data: findPassenger,
            });
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
exports.findPassenger = findPassenger;
const findPassengerSurvive = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pclass } = req.query;
    try {
        const getSurvivePassengers = yield (0, passengersService_1.findPassengerSurviveQuery)();
        if (pclass) {
            const getPclassSurvived = yield (0, passengersService_1.getPclassSurvivedQuery)(pclass);
            res.send(getPclassSurvived);
        }
        else {
            res.send(getSurvivePassengers);
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
exports.findPassengerSurvive = findPassengerSurvive;
const totalSurvive = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalSurvive = yield (0, passengersService_1.TotalSurvivedQuery)();
        res.send(totalSurvive);
    }
    catch (error) {
        res.send(error.message);
    }
});
exports.totalSurvive = totalSurvive;
