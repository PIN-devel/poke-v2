import { getKoName } from "@/utils";

const fetchList = (page: number) => {
  const promises = Array.from({ length: 10 }).map((_, idx) =>
    fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${(page - 1) * 10 + 1 + idx}`
    )
      .then((res) => res.json())
      .then((data) => ({
        id: data.id,
        name: getKoName(data.names) || data.name,
      }))
  );
  return Promise.all(promises);
};

export default fetchList;
