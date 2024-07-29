"use client";

import React from "react";

type Props = {};

function SectionDasboardA({ click }: any) {
  const pokemonABC = async () => {
    console.log(1);

    let data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    let data2 = await data.json();
    console.log(data2);
    return null;
  };

  return <div onClick={() => pokemonABC()}>Dashboard</div>;
}

export default SectionDasboardA;
