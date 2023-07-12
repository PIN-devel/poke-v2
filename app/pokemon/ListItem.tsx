import { PokeDataType } from "@/types";
import { formatNumber, getImageUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ListItemProps = {
  pokeData: PokeDataType;
  // clickHandler: () => void;
};

export default function ListItem({ pokeData }: ListItemProps) {
  return (
    <li key={pokeData.name} className='list-none'>
      <Link
        href={`pokemon/${pokeData.id}`}
        className='relative flex items-center shadow-lg rounded-xl'
      >
        <Image
          src={getImageUrl(pokeData.id)}
          alt={pokeData.name}
          height={96}
          width={96}
        />
        <p className='m-0 pl-3 flex-auto capitalize font-bold text-gray-700'>
          {pokeData.name}
        </p>
        <p className='absolute m-0 p-0 right-4 bottom-4 font-bold text-2xl text-gray-300'>
          {formatNumber(pokeData.id)}
        </p>
      </Link>
    </li>
  );
}
