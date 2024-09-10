const clientes = require("./clients.json");
function encontrar(lista, chave, valor){
    return lista.find((item)=> item[chave].includes(valor ));
}
const encontrado = encontrar(clientes,"nome", "Kirby");
const encontrado2 = encontrar(clientes,"telefone","13713919332");

console.log(encontrado);