export const fetchMonsters = async () => {
  const resp = await fetch(
    'https://botw-compendium.herokuapp.com/api/v2/category/monsters'
  );
  const data = await resp.json();
  console.log(data);
  return data;
};
