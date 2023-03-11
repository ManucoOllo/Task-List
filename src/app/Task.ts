//Interface de la "base de datos artificial"
export interface Task {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
}