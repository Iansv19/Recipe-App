import React from "react";

function Recipes(props){

    return(
        <div className="rounded-sm shadow-md m-5 flex flex-col justify-around bg-white items-center w-2/5">
            <h1 className=" text-2xl font-bold">{props.title}</h1>
            <ol>{props.ingredients.map(ingredient => (<li>{ingredient.text}</li>))}</ol>
            <p>{props.calories}</p>
            <img className=" w-52 h-52 rounded-full" src={props.image} alt=""/>
        </div>
    );
}

export default Recipes;