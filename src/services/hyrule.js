export async function fetchData(category) {
  const resp = await fetch(
    `https://botw-compendium.herokuapp.com/api/v2/category/${category}`
  );
  const data = await resp.json();
  console.log(data);
  return data;
}
