SELECT SUM(assignment_submissions.duration)
FROM students
JOIN cohorts ON cohorts.id= students.cohort_id
JOIN assignment_submissions ON students.id= assignment_submissions.student_id
WHERE cohorts.name='FEB12';
