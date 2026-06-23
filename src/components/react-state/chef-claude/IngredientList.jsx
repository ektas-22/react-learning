import React from "react";
import "../../../styles/chefclaude.css";

function IngredientList(props) {
  const ingredientList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <div>
      <section>
        <h2>Ingredients on hand: </h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientList}
        </ul>
        {props.ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a Recipe?</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={props.clickHandler}>Get a Recipe</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default IngredientList;
