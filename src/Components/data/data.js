let students = [
    {
        "id": 1,
        "name": "Antonio",
        "surname": "Ciaccia",
        "voti": [4, 6, 7, 8]
    },
    {
        "id": 2,
        "name": "Pippo",
        "surname": "Baudo",
        "voti": [4, 8, 3, 10]
    },
    {
        "id": 3,
        "name": "Alfonso",
        "surname": "Signorini",
        "voti": [2, 6, 4, 9]
    },
    {
        "id": 4,
        "name": "Rocky",
        "surname": "Balboa",
        "voti": [7, 8, 6, 9]
    }
];

export function getStudents() {
    return students;
}

export function getStudent(id) {
    return students.find(
        (student) => student.id === id
    );
}