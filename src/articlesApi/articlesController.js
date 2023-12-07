import ServerErr from '../utils/ServerErr.js';

class ArticlesController {
   static articlesArr;

   static getArticles = (req, res) => {
      res.json(this.articlesArr);
   };

   static getArticle = (req, res) => {
      const article = this.searchArticleByName(req.params.name);
      if (!article) res.sendStatus(404);
      res.json(article);
   }

   static postArticle = (req, res) => {
      const isExists = this.searchArticleByName(req.body.name);
      if (isExists) {
         throw new ServerErr(400, 'Article with such name already exists');
      }
      this.articlesArr.push(req.body);
      res.sendStatus(204);
   };

   static putArticle = (req, res) => {
      const searchedArticle = this.searchArticleByName(req.params.name);
      const articleData = req.body;
      if (searchedArticle) {
         this.articlesArr = this.articlesArr.filter(
            (article) => article.name !== searchedArticle.name
         );
         this.articlesArr.push(articleData);
      } else {
         this.articlesArr.push(req.body);
      }
      res.sendStatus(204);
   };

   // utils
   static searchArticleByName(name) {
      return this.articlesArr.find((article) => article.name === name);
   }
}

export default ArticlesController;
