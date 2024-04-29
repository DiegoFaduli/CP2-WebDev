const recipes = {
    red: [
        "Carne assada com batatas",
        "Massa à bolonhesa",
        "Churrasco de picanha"
    ],
    white: [
        "Frango ao curry",
        "Salada de camarão",
        "Salmão grelhado com legumes"
    ],
    rose: [
        "Salada caprese",
        "Sushi variado",
        "Ceviche de peixe"
    ]
};

const wineSelect = document.getElementById('wineSelect');
const recipeList = document.getElementById('recipeList');

wineSelect.addEventListener('change', function() {
    const selectedWine = this.value;
    renderRecipes(selectedWine);
});

function renderRecipes(wine) {
    recipeList.innerHTML = '';
    recipes[wine].forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe;
        recipeList.appendChild(listItem);
    });
}

renderRecipes(wineSelect.value);