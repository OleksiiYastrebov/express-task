This is the simple api which used for CRUD operation with: user documents, student statistics, articles

userDocsModel = {
   firstName: string,
   lastName: string,
   email: string,
   password: string,
   age: number,
   address: {
      street: string,
      city: string,
      state: string,
      zip: string,
      country: string,
   },
   createdAt: Date,
   tags: Array,
};

studentStatsModel = {
   name: string,
   scores: [
      {
         score: number,
         type: string
      }
   ]
}

articleModel = {
   name: string,
   description: string,
   type: string,
   tags: Array,
};

UserDocs Routes:

GET    /user           returns json userDocsModel[]   
GET    /user/:email    returns json userDocsModel
POST   /user           returns statusCode 204 
PUT    /user/:email    returns statusCode 204
DELETE /user/:email    returns statusCode 204

StudentStats Routes:

GET    /student-stat          returns json studentStatsModel[]
GET    /student-stat/worst    returns json studentStatsModel.name

Article Router:

GET   /article          returns json articleModel[]
GET   /article/:name    returns json articleModel
POST  /article          returns statusCode 204
PUT   /article/:name    returns statusCode 204