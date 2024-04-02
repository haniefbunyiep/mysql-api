import db from './../connection';
import util from 'util';

const query: any = util.promisify(db.query).bind(db);

export const findPassengerQuery = async () => {
  return await query(`SELECT * FROM passengers`);
};

export const findNameQuery = async (name: any) => {
  return await query(`SELECT * FROM passengers WHERE name LIKE ?`, [
    `%${name}%`,
  ]);
};
export const findPassengerSurviveQuery = async () => {
  return await await query(
    `select count(Survived) as Total_Survived from passengers where Survived = 1`
  );
};

export const getPclassSurvivedQuery = async (pclass: any) => {
  return query(
    `SELECT COUNT( Pclass ), Survived, Pclass  FROM passengers p
  WHERE Pclass = ?
  Group by Survived`,
    [`${pclass}`]
  );
};

export const TotalSurvivedQuery = async () => {
  return await query(`SELECT COUNT(Survived) as Total_Survive, Sex FROM passengers p
  WHERE Survived = 1
  GROUP BY Sex`);
};
