SELECT students.name , count(assistance_requests.*) AS total_assistances
FROM students
JOIN assistance_requests ON assistance_requests.student_id = students.id
WHERE students.name = 'Elliot Dickinson' 
GROUP BY students.name;