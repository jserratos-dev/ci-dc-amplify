// - Q1: Define a UserInterface with id: string, name: string, age: number and method getMessage that returns string.
// - Q2: Write a usage example of this interface

export interface User {
    id: string;
    name: string;
    age: number;
    getMessage(): string;
}

const user: User  = {
    id: '1',
    name: 'Alberto',
    age: 20,
    getMessage() {
        return `${ this.id } - ${ this.name } - ${ this.age }` 
    }
}



// Q1: How to define an array in Typescript? Show all ways 
// Q2: How to define an array of numbers and strings? 

const fruit: string[] = ['pear', 'banana'];
const fruit2: Array<string> = ['apple','coconout']

 
