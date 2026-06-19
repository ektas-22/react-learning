import React from "react";
import "../../../styles/chefclaude.css";

function Main() {
  // const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const [ingredients, setIngredient] = React.useState([]);

  const ingredientList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

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
        <ul>{ingredientList}</ul>
      </form>
    </main>
  );
}

export default Main;
