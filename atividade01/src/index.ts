import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Produto } from "./Produto";
import { Telefone } from "./Telefone";
import { Venda } from "./Venda";

var produtos : Produto[] = [];
var telefones : Telefone[] = [];
var endereco : Endereco;
var cliente1 : Cliente;
var venda01 : Venda;

produtos.push(new Produto(9872, "Água", 10.00));
produtos.push(new Produto(9872, "Fiat 147", 350.00)); 
produtos.push(new Produto(9872, "Arame Recozido (Kg)", 50.00));

telefones.push(new Telefone(42, 999546787, "Pessoal"));
telefones.push(new Telefone(42, 988767012, "Avalista"));

endereco = new Endereco("Rua 01", 80, "Rondonopolis", "PR");

cliente1 = new Cliente("Duílio Afonso", 44487700957, 20042004, 'Masculino', endereco, telefones);

venda01 = new Venda(2055, 18042024, cliente1, produtos);

// Saída
console.log("----------------------------\nVenda:", venda01.codigo, "\nRealizada para:", venda01.cliente.nome, "\n\nProduto(s):");
venda01.produtos.forEach(function (value) {
    console.log("   ", value.descricao, "-", value.valor)
})

console.log("\nValor final: ", venda01.calcularTotal(), "\n---------------------------");
