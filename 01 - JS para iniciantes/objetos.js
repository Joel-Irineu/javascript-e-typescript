const pessoa1 = {
    nome: "irineu",
    sobrenome: "oliveira",
    idade: 21
};

const pessoa2 = {
    nome: "matheus",
    sobrenome: "vasconcelos",
    idade: 21
};

console.log(pessoa1.nome);
console.log(pessoa2.nome);

function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

pessoa3 = criaPessoa('Gabriel', 'Cansado', 19);

console.log(pessoa3.nome);

const pessoa4 = {
    nome: "matheus",
    sobrenome: "vasconcelos",
    idade: 21,
    
    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
