// Função para calcular o IMC
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

// Valores de peso e altura do usuário
const peso = parseFloat(prompt("Digite o peso em kg:"));
const altura = parseFloat(prompt("Digite a altura em metros:"));

// Calcula o IMC
const imc = calcularIMC(peso, altura);

// Exibe o resultado
console.log("Seu IMC é:", imc.toFixed(2));



// Função para converter Fahrenheit para Celsius
function fahrenheitParaCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Valor em graus Fahrenheit
const fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));

// Converte para Celsius
const celsius = fahrenheitParaCelsius(fahrenheit);

// Exibe o resultado
console.log(`${fahrenheit} ºF é igual a ${celsius.toFixed(2)} ºC`);
Neste código, a função fahrenheitParaCelsius recebe a temperatura em graus Fahrenheit como argumento e retorna o valor equivalente em graus Celsius, usando a fórmula fornecida. O resultado é exibido no console, onde ${fahrenheit} e ${celsius.toFixed(2)} são substituídos pelos valores reais de entrada e saída, respectivamente.





