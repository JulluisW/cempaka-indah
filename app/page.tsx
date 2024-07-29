//
// import { useEffect } from "react";
import SectionDasboardA from "@/components/SectionDashboardA";
import { pokemon } from "./actions";

export default async function Home() {
  // const onClickPokemon = async () => {
  //   let data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  //   let data2 = await data.json();
  //   console.log(data2);
  // };

  const dats = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const monster = await dats.json();

  // useEffect(() => {
  //   pokemon();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <button onClick={onClickPokemon} className="border-red-100 border p-10">
        MAIN
      </button> */}
      {monster && monster.forms[0].name}
      <SectionDasboardA click={pokemon}></SectionDasboardA>
    </main>
  );
}
