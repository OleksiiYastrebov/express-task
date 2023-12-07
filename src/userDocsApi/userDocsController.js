import ServerErr from '../utils/ServerErr.js';

class UserDocsController {
   static userDocsArr;

   static getAllUsers = (req, res) => {
      res.json(this.userDocsArr);
   };

   static getUserByEmail = (req, res) => {
      const userDoc = this.searchUserByEmail(req.params.email);
      if (!userDoc) res.sendStatus(404);
      res.json(userDoc);
   };

   static postUser = (req, res) => {
      const isExists = this.searchUserByEmail(req.body.email);
      if (isExists) {
         throw new ServerErr(400, 'User with such email already exists');
      }
      this.userDocsArr.push(req.body);
      res.sendStatus(204);
   };

   static putUser = (req, res) => {
      const emailParam = req.params.email;
      if (emailParam !== req.body.email) {
         throw new ServerErr(400, 'Email param must be equal email property');
      }
      const searchedUser = this.searchUserByEmail(emailParam);
      const userData = req.body;
      if (searchedUser) {
         this.userDocsArr = this.userDocsArr.filter(
            (user) => user.email !== searchedUser.email
         );
         this.userDocsArr.push(userData);
      } else {
         this.userDocsArr.push(req.body);
      }
      res.sendStatus(204);
   };

   static deleteUser = (req, res) => {
      const email = req.params.email;
      const isExists = this.searchUserByEmail(email);
      if (!isExists) throw new ServerErr(404, 'No such user');
      this.userDocsArr = this.userDocsArr.filter((user) => user.email !== email);
      res.sendStatus(204);
   };

   // utils
   static searchUserByEmail(email) {
      return this.userDocsArr.find((userObj) => userObj.email === email);
   }
}

export default UserDocsController;
