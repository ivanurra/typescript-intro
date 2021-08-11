
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Aleluya',
    detalles: {
        autor: 'Yadur',
        anio: 1990
    }
}

const { volumen, segundo, cancion, detalles:{autor: nombreAutor, anio} } = reproductor;

// console.log(volumen);
// console.log(segundo);
// console.log(cancion);
// console.log(nombreAutor);
// console.log(anio);

const dbz: string[] = ['One', 'Two', 'Three']

const [x, y, z] = dbz;

console.log(x);
console.log(y);
console.log(z);