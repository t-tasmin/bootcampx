SELECT cohorts.name AS cohort, count(*) AS student_count
FROM cohorts 
JOIN assignement_submissions
ON cohorts.id=students.cohort_id
GROUP BY cohort_name
HAVING count(*)>=18
ORDER BY student_count;