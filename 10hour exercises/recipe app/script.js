// Seleção de elementos
const meals = document.getElementById('meals');

// Funções
function addMeal(meal_data, random = false) {
  console.log(meal_data);

  const meal = document.createElement('div');
  meal.classList.add('meal');

  meal.innerHTML = `
    <div class="meal-header">
    ${random ? `<span class="random">Random Recipe</span>` : ''}
      <img
        src="${meal_data.strMealThumb}"
        alt="${meal_data.strMeal}"
      />
    </div>

    <div class="meal-body">
      <h4>${meal_data.strMeal}</h4>
      <button class="fav-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 icon heart"
        >
          <path
            class="heart"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
  `;

  meal.querySelector('.meal-body .fav-btn .heart').addEventListener('click', (e) => {
    e.target.classList.toggle("active");
    console.log(e.target);
  });

  meals.appendChild(meal);
}

async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const resp_data = await resp.json();
  const random_meal = resp_data.meals[0];

  addMeal(random_meal, true);
}

getRandomMeal();

async function getMealById(id) {
  const meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}}`);
}

async function getMealsBySearch(term) {
  const meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}}`);
}

