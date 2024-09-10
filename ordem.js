const usuario = [
    {nome:"Carlos", idade: 32},
    {nome:"Ana", idade: 28},
    {nome:"Felipe", idade: 40}
];
//Encontrar um Objeto
const ana = usuarios.find(usuario => usuario.nome === "Ana");
console.log(ana);