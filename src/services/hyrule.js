export const fetchData = async () => {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2/all');
  const data = await resp.json();
  console.log(data);
  return data;
};
