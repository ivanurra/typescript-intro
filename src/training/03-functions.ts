// const suma = (a: number, b: number): number => a + b;

// const suma = (a: number, b?: number, c: number = 2): number => a + c;

// console.log(suma(5,3,4));

interface Persona {
    nombre: string,
    pv: number,
    verSalud: () => void
}

const salvar = (persona: Persona, curar: number ): void => {
    persona.pv += curar;
}

const nuevaPersona: Persona = {
    nombre: 'Tom',
    pv: 100,
    verSalud() {
        console.log( `${this.nombre} tiene una salud:`, this.pv)
    }
};

salvar(nuevaPersona, 10);

nuevaPersona.verSalud();