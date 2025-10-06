# Classe `Atleta` em JavaScript

## Descrição

Este projeto implementa uma classe `Atleta` em JavaScript para modelar e gerenciar informações e estatísticas de atletas. A classe encapsula propriedades como nome, idade, peso, altura e notas, e fornece métodos para calcular a categoria, o IMC e a média válida de notas.

## Funcionalidades

A classe `Atleta` oferece as seguintes funcionalidades:

-   **Armazenamento de Dados:** Guarda de forma organizada os dados de um atleta.
-   **Cálculo de Categoria:** Determina a categoria do atleta (infantil, juvenil, adulto, etc.) com base na idade.
-   **Cálculo de IMC:** Calcula o Índice de Massa Corporal (IMC) a partir do peso e altura.
-   **Cálculo de Média Válida:** Calcula a média de um conjunto de notas, descartando o maior e o menor valor.
-   **Exibição de Dados:** Possui métodos para exibir cada informação do atleta de forma clara no console.

## Como Usar

Para utilizar a classe `Atleta`, você precisa ter o [Node.js](https://nodejs.org/) instalado.

1.  **Salve o código:** Salve o código da classe em um arquivo (ex: `Atleta.js`).
2.  **Crie uma instância:** No mesmo arquivo ou em outro, crie um novo objeto a partir da classe, fornecendo os dados do atleta no construtor.
3.  **Execute o script:** Abra um terminal na pasta do arquivo e execute com o comando:
    ```bash
    node seu_arquivo.js
    ```

## Métodos da Classe `Atleta`

A classe possui os seguintes métodos:

#### Métodos de Cálculo

-   `calculaCategoria()`: Retorna uma `string` com a categoria do atleta baseada na idade.
-   `calculaIMC()`: Retorna um `number` com o IMC do atleta.
-   `calculaMediaValida()`: Retorna um `number` com a média das notas (descartando a maior e a menor).

#### Métodos de Exibição (`obtem...`)

Estes métodos não retornam valores, mas imprimem a informação diretamente no console.

-   `obtemNomeAtleta()`: Exibe o nome do atleta.
-   `obtemIdadeAtleta()`: Exibe a idade do atleta.
-   `obtemPesoAtleta()`: Exibe o peso do atleta.
-   `obtemNotasAtleta()`: Exibe o array de notas do atleta.
-   `obtemCategoria()`: Exibe a categoria do atleta.
-   `obtemIMC()`: Exibe o IMC do atleta.
-   `obtemMediaValida()`: Exibe a média válida das notas.

## Exemplo de Uso e Saída

O código abaixo demonstra como instanciar e usar a classe:

```javascript
// Instanciando um novo atleta
let atleta = new Atleta("João Pedro", 18, 70, 1.75, [9, 10, 6.7, 4, 8.5]);

// Chamando os métodos para exibir os dados
atleta.obtemNomeAtleta();
atleta.obtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemNotasAtleta();
atleta.obtemCategoria();
atleta.obtemIMC();
atleta.obtemMediaValida();
```

### Saída Esperada no Console:

```
Nome: João Pedro
Idade: 18
Peso: 70
Notas: 9,10,6.7,4,8.5
Categoria: adulto
IMC: 22.857142857142858
Média Válida: 8.066666666666666
```

## Autor

[Jean Marcos]