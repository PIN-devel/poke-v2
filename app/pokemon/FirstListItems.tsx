"use server";

import { PokeDataType } from "@/types";
import { getKoName } from "@/utils";
import React from "react";
import ListItem from "./ListItem";

const NUM_PER_FIRST_PAGE = 20;

function getData() {
  const promises = Array.from({ length: NUM_PER_FIRST_PAGE }).map((_, idx) =>
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${idx + 1}`)
      .then((res) => res.json())
      .then((data) => ({
        id: data.id,
        name: getKoName(data.names) || data.name,
      }))
  );
  // const res = await Promise.all(promises);
  return Promise.all(promises);
}

export default async function FirstListItems() {
  const data = await getData();
  return (
    <>
      {data.map((pokeData: PokeDataType) => (
        <ListItem pokeData={pokeData} key={pokeData.name} />
      ))}
    </>
  );
}
