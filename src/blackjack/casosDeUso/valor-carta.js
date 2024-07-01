// pedirCarta();
/**
 *
 * @param {String} carta Retorna un array de strings
 * @returns {Number} Retorna number
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
