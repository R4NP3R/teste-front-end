export function numberFormater(valor: number) {
  return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  });
}