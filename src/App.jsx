/* eslint-disable */
import React,{useEffect} from "react";
import { useState } from "react";
import Recipes from "./Recipes";


function App() {

  const APP_ID = "37cb3c72";
  const APP_KEY = "008cab2f4c51fa476337d6fec6d9436e";

  
  
  const [recipes,setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect ( () => {
    getRecepies();
  },[query]);

  const getRecepies = 
    async () => {
      const response = await fetch (
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
      const data = await response.json();
      setRecipes(data.hits);  
      console.log(data.hits);
    };

  function callRecipe (recipe) {
    return (
      <Recipes 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
       />
    )
  }

  function handleChange(event){
      setSearch(event.target.value);
  }

  function getSearch(event){
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div className="mx-auto min-h-screen bg-gradient-to-r from-red-200 to-red-300 ">
      <form onSubmit={getSearch} className=" min-h-1 flex justify-center items-center ">
        <input className="border-none p-2 w-2/4 " type="text" value={search} onChange={handleChange}></input>
        <button className= " border py-2 px-2 bg-red-400 text-white" type="submit">Search</button>
      </form>
      <div className="flex flex-wrap justify-around  ">
      {recipes.map(callRecipe)}
      </div>
      
    </div>
  );
}

export default App;
