"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passengersController_1 = require("./../controllers/passengersController");
const router = (0, express_1.Router)();
router.get('/', passengersController_1.findPassenger);
router.get('/survived', passengersController_1.findPassengerSurvive);
router.get('/survived/sex', passengersController_1.totalSurvive);
exports.default = router;
