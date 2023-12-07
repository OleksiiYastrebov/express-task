import express from 'express';

import { resolve } from 'path';
import fs from 'fs/promises';

import { errorHandler, logReqData } from './middleware/middlewares.js';
import userDocsRouter from './userDocsApi/userDocsRouter.js';
import UserDocsController from './userDocsApi/userDocsController.js';
import studentStatsRouter from './studentStatsApi/studentStatsRouter.js';
import StudentStatsController from './studentStatsApi/studentStatsController.js';
import articleRouter from './articlesApi/articlesRouter.js';
import ArticlesController from './articlesApi/articlesController.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(logReqData);

app.use('/user', userDocsRouter);
app.use('/student-stat', studentStatsRouter);
app.use('/article', articleRouter);

app.use(errorHandler);

app.listen(port, async () => {
   const userDocArr = JSON.parse(
      await fs.readFile(resolve('./data/userDocs.json'), 'utf-8')
   );
   const studentStatsArr = JSON.parse(
      await fs.readFile(resolve('./data/studentStats.json'), 'utf-8')
   );
   const articlesArr = JSON.parse(
      await fs.readFile(resolve('./data/articles.json'), 'utf-8')
   );

   UserDocsController.userDocsArr = userDocArr;
   StudentStatsController.studentStatsArr = studentStatsArr;
   ArticlesController.articlesArr = articlesArr;

   console.log(`Server running on port: ${port}`);
});
