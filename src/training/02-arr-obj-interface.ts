let habilidades: string[] = ['Yoga', 'Meditacion'];

interface Personaje {
    nombre: string,
    edad: number,
    hobbies: string[],
    sexo?: string
}

const personaje: Personaje = {
    nombre: 'Silvana',
    edad: 32,
    hobbies: ['Cantar', 'Leer', 'Tocar el piano']
};

personaje.sexo = 'mujer';

console.table(personaje);