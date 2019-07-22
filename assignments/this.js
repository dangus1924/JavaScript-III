/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the Global context. It's when you call the function from the defualt window "consoloe.log(this)".
* 2. Implicit Binding would be the object standing before the dot
* 3. New Binding is when a object is created and referenced by "this" variable, inheriting the prototype of the function.
* 4. Expiicit Binding is when you force a function call to use a certain object for "this" binding without putting a property function reference on the object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const grapes = { 
    kind: "Red Grapes",
    size: "Small",
    amount: 10,
    eat: function() {
        return `${this.size} ${this.kind} comes in a bundle of ${this.amount}.`
    }
} 

// Principle 3

// code example for New Binding
function foo() {
    this.name = 'David';
        this.say = function() {
            return "I am" + this.name;
        };
}
const name = 'Darren';
const result = new foo();
console.log(result.name);
// Principle 4

// code example for Explicit Binding
let introduction = (language, code, food) => {
    console.log(`My name is ${myName.name}, and I can speak ${language}, program in ${code}, and I like ${food}.`);
}

let myName = {
    name: "darren",
    age: 25,
    introduction: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

let likes = ['picture', 'Javascript', 'teriyaki chicken'];

introduction.apply(myName, likes);
