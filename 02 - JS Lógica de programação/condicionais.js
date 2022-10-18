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