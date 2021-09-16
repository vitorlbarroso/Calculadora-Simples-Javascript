function calc(num1,num2,operacao) {
    switch(operacao) {
        case 'adc':
            console.log(num1 + num2);
            break;
        case 'sub':
            console.log(num1 - num2);
            break;
        case 'div':
            console.log(num1 / num2);
            break;
        case 'mult':
            console.log(num1 * num2);
            break;
        default:
            console.log("Não foi possível executar a conta!")
    }
}

calc(10,2,'mult'); // Coloque o primeiro número, depois o segundo número e após isso, a operação que será utilizada:

// 'adc' = adção
// 'sub' = subtração
// 'div' = divisão
// 'mult' = multiplicação