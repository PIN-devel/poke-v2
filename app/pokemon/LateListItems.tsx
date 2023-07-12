"use client";
// import { getKoName } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import fetchList from "./fetchList";
import { PokeDataType } from "@/types";
import ListItem from "./ListItem";
import Loading from "./Loading";

export default function LateListItems() {
  const loaderRef = useRef(null);
  const [pokeList, setPokeList] = useState<PokeDataType[]>([]);
  const [pageNum, setPageNum] = useState(2);
  const [limitPageNum, setLimitPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        setLimitPageNum(Math.ceil(data.count / 10));
      });
  }, []);

  useEffect(() => {
    setHasMore(pageNum <= limitPageNum);
  }, [limitPageNum, pageNum]);

  useEffect(() => {
    if (loaderRef.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("load");
          setIsLoading(true);
          setPageNum((prev) => prev + 1);
        }
      });
      observer.observe(loaderRef.current);
    }
  }, [loaderRef, hasMore]);

  useEffect(() => {
    if (pageNum !== 2) {
      fetchList(pageNum).then((data) => {
        setPokeList((prev) => [...prev, ...data]);
      });
    }
  }, [pageNum]);

  useEffect(() => {
    if (pokeList.length) setIsLoading(false);
  }, [pokeList]);

  return (
    <>
      {pokeList.map((pokeData) => (
        <ListItem pokeData={pokeData} key={pokeData.id} />
      ))}
      <div ref={loaderRef} />
      {isLoading && <Loading />}
    </>
  );
}
