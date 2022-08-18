
'use strict'

// 1 - Inserir dado
localStorage.setItem("name", "Usuario");

// 2 - Restart sem perder dados


// 3 - Resgatar item
const name = localStorage.getItem("name");
console.log(name);

// 4 - Resgatar item que não existe
const lastName = localStorage.getItem("lastName");
console.log(lastName);

if(!lastName) {
    console.log("Sobrenome não existe!");
}

// 5 - Remover item
localStorage.removeItem("name");

// 6 - Limpar todos os itens
// localStorage.clear();

// 7 - Session storage
sessionStorage.setItem("number", 123);

// 8 - Reiniciar e perder dados
const number = sessionStorage.getItem("number");
console.log(number);


// 9 - Salvar objeto
const person = {
    name: "usuario",
    age: "20",
    job: "dev",
};

localStorage.setItem("person", JSON.stringify(person));

const getPerson = localStorage.getItem("person");

console.log(getPerson);

const personObject = JSON.parse(getPerson);

console.log(personObject.job);
