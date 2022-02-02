export async function fetchData(category) {
  const resp = await fetch(
    `https://botw-compendium.herokuapp.com/api/v2/category/${category}`
  );
  const data = await resp.json();
  return data.data;
}

export async function fetchDataById(entry) {
  const resp = await fetch(
    `https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`
  );
  const data = await resp.json();
  return data.data;
}
