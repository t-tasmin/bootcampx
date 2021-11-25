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
const values = [cohortName];

pool.query(`
SELECT DISTINCT(teachers.name) as teacher, cohorts.name as cohort
FROM cohorts
JOIN students ON cohorts.id=students.cohort_id
JOIN assistance_requests ON assistance_requests.student_id = students.id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
WHERE cohorts.name = $1
ORDER BY teacher;`, values)


.then(res => {
  for (let i of res.rows){
     console.log(`${i.cohort}: ${i.teacher}`);
  }  
})
.catch(err => console.error('query error', err.stack));