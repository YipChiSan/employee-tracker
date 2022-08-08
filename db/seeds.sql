INSERT INTO department (name)
VALUES  ("Department A"),
        ("Department B"),
        ("Department C");
        

INSERT INTO role_table (title, salary, department_id)
VALUES  ("Role A", 100, 1),
        ("Role B", 200, 1),
        ("Role C", 300, 1),
        ("Role D", 300, 2),
        ("Role E", 400, 2),
        ("Role F", 300, 2),
        ("Role G", 300, 3),
        ("Role H", 300, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Qwe", "Wer", 1, NULL),
        ("ERT", "RTY", 1, 1),
        ("TYU", "YUI", 2, 1),
        ("UIO", "IOP", 3, 1),
        ("OPA", "PAS", 4, 2),
        ("ASD", "SDF", 5, 2),
        ("DFG", "FGH", 6, 2),
        ("GHJ", "HJK", 6, 3),
        ("JKL", "KLZ", 7, 3),
        ("LZX", "ZXC", 8, 3);