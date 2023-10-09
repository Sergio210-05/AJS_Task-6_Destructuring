export default function getSpecialAbility(char) {
  const { special } = char;
  const abilities = [];
  special.forEach(({ description = 'Описание недоступно', ...pars }) => {
    const ability = { ...pars, description };
    abilities.push(ability);
  });
  return abilities;
}
