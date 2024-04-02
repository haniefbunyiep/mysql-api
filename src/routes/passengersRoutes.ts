import { Router } from 'express';
import {
  findPassenger,
  findPassengerSurvive,
  totalSurvive,
} from './../controllers/passengersController';

const router = Router();

router.get('/', findPassenger);
router.get('/survived', findPassengerSurvive);
router.get('/survived/sex', totalSurvive);

export default router;
