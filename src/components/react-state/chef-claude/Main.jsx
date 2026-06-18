import "../../../styles/chefclaude.css";

function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  function addIngredient() {
    console.log("Hello");
  }

  const ingredientList = ingredients.map((item) => <li key={item}>{item}</li>);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log("form submmitted");
    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button onClick={addIngredient}>Add Ingredient</button>
        <ul>{ingredientList}</ul>
      </form>
    </main>
  );
}

export default Main;
