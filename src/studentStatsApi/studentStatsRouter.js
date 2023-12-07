import { Router } from 'express';

import StudentStatsController from './studentStatsController.js';

const studentStatsRouter = Router();

studentStatsRouter.get('/', StudentStatsController.getStudentStats);
studentStatsRouter.get('/worst', StudentStatsController.getWorstStudent);

export default studentStatsRouter