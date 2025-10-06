class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    //calcula a categoria do atleta
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return "infantil"
        }
        else if(this.idade >= 12 && this.idade <= 13){
            return "juvenil"
        }
        else if(this.idade >= 14 && this.idade <= 15){
            return "intermediário"
        }
        else if(this.idade >= 16 && this.idade <= 30){
            return "adulto"
        }
        else{
            return "Sem categoria"
        }
    }

    //calcula o IMC do atleta
    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }

    //calcula a média válida do atleta
    calculaMediaValida(){
        let notas = [...this.notas];

        notas.sort((a, b) => a - b);

      notas = notas.slice(1, 4);

      let soma = notas.reduce((acum, atual) => acum + atual, 0);

      let media = soma / notas.length;
      return media;
    }

    //retorna o nome do atleta
    obtemNomeAtleta(){
        console.log(`Nome: ${this.nome}`);
    }

    //retorna a idade do atleta
    obtemIdadeAtleta(){
        console.log(`Idade: ${this.idade}`);
    }

    //retorna o peso do atleta
    obtemPesoAtleta(){
        console.log(`Peso: ${this.peso}`);
    }

    //retorna as notas do atleta
    obtemNotasAtleta(){
        console.log(`Notas: ${this.notas}`);
    }

    //retorna a categoria do atleta
    obtemCategoria(){
        console.log(`Categoria: ${this.calculaCategoria()}`);
    }

    //retorna o IMC do atleta
    obtemIMC(){
        console.log(`IMC: ${this.calculaIMC()}`)
    }

    //retorna a média válida do atleta
    obtemMediaValida(){
        console.log(`Média Válida: ${this.calculaMediaValida()}`);
    }
}
let atleta = new Atleta("João Pedro", 18, 70, 1.75, [9, 10, 6.7, 4, 8.5]);
atleta.obtemNomeAtleta();
atleta.obtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemNotasAtleta();
atleta.obtemCategoria();
atleta.obtemIMC();
atleta.obtemMediaValida();