function loadMeals(searchText){
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    console.log(meals)
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerText='';
    meals.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add("meal-div", "rounded-lg","border-2", "border-slate-400", "p-5");
        mealDiv.innerHTML= `
        <div class="rounded-lg">
            <img class="rounded-lg" src="${meal.strMealThumb}" alt="">
        </div>
        <h1 class="text-2xl">${meal.strMeal}</h1>
        <p class="text-lg mt-3">Region: ${meal.strArea}</p>
        <button onclick="my_modal_1.showModal()" class="bg-sky-600 hover:bg-sky-400 px-2 py-2 rounded-lg mt-2 text-white font-semi-bold text-center" data-modal-target="static-modal" data-modal-toggle="static-modal">Explore</button>
        `
        mealContainer.appendChild(mealDiv);
    })
}

// enter button active for search handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchText= document.getElementById('search-field').value;
        loadMeals(searchText);
    }
    });

const searchMeal=()=>{
    const searchText= document.getElementById('search-field').value;
    loadMeals(searchText);
}

// load api again for modal details
function modal() {
    loadMeals();
    

}












loadMeals('fish');




