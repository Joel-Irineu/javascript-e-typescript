const hora = 25;
// Condição se, retornar verdadeiro, execute o trecho de código
if(hora >= 0 && hora <= 11){
    console.log('Bom dia');
}else if(hora >= 12 && hora <= 17){ // Se retornar falso, verifique se...
    console.log('Boa tarde');
}else if(hora >= 18 && hora <= 23){
    console.log('Boa noite');
}else{ // se retornar falso, faça...
    console.log('Olá!');
}

const numero = 10;
if(numero >= 0 && numero <= 5){
    console.log('Seu numero esta entre 0 e 5');
}else if(numero >= 6 && numero <= 8){
    console.log('Seu numero esta entre 6 e 8');
}else if(numero >= 9 && numero <= 11){
    console.log('Seu numero esta entre 9 e 11');
}else{
    console.log('Seu numero não esta ente 0 e 11');
}