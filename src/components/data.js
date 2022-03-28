import antonio from '../img/antonio.jpg'
import martina from '../img/martina.png'

const studentsData = [
    {
        id: 1,
        img: martina,
        name: 'Martina',
        surname: 'Mucci',
        voti: [7,8,9],
    },
    {
        id: 2,
        img: antonio,
        name: 'Antonio',
        surname: 'Ciaccia',
        voti: [10,8,9],
    },
];

export default studentsData

export function studentData(id){
    return studentsData.find(
        (studentData)=>studentData.id === id
    );
}