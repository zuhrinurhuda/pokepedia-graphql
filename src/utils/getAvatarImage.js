/**
 * Generate url for display pokemon image
 * @param {string} id Pokemon Id
 * @returns {string} url - Pokemon image
 */
const getAvatarImage = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export default getAvatarImage;
