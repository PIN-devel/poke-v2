import { PokeDataType, PokeNamesType } from "@/types";
import pocketball from "@/assets/pocketball.svg";
import Image from "next/image";

const getKoName = (names: PokeNamesType[]) => {
  for (let i = 0; i < names.length; i++) {
    const data = names[i];
    if (data.language.name === "ko") return data.name;
  }

  for (let i = 0; i < names.length; i++) {
    const data = names[i];
    if (data.language.name === "en") return data.name;
  }

  return "데이터 없음";
};
async function getData() {
  const promises = Array.from({ length: 20 }).map((_, idx) =>
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${idx + 1}`)
      .then((res) => res.json())
      .then((data) => ({ id: data.id, name: getKoName(data.names) }))
  );
  const res = await Promise.all(promises);
  return res;
}

const getImageUrl = (pokemonIndex: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

const formatNumber = (index: number): string =>
  `#${String(index).padStart(3, "0")}`;

export default async function Pokemon() {
  const data = await getData();
  return (
    <div className='py-3 px-5 overflow-hidden min-w-max'>
      <h1 className='m-0 p-0 font-bold text-red-600 text-3xl'>포켓몬 도감</h1>
      <small className='p-0 mt-4 block text-gray-500'>
        포켓몬스터 도감입니다.
      </small>
      <div className='mt-6'>
        <ul className='m-0 p-0'>
          {data.map((pokeData: PokeDataType) => (
            <li
              key={pokeData.name}
              className='relative list-none flex items-center shadow-lg rounded-xl'
            >
              <img src={getImageUrl(pokeData.id)} alt={pokeData.name} />
              <p className='m-0 pl-3 flex-auto capitalize font-bold text-gray-700'>
                {pokeData.name}
              </p>
              <p className='absolute m-0 p-0 right-4 bottom-4 font-bold text-2xl text-gray-300'>
                {formatNumber(pokeData.id)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className='fixed top-0 right-0 opacity-40 translate-x-[96px] translate-y-[-96px]'>
        <Image src={pocketball} alt='pocketball' width={288} height={288} />
      </div>
    </div>
  );
}
