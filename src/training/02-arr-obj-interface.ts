let skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string,
    life: number,
    skills: string[],
    city?: string
}

const character: Character = {
    name: 'John',
    life: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

character.city = "LA";

console.table(character);