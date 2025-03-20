// Retorna o índice do maior número em uma lista. Retorna null se a lista for vazia ou inválida.
export function maiorNumero(lista) {
    if (!Array.isArray(lista) || lista.length === 0) return null;
    return lista.indexOf(Math.max(...lista));
  }
  
  // Verifica se um número é par ou ímpar. Retorna null para entradas inválidas.
  export function verificarParOuImpar(numero) {
    if (typeof numero !== "number") return null;
    return numero % 2 === 0 ? "Par" : "Ímpar";
  }
  
  // Retorna o nome do dia da semana correspondente ao número (1 a 7). Retorna "Número inválido" se estiver fora desse intervalo.
  export function diaDaSemana(numero) {
    const dias = [
      "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
      "Quinta-feira", "Sexta-feira", "Sábado"
    ];
    return dias[numero - 1] || "Número inválido";
  }
  
  // Soma todos os números de uma lista. Retorna 0 se a lista for vazia e null para entradas inválidas.
  export function somarLista(lista) {
    if (!Array.isArray(lista)) return null;
    return lista.reduce((soma, num) => soma + (typeof num === "number" ? num : 0), 0);
  }
  
  // Conta a quantidade de palavras em uma string. Retorna null para entradas inválidas e 0 para strings vazias.
  export function contarPalavras(texto) {
    if (typeof texto !== "string") return null;
    const palavras = texto.trim().split(/\s+/);
    return palavras.filter(palavra => palavra).length;
  }
  
  // Atualiza ou adiciona uma propriedade em um objeto e retorna o objeto atualizado. Retorna null para objetos inválidos.
  export function atualizarPropriedade(objeto, propriedade, valor) {
    if (typeof objeto !== "object" || objeto === null) return null;
    return { ...objeto, [propriedade]: valor };
  }
  
  // Retorna um array com todas as chaves de um objeto. Retorna null para valores inválidos.
  export function listarChaves(objeto) {
    return typeof objeto === "object" && objeto !== null ? Object.keys(objeto) : null;
  }
  
  // Retorna uma saudação com base na hora fornecida. Retorna "Hora inválida!" para valores fora do intervalo 0-23.
  export function saudacaoPorHora(hora) {
    if (typeof hora !== "number" || hora < 0 || hora > 23) return "Hora inválida!";
    if (hora < 12) return "Bom dia!";
    if (hora < 18) return "Boa tarde!";
    return "Boa noite!";
  }
  