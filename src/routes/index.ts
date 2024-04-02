import express, { Router } from 'express';
import PassengersRouter from './passengersRoutes';

const router = Router();
router.use(express.json());

router.use('/passengers', PassengersRouter);

export default router;
