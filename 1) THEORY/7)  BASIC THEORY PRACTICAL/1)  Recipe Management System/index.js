const recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "pancetta", "Parmesan cheese", "black pepper"],
        instructions: "Boil spaghetti; cook pancetta until crispy; mix eggs, cheese, and pepper; toss all together.",
        servings: 4,
        prepTime: 10,
        cookTime: 15
    },
    {
        id: 2,
        name: "Chicken Tikka Masala",
        ingredients: ["chicken", "yogurt", "tomato sauce", "cream", "spices"],
        instructions: "Marinate chicken in yogurt and spices; grill or bake; simmer in tomato sauce and cream.",
        servings: 6,
        prepTime: 20,
        cookTime: 30
    },
    {
        id: 3,
        name: "Caesar Salad",
        ingredients: ["romaine lettuce", "Caesar dressing", "croutons", "Parmesan cheese"],
        instructions: "Toss lettuce with dressing; add croutons and cheese; serve chilled.",
        servings: 2,
        prepTime: 15,
        cookTime: 0
    },
    {
        id: 4,
        name: "Beef Stroganoff",
        ingredients: ["beef sirloin", "onion", "mushrooms", "sour cream", "egg noodles"],
        instructions: "Brown beef; sauté onion and mushrooms; add sour cream; serve over noodles.",
        servings: 4,
        prepTime: 15,
        cookTime: 25
    },
    {
        id: 5,
        name: "Chocolate Cake",
        ingredients: ["flour", "sugar", "cocoa powder", "eggs", "butter", "vanilla extract"],
        instructions: "Mix dry ingredients; cream butter and sugar; add eggs and vanilla; bake until done.",
        servings: 8,
        prepTime: 20,
        cookTime: 40
    },
    {
        id: 6,
        name: "Guacamole",
        ingredients: ["avocado", "lime", "tomato", "onion", "cilantro", "salt"],
        instructions: "Mash avocado; mix in lime juice, tomato, onion, cilantro, and salt.",
        servings: 4,
        prepTime: 10,
        cookTime: 0
    },
    {
        id: 7,
        name: "Pasta Primavera",
        ingredients: ["pasta", "assorted vegetables", "olive oil", "garlic", "Parmesan cheese"],
        instructions: "Cook pasta; sauté vegetables and garlic in olive oil; toss with pasta and cheese.",
        servings: 6,
        prepTime: 15,
        cookTime: 20
    },
    {
        id: 8,
        name: "Hamburger",
        ingredients: ["ground beef", "buns", "lettuce", "tomato", "onion", "cheese", "ketchup", "mustard"],
        instructions: "Form patties; grill or fry; assemble with toppings and condiments.",
        servings: 4,
        prepTime: 10,
        cookTime: 15
    },
    {
        id: 9,
        name: "Ratatouille",
        ingredients: ["eggplant", "zucchini", "bell peppers", "tomatoes", "onion", "garlic", "herbs"],
        instructions: "Sauté vegetables; layer in baking dish; bake until tender.",
        servings: 6,
        prepTime: 20,
        cookTime: 40
    },
    {
        id: 10,
        name: "Tiramisu",
        ingredients: ["ladyfingers", "espresso", "Mascarpone cheese", "eggs", "cocoa powder"],
        instructions: "Soak ladyfingers in espresso; layer with Mascarpone mixture; dust with cocoa.",
        servings: 8,
        prepTime: 30,
        cookTime: 0
    },
    {
        id: 11,
        name: "Vegetable Stir-Fry",
        ingredients: ["assorted vegetables", "tofu or chicken", "soy sauce", "ginger", "garlic", "sesame oil"],
        instructions: "Sauté vegetables and protein; add soy sauce, ginger, garlic, and sesame oil; stir-fry.",
        servings: 4,
        prepTime: 15,
        cookTime: 10
    },
    {
        id: 12,
        name: "Lentil Soup",
        ingredients: ["lentils", "carrots", "onion", "celery", "garlic", "vegetable broth", "spices"],
        instructions: "Sauté vegetables; add lentils, broth, and spices; simmer until lentils are tender.",
        servings: 6,
        prepTime: 15,
        cookTime: 30
    },
    {
        id: 13,
        name: "Greek Salad",
        ingredients: ["cucumbers", "tomatoes", "red onion", "feta cheese", "olives", "olive oil", "oregano"],
        instructions: "Combine vegetables, cheese, and olives; drizzle with olive oil and sprinkle with oregano.",
        servings: 4,
        prepTime: 10,
        cookTime: 0
    },
    {
        id: 14,
        name: "Sushi Rolls",
        ingredients: ["sushi rice", "seaweed", "fish or vegetables", "rice vinegar", "soy sauce", "wasabi"],
        instructions: "Prepare sushi rice; lay out seaweed; add filling; roll and slice; serve with soy sauce and wasabi.",
        servings: 4,
        prepTime: 45,
        cookTime: 0
    },
    {
        id: 15,
        name: "Apple Pie",
        ingredients: ["apples", "sugar", "cinnamon", "butter", "flour", "pie crust"],
        instructions: "Peel and slice apples; mix with sugar, cinnamon, and butter; bake in pie crust.",
        servings: 8,
        prepTime: 30,
        cookTime: 45
    },
    {
        id: 16,
        name: "Margarita Pizza",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "fresh basil", "olive oil"],
        instructions: "Stretch dough; spread sauce; top with cheese and basil; drizzle with olive oil; bake.",
        servings: 2,
        prepTime: 15,
        cookTime: 12
    }
];

//store in local storage

const StoreLocally = () => {
    try {
        localStorage.setItem('recipe', JSON.stringify(recipes));
        console.log('Stored Data Locally...');
    } catch (error) {
        console.log("Error while storing Recipe: " + error.message);
    }
}

StoreLocally(recipes)

const Store = () => {
    let store = JSON.parse(localStorage.getItem('recipe')) || recipes;
    return store;
}
let store = Store();
console.log(store);

// Add Recipe 
let newRec = {
    id: 17,
    name: "Pizza",
    ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "fresh basil", "olive oil"],
    instructions: "Stretch dough; spread sauce; top with cheese and basil; drizzle with olive oil; bake.",
    servings: 2,
    prepTime: 15,
    cookTime: 12
}

const AddRecipe = (recipe) => {
    store.push(recipe);
    StoreLocally(store);
}
AddRecipe(newRec)
// console.log(store);

// Delete Recipe

const DeleteRecipe = (id) => {
    store = store.filter((recipe) => recipe.id !== id);
    StoreLocally(store);
}

// Update Recipe 
let newRecipe = {
    id: 11,
    name: "French Frie! Wow",
    ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "fresh basil", "olive oil"],
    instructions: "Stretch dough; spread sauce; top with cheese and basil; drizzle with olive oil; bake.",
    servings: 50,
    prepTime: 15,
    cookTime: 12
}

const UpdateRecipe = (id, recipeNew) => {
    store = store.map((recipe, i) => {
        if (recipe.id === id) {
            return recipe[i] = recipeNew;
        } else {
            return recipe;
        }
    });
    StoreLocally(store);
    console.log("Updated Data.. ------> ", store);
}

UpdateRecipe(11, newRecipe)
console.log(store);

// Search recipe

const GetRecipe = (id) => {
    return store.find((recipe) => recipe.id === id);
}

//categories data 

const categories = [
    {
        id: 1,
        name: "Breakfast",
        recipes: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 2,
        name: "Lunch",
        recipes: [10, 11, 12]
    },
    {
        id: 3,
        name: "Dinner",
        recipes: [13, 14, 15, 16, 17]
    },
];


const GetRecipesByCategory = (cate) => {
    let rec = categories.find((category) => category.name === cate).recipes;
    return store.filter((recipe) => rec.includes(recipe.id));
}

// console.log(GetRecipesByCategory("Dinner"));

//filter using ingredients

const GetRecipesByIngredients = (ingredients) => {
    return store.filter((recipe) => recipe.ingredients.some((ingredient) => ingredients.includes(ingredient)));
}
// console.log(GetRecipesByIngredients("eggs"));














