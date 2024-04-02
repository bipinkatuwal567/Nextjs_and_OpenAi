"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrinkList = ({ drinks }) => {
  console.log(drinks);
  return (
    <ul className=" menu menu-vertical pl-0">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link href={`/drinks/${drink.idDrink}`}>
            <Image
              src={drink.strDrinkThumb}
              width={100}
              height={100}
              className=" rounded"
              alt={drink.idDrink}
            />
          <p className="text-xl font-medium">{drink.strDrink}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
