INSERT INTO department (id, name)
VALUES  (0, "Department A"),
        (1, "Department B"),
        (2, "Department C");
        

INSERT INTO role_table (id, title, salary, department_id)
VALUES  (0, "Role A", 100, 0),
        (1, "Role B", 200, 0),
        (2, "Role C", 300, 0),
        (3, "Role D", 300, 1),
        (4, "Role E", 400, 1),
        (5, "Role F", 300, 1),
        (6, "Role G", 300, 2),
        (7, "Role H", 300, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (0, "Qwe", "Wer", 0, NULL),
        (1, "ERT", "RTY", 0, 0),
        (2, "TYU", "YUI", 1, 0),
        (3, "UIO", "IOP", 2, 0),
        (4, "OPA", "PAS", 3, 1),
        (5, "ASD", "SDF", 4, 1),
        (6, "DFG", "FGH", 5, 1),
        (7, "GHJ", "HJK", 5, 2),
        (8, "JKL", "KLZ", 6, 2),
        (9, "LZX", "ZXC", 7, 2),