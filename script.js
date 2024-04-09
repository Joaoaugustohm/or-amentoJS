function calcularOrcamento() {
  // Obter os valores dos campos de entrada
  const nome = document.getElementById('nome').value;
  const metrosQuadrados = parseFloat(document.getElementById('metrosQuadrados').value);
  const preco = parseFloat(document.getElementById('preco').value);

  // Calcular o custo total
  const custoTotal = (metrosQuadrados * preco) * 1;

  // Exibir o resultado na página
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `Nome do Produto: ${nome}\nMetros Quadrados: ${metrosQuadrados} m²\nCusto Total: R$ ${custoTotal.toFixed(2)}`;
}