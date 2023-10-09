export default function getSpecialAbility(char) {
  const { special } = char;
  const abilities = [];
  special.forEach((element) => {
    // if (!Object.prototype.hasOwnProperty.call(element, 'description')) {
    //   const addDescription = { description: 'Описание недоступно' };
    //   Object.assign(element, addDescription);
    // }
    // console.log(element);
    // const { description = 'Описание недоступно' } = element;
    const { description = 'Описание недоступно', ...params } = element;

    Object.assign(element, { description: description });
    // console.log(element);
  });
  return special;
}
