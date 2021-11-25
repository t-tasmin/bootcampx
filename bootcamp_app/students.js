//node-postgres is a library that allows us to connect to our PostgreSQL database, directly from our node applications.
const {Pool} = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv ;
let cohortName= args[2]; 
let limit = args[3];
const values = [`${cohortName}%`, limit];

const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;

pool.query(queryString, values)
.then(res => {
  for (let i of res.rows){
     console.log(`${i.name} has an id of ${i.student_id} and in cohort ${i.cohort}`);
  }  
})
.catch(err => console.error('query error', err.stack));