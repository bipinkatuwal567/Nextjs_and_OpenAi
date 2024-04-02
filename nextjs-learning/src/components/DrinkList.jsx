"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrinkList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link href={`/drinks/${drink.idDrink}`} className="text-xl font-medium">
            <div className="relative h-[15rem]">
            <Image
              src={drink.strDrinkThumb}
            //   width={100}
            //   height={100}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
              alt={drink.idDrink}
              className="rounded-lg object-cover"
            />
            </div>
            <p className="mt-2">{drink.strDrink}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
