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
("Sales Lead", 70000, 1),
("Account Manager", 45000, 1),
("Lead Engineer", 80000, 2),
("Engineer", 60000, 2),
("Accounts Payable", 45000, 3),
("Accounts Receivable", 45000, 3),
("Finance Manager", 80000, 3),
("Lawyer", 80000, 4),
("Manager", 75000, 4);

INSERT INTO employees
(first_name,
last_name,
role_id,
manager_id)
VALUES
("Brian", "Whitman", 1, 1),
("Kren", "Witless", 2, 1),
("Alistair", "Rowden", 3, 2),
("Bob", "Builder", 4, 2),
("Paul", "Payspeople", 5, 3),
("Debbie", "Debtcollector", 6, 3),
("Eugene", "Krabs", 7, 3),
("Document", "McLegalson", 8, 4),
("Bossy", "Inchargenson", 9);


