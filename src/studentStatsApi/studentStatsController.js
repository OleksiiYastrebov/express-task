class StudentStatsController {
   static studentStatsArr;

   static getStudentStats = (req, res) => {
      res.json(this.studentStatsArr);
   };

   static getWorstStudent = (req, res) => {
      let lowestSum = Infinity;
      let studentWithLowestSum = '';

      this.studentStatsArr.forEach((student) => {
         const sum = student.scores.reduce((acc, curr) => acc + curr.score, 0);

         if (sum < lowestSum) {
            lowestSum = sum;
            studentWithLowestSum = student.name;
         }
      });

      res.json({ studentWithLowestSum });
   };
}

export default StudentStatsController;
