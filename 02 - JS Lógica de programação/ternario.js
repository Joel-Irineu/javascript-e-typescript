// condição ? se verdadeiro : se falsa

const pontuacaoUsuario = 500;
// if normal
if(pontuacaoUsuario >= 1000){
    console.log('Usuario vip');
}else{
    console.log('Usuario normal');
}
// Operação ternaria
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal';

console.log(nivelUsuario);