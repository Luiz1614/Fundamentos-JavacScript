
//------------------ declaração de função ---------------------------------------

const idadeMinima = 18;
const idadeCliente = 10;

const permitido = "Liberado para entrar"
const negado = "negado para entrar"

function idade(){
    if(idadeCliente >= idadeMinima){
        return permitido
    }
    if(idadeCliente < idadeMinima){
        return negado
    }
}


function verifica(){
    if(idade() === negado){
        return "se ferrou kkkk"
    }
    if(idade() === permitido){
        return "vá em frente meu jovem"
    }
}

//console.log(idade())
//console.log(verifica())


//---------------------------teste de parâmetros na função--------------------------

function conta(numero1, numero2, numero3){
    return numero1 + numero2 + numero3
}

//console.log(conta(2,6,2))



// ------------------------- Expressão de função --------------------------------

const soma = function adição (num1, num2) {return num1 + num2}

//console.log(soma(2,2))



// ------------------------- Arrow function -------------------------------------------

const nome = 'Luiz Otávio'

const apresentaArrow = nome => 'Meu nome é '(nome);

console.log(apresentaArrow)