import React from "react";
import "../../../styles/chefclaude.css";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";

function Main() {
  // const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const [ingredients, setIngredient] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const newIngredient = formData.get("ingredient");
  //   // ingredients.push(newIngredient);
  //   setIngredient(prevIngredient => [
  //     ...prevIngredient, newIngredient
  //   ]);
  //   console.log(ingredients);
  // }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  function getRecipe() {
    setRecipeShown((prevState) => !prevState);
  }
  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList
          clickHandler={getRecipe}
          ingredients={ingredients}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}

export default Main;
