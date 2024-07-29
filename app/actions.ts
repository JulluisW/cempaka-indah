"use server";

export async function pokemon() {
  console.log(1);

  let data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  let data2 = await data.json();
  console.log(data2);
  return null;
}
