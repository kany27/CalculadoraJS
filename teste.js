
var n1 = "0";
var operacao = null;
var n2 = '';

function incluirDigito(digito) {
    if(n2 && operacao && clicadoEmIgual) {
        clicadoEmIgual = false;
        limpar();
        n1 = digito;
        mostrarNoDisplay(n1);
        return
    }
    if(operacao !== null) {
        n2 = n2 + digito;
        mostrarNoDisplay(n2);
    } else {
        if( n1 === "0") {
            n1 = digito;
        } else {
            n1 += digito;
        }
        mostrarNoDisplay(n1);
    }
}

function iniciarCalculo(simbolo) {
    if(clicadoEmIgual) {
        clicadoEmIgual = false;
        n2 = '';
    }
    if(operacao === null || n2 === '') {
        operacao = simbolo;
    } else {
        var resultado = calculo();
        n1 = resultado;
        operacao = simbolo;
        n2 = '';
        mostrarNoDisplay(n1);
    }
}

function calculo() {
    var _n1 = parseFloat(n1);
    var _n2 = parseFloat(n2);
    var nCalculado = eval(`${_n1} ${operacao} ${_n2}`);
    var historico = [];
    historico.push(n1 + " " + operacao + " " + n2 + " = " + nCalculado);
    document.getElementById("#calculo").value;
    return nCalculado;
    }
    

var clicadoEmIgual = false;
function finalizarCalculo() { 
    if(clicadoEmIgual == null) {
        limpar();
    }
    else {
    clicadoEmIgual = true;
    var resultado = calculo();
    n1 = resultado;
    mostrarNoDisplay(n1);
    }
}

function obterPorcento() {
    if(!n2) {
        limpar();
        mostrarNoDisplay(n1);
    } else {
        var porcento = n1 * n2 / 100;
        n2 = porcento;
        mostrarNoDisplay(n2);
    }
}

function incluirPonto() {
    if(operacao && n2 === '') {
        n2 = '0.';
    } else if(operacao && n2) {
        n2 += '.';
    } else {
        n1 += '.'
    }
}

function limpar() {
    n1 = "0";
    operacao = null;
    n2 = '';
    mostrarNoDisplay(n1);
}

function mostrarNoDisplay(valor) {
    document.querySelector("#display").value = valor;
}
