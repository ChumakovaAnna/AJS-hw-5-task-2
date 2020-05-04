export default function getSpecialAttacks(obj) {
  const { special } = obj;
  const result = [];

  for (const prop of special) {
    const {
      id,
      name,
      icon,
      description = "Описание недоступно",
    } = prop;
    result.push({
      id,
      name,
      icon,
      description,
    });
  }

  return result;
}
