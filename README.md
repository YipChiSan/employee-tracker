# EMPLOYEE-TRACKER

## Project Description

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

GIVEN a command-line application that accepts user input

1. WHEN I start the application
   THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
2. WHEN I choose to view all departments
   THEN I am presented with a formatted table showing department names and department ids
3. WHEN I choose to view all roles
   THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
4. WHEN I choose to view all employees
   THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
5. WHEN I choose to add a department
   THEN I am prompted to enter the name of the department and that department is added to the database
6. WHEN I choose to add a role
   THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
7. WHEN I choose to add an employee
   THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
8. WHEN I choose to update an employee role
   THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation

run

```
mysql source schema.sql
mysql source seeds.sql
```

on mysql server

run

```
npm install
```

on the root folder. Then run

```
node server.js
```

## Video

You can watch a video for demonstrating how this app is used on here.
https://drive.google.com/file/d/1YWUozd43uS0TFfXMOBrKYTE-WvjoXnhZ/view
