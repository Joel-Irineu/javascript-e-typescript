/**
 * Faça o calculo de IMC
 * IMC = peso / altura ** 2
 */

document.querySelector("#form").addEventListener('submit', e => e.preventDefault());

function imc(weight, height){
    return weight / (height ** 2);
}

function result(resultImc){
    if(resultImc < 18.5){
        return 'Abaixo do peso';
    }else if(resultImc >= 18.5 && resultImc <= 24.9){
        return 'Peso Normal';
    }else if(resultImc >= 25 && resultImc <= 29.9){
        return 'Sobrepeso';
    }else if(resultImc >= 30 && resultImc <= 34.9){
        return 'Obesidade grau 1';
    }else if(resultImc >= 35 && resultImc <= 39.9){
        return 'Obesidade grau 2';
    }else if(resultImc >= 40){
        return 'Obesidade grau 3';
    }else{
        return 'Resultado Invalido';
    }
}

function checkValues(weight, height){
    if(weight == '' && height == ''){
        return ['Por favor preencha os campos', 'fail'];
    }else if(weight != '' && height == ''){
        return ['Por favor preencha a altura', 'fail'];
    }else if(weight == '' && height != ''){
        return ['Por favor preencha o peso', 'fail'];
    }else{
        let value = result(imc(weight, height));
        return value == 'Resultado Invalido' ? [value, 'fail'] : [value, 'success'];
    }
}

function showResult(blockResult, weight, height){
    let value = checkValues(weight, height);
    blockResult.innerHTML = value[0];
    blockResult.style.display = 'block';
    blockResult.style.backgroundColor = `var(--${value[1]}-color)`;
    blockResult.style.color = `var(--${value[1]}-color-darker)`;
}

function newCalc(){
    let blockResult = document.querySelector("#blockResult");
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;

    showResult(blockResult, weight, height.replace(",", "."));
}