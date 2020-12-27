/**
 * Extract pokemon id from url
 * @param {string} url Pokemon detail url
 * @returns {string} id - Pokemon id
 */
const getPokemonId = (url) => url.split("/")[url.split("/").length - 2];

export default getPokemonId;
