import DrinkList from "../../components/DrinkList"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const fetchData = async() => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export default async function DrinksPage(){
    const data = await fetchData();

    return(
        <div>
            <h2>Drinks Page</h2>
            <DrinkList drinks={data.drinks} />
        </div>
    )
}