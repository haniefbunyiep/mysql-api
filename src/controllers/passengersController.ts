import { Request, Response } from 'express';
import {
  findPassengerQuery,
  findPassengerSurviveQuery,
  getPclassSurvivedQuery,
  TotalSurvivedQuery,
  findNameQuery,
} from '../services/passengersService';

export const findPassenger = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;

    if (name) {
      const findName = await findNameQuery(name);
      res.send(findName);
    } else {
      const findPassenger = await findPassengerQuery();

      res.status(200).send({
        error: false,
        message: 'Success',
        data: findPassenger,
      });
    }
  } catch (error: any) {
    res.send(error.message);
  }
};

export const findPassengerSurvive = async (req: Request, res: Response) => {
  const { pclass } = req.query;

  try {
    const getSurvivePassengers = await findPassengerSurviveQuery();

    if (pclass) {
      const getPclassSurvived = await getPclassSurvivedQuery(pclass);
      res.send(getPclassSurvived);
    } else {
      res.send(getSurvivePassengers);
    }
  } catch (error: any) {
    res.send(error.message);
  }
};

export const totalSurvive = async (req: Request, res: Response) => {
  try {
    const totalSurvive = await TotalSurvivedQuery();

    res.send(totalSurvive);
  } catch (error: any) {
    res.send(error.message);
  }
};
