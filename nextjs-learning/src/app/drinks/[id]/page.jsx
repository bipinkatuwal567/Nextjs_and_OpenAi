import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export async function fetchSingleDrink(id) {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error("Couldn't fetch the single drink...");
  }

  return response.json();
}

export default async function DrinksPageId({ params }) {
  const data = await fetchSingleDrink(params.id);
  //   console.log(data);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href={"/drinks"} className="btn btn-primary my-8">
        Back to drinks
      </Link>
      <Image src={imgSrc} className="rounded-xl shadow-lg" height={250} priority width={250} alt={title} />
      <h2 className="text-2xl mt-4">{title}</h2>
    </div>
  );
}


