import ServerErr from '../utils/ServerErr.js';
import { userDocsModel } from '../userDocsApi/userDocsModel.js';
import { articleModel } from '../articlesApi/articleModel.js';

function logReqData(req, res, next) {
   console.log(
      `Endpoint:${req.url} Method:${req.method} Params: ${JSON.stringify(
         req.params
      )} Body: ${JSON.stringify(req.body)}`
   );
   next();
}

function validateUserDocsBody(req, res, next) {
   if (!req.body) {
      throw new ServerErr(400, 'Missing body part of request');
   }

   const propBody = Object.keys(req.body);
   const propModel = Object.keys(userDocsModel);

   if (propBody.length !== propModel.length) {
      throw new ServerErr(400, 'Invalid body');
   }

   for (const property of propModel) {
      if (typeof req.body[property] !== typeof userDocsModel[property]) {
         throw new ServerErr(400, 'Invalid body');
      }
   }
   next();
}

function validateArticleBody(req, res, next) {
   if (!req.body) {
      throw new ServerErr(400, 'Missing body part of request');
   }

   const propBody = Object.keys(req.body);
   const propModel = Object.keys(articleModel);

   console.log(propBody, propModel);

   if (propBody.length !== propModel.length) {
      throw new ServerErr(400, 'Invalid body');
   }

   for (const property of propModel) {
      if (typeof req.body[property] !== typeof articleModel[property]) {
         throw new ServerErr(400, 'Invalid body');
      }
   }
   next();
}

function errorHandler(err, req, res, next) {
   console.log(err);
   res.status(err.status).json({ message: err.message });
}

export { validateUserDocsBody, errorHandler, validateArticleBody, logReqData };
