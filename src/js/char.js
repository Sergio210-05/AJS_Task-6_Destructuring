export default function getSpecialAbility(char) {
  const { special } = char;
  special.forEach((element) => {
    if (!Object.prototype.hasOwnProperty.call(element, 'description')) {
      const addDescription = { description: 'Описание недоступно' };
      Object.assign(element, addDescription);
    }
  });
  return special;
}
