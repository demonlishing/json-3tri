const clientes = require("./clients.json");
function encontrar(lista, chave, valor){
    return lista.find((item)=> item[chave]===valor );
}
const encontrado = encontrar(clientes,"nome", "Kirby");

console.log(encontrado);