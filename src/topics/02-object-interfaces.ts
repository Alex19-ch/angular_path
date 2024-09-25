


//arreglo de tipo (:string) de habilidades 
const skills: string[] = ['Bash', 'Healing', 'Damage'];

const strider = {
 name:'Alex',
 hp:123,
 skills:['hp', 'damage']
}

//Interfaces para asingar a valor varios tipos de datos
interface Habilities{
    name:string,
    hp:number,
    skills:string[],
    hometown?:boolean,
}

const arrayHeroes: Habilities = {
    name: 'Alex',
    hp: 1200,
    skills: ['Healing', 'Damage'],
    // hometown: true
}

console.log(skills, arrayHeroes);

export{};