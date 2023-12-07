import { Router } from 'express';

import ArticlesController from './articlesController.js';
import { validateArticleBody } from '../middleware/middlewares.js';

const articleRouter = Router();

articleRouter.get('/', ArticlesController.getArticles);
articleRouter.get('/:name', ArticlesController.getArticle);
articleRouter.post('/', validateArticleBody, ArticlesController.postArticle);
articleRouter.put('/:name', validateArticleBody, ArticlesController.putArticle);

export default articleRouter;
