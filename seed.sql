use tracker_DB;

INSERT INTO department
(department_name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO roleTable
(title,
salary,
department_id)
VALUES
("Sales Lead", 50000, 1),
("Engineer", 70000, 2),
("Accounts Payable", 45000, 3),
("Lawyer", 80000, 4);

INSERT INTO employees
(first_name,
last_name,
role_id,
manager_id)
VALUES
("Brian", "Whitman", 1, 1),
("Alistair", "Rowden", 2, 2),
("Bill", "Bryson", 3, 3);


