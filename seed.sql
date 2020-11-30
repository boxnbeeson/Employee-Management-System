INSERT INTO departments (department_name)
VALUES  ('Corporate'), 
        ('Management'), 
        ('Software Development'), 
        ('Accounting'), 
        ('Human Resources');

INSERT INTO roles (role_title, role_salary, department_id)
VALUES  ('CEO', 200000, 1),
        ('Lead Manager', 100000, 2),
        ('Project Manager', 75000, 2),
        ('Lead Software Developer', 150000, 3),
        ('Software Developer', 90000, 3),
        ('Software Intern', 60000, 3),
        ('Accounting Manager', 75000, 2),
        ('Accountant', 70000, 4),
        ('Billing clerk', 60000, 4),
        ('Bookkeeper', 45000, 4),
        ('Human Resources Manager', 70000, 2),
        ('Human Resources Analyst', 60000, 5),
        ('Staffing Specialist', 40000, 5),
        ('HR Assistant', 34000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_number, manager_id)
VALUES  ('Valorie', 'Maness', 1, NULL, NULL),
        ('Rikki', 'Hilliard', 2, 1, NULL),
        ('Armandina', 'Sanford', 3, 2, 1),
        ('Conception', 'Richter', 4, NULL, 2),
        ('Rosalee', 'Breen', 5, NULL, 2),
        ('Babara', 'Montano', 6, NULL, 2),
        ('Trenton', 'Snell', 7, 3, 1),
        ('Bernardo', 'Banuelos', 8, NULL, 3),
        ('Enola', 'Thorne', 9, NULL, 3),
        ('Tonda', 'Binder', 10, NULL, 3),
        ('Madie', 'Rosen', 11, 4, 1),
        ('Lynelle', 'Eckert', 12, NULL, 4),
        ('Sibyl', 'Kearney', 13, NULL, 4),
        ('Anissa', 'Bello', 14, NULL, 4);
        

        