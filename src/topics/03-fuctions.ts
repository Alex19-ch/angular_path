
//:void() -> no retorna nada
function addNumbers(a:number, b:number){

return a + b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2){
    return firstNumber * base;
}

interface Character {
    name:string;
    hp:number;
    showHP: () => void;
}

const healCharacter = (character:Character, amount:number) => {
    
   if(character.hp > 500){
       character.hp += amount; 
   }else{
    console.log('Puntos de vida maximos');
    
   }
}

const strider: Character = {
    name:'Strider',
    hp: 100,
    showHP() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 1000);
healCharacter(strider, 1);
healCharacter(strider, 56);
strider.showHP();



// const resultArrow = addNumbersArrow(54, 13);
// const result = addNumbers(1,2);
// const resultMultiply: number = multiply(10);

// console.log({resultado: result, 
//              anotherResult: resultArrow,
//              multiplicacion: resultMultiply});

export{};