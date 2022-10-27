// Exercício 1

// const percorrerArray = ["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];

// function xRunning(percorrerArray) {
//     let i = 0;
//     while (percorrerArray.length > i) {
//         percorrerArray.splice(i, 1, "x");
//         percorrerArray.splice(i-1, 1, "-"); 
//         console.log(percorrerArray);
//         i++;
//     }
// }

// xRunning(percorrerArray);

// ###############################################################################

// Exercício 2

// const listaArray = ["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"];
// const listaVogais = ["a", "e", "i", "o", "u"];

// function vowelsCounte(listaArray) {
// let numeroVogais = [];
// let i = 0;
// let j = 0;
// let contVogal = 0;
//     for (let cont=0; listaArray.length>cont; cont++) {
//         while (listaArray[i].length > j) {
//             let k = 0;
//             while (listaVogais.length > k) {
//                 if(listaVogais[k] == listaArray[i][j]) {
//                     contVogal++;
//                 }
//             k++;
//             }
//         j++;    
//         }
//         numeroVogais.push(contVogal);
//     i++;
//     j = 0;
//     contVogal = 0;
//     }
//     return numeroVogais;            
// }

// console.log(vowelsCounte(listaArray));


// ###############################################################################

// Exercício 3

// const string = "Os três mosqueteiros";

// function stringTripletGroup(string) {
// let novaArray = [];
// let j = 0;
// let i = 0;
// let cont = 0;
//     while (string.length > i) {
//         let k = 0;
//         let palavra = "";
//         while (k < 3) {
//             if(j >= string.length) {
//                 palavra += " ";
//             } else {
//                 palavra += string[j];
//             }
//             j++;
//             k++;
//         }
//         novaArray.push(palavra);
//         i=i+3;
//     }
//     return novaArray;
// }

// console.log(stringTripletGroup(string));


// ###############################################################################

// Exercício 4

// const arrayAnimais = ["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"];

// function dominantPet(arrayAnimais) {
// let tipoA = "dog";
// let tipoB = "cat";
// let contDog = 0;
// let contCat = 0;
// let i = 0

//     while (i < arrayAnimais.length) {
//         if (tipoA == arrayAnimais[i].toLowerCase()) {
//             contDog++;
//         }else {
//             contCat++;
//         }
//         i++;
//     }   
//     if (contDog == contCat) {
//         return 'DRAW!';
//     } else if(contDog > contCat) {
//         return 'DOG!';
//     } else{
//         return 'CAT!';
//     }
    
// }

// console.log(dominantPet(arrayAnimais));


// ###############################################################################

// Exercício 5

// const listaArray = [14, 25, 32, 50, 35, 30];

// function divisibleList(listaArray, divisor) {
// let numerosDivisiveis = [];
//     for (let i=0; listaArray.length > i; i++) {
//         if (listaArray[i]%5 == 0) {
//             numerosDivisiveis.push(listaArray[i]);
//         }
//     }
//     return numerosDivisiveis;
// }

// console.log(divisibleList(listaArray, 5));


// ###############################################################################

// Exercício 6

// function trustMeOrNot(bool, numero) {
//     let arrayGerada = [];
//     for (let i=0; i < numero; i++ ) {
//         arrayGerada.push(bool);
//     }
//     return arrayGerada;
// }

// console.log(trustMeOrNot(true, 8));


// ###############################################################################

// Exercício 7

// const estadoDaLampada = [false, false, true, false, true, true, true];

// function changeLampStatus(estadoDaLampada) {
//     let posicaoInvertida = [];
//     for (let i=0; estadoDaLampada.length > i; i++) {
//         posicaoInvertida.push(!estadoDaLampada[i]);
//     }
//     return posicaoInvertida;
// }

// console.log(changeLampStatus(estadoDaLampada));


// ###############################################################################

// Exercício 8

// const notasAtividades = [6.0, 5.5, 6.7, 8.0, 10, 10, 7.1];

// function gradeAverage(notasAtividades) {
//     let cont = 0;
//     let somaNota = 0;
//     let resultado = 0;
//     for(let i=0; notasAtividades.length > i; i++) {
//         somaNota += notasAtividades[i];
//         cont++;
//     }
//     resultado = somaNota/cont;
//     return console.log(`A média das notas é: ${resultado.toFixed(2)}`)
// }

// gradeAverage(notasAtividades);


// ###############################################################################

// Exercício 9

// const notaEntregas = [3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7];

// function canvasDeliveriesPercentage() {
//     let totalDeEntregas = 0;
//     for(let i=0; notaEntregas.length >i; i++) {
//         totalDeEntregas += notaEntregas[i];
//     }
//     return console.log(`A porcentagem total de entregas atingida é: ${totalDeEntregas.toFixed(2)}%`);
// }

// canvasDeliveriesPercentage();


// ###############################################################################

// Exercício 10

// const coresSemaforo = ["R", "r", "G", "y", "G", "Y", "g"];

// function shouldIGo(coresSemaforo) {
//     let conversaoCores = [];
//     for (let i=0; coresSemaforo.length > i; i++) {
//         if (coresSemaforo[i].toUpperCase() == "R") {
//             conversaoCores.push("Stop!");
//         } else if (coresSemaforo[i].toUpperCase() == "Y") {
//             conversaoCores.push("Attention!");
//         } else {
//             conversaoCores.push("Go!");
//         }
//     }
//     return conversaoCores;
// }

// console.log(shouldIGo(coresSemaforo));