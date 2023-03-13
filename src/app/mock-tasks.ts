//Emula una base de datos (esta logica en la vida real esta soportada por MySQL x ej), es un arreglo de las tareas
import { Task } from "./Task";
export const TASKS: Task[] = [
    {
        id: 1,
        text: "Terminar nuestro primer modulo de Angular",
        day: 'Agosto 5 a las 12:00',
        reminder: true  //recordatorio, puede mandar mails como recordatorio
    },
    {
        id: 2,
        text: "Hacer las compras para la cena",
        day: 'Agosto 5 a las 17:00',
        reminder: true
    },
    {
        id: 3,
        text: "Investigar sobre Boostrap",
        day: 'Agosto 5 a las 19:00',
        reminder: false
    },
    {
        id: 4,
        text: "Leer mi libro favorito",
        day: 'Agosto 5 a las 21:00',
        reminder: false
    },
]