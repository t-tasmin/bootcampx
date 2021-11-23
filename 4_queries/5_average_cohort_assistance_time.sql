SELECT cohorts.name AS cohort,
AVG(assistance_requests.completed_at - assistance_requests.started_at) AS average_assistance_time 
FROM assistance_requests
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY cohort
ORDER BY average_assistance_time;
