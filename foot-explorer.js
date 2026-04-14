/* ========== ANALYSE CRITIQUE ==========
 * 1. Pourquoi utilise-t-on .map() avant .filter() ?
 *    - .map() transforme les données brutes en une structure simplifiée (extraction des champs utiles)
 *    - Cela rend les données cohérentes avant le filtrage, évitant les erreurs d'accès aux propriétés
 *    - On prépare d'abord le format, puis on traite les données
 *
 * 2. Quelle est la différence entre filter() et map() ?
 *    - .map() : transforme chaque élément du tableau, retourne un nouveau tableau de même taille
 *    - .filter() : sélectionne des éléments selon une condition, retourne un tableau potentiellement plus petit
 *
 * 3. Pourquoi transformer les données alimentaires avant affichage ?
 *    - Éviter les propriétés inutiles (moins de bruit)
 *    - Assurer une structure cohérente pour tous les aliments
 *    - Faciliter les traitements ultérieurs (filtrage, tri, etc.)
 */

// URL de l'API
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fonction utilitaire: Transformer les données users en foods
const transformUsersToFoods = (users) => {
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    category: user.company.name.split(" ")[0].toLowerCase(), // Première partie du nom de la compagnie
    price: (user.id * 4.99).toFixed(2), // Prix généré à partir de l'ID
  }));
};

// Fonction 1: Récupérer et transformer les aliments
const getFoods = async () => {
  try {
    // Récupérer les données de l'API
    const res = await fetch(API_URL);
    const users = await res.json();

    // Transformer les users en foods
    const foods = transformUsersToFoods(users);

    // TRANSFORMATION (MAP) : créer un nouveau tableau avec uniquement les champs utiles
    const simplifiedFoods = foods.map((food) => ({
      id: food.id,
      name: food.name,
      category: food.category,
      price: food.price,
    }));

    console.log(" Tous les aliments transformés:");
    console.table(simplifiedFoods);

    // STATISTIQUES
    console.log(`\n Statistiques: Total ${simplifiedFoods.length} aliments`);

    return simplifiedFoods;
  } catch (error) {
    console.error(" Erreur lors de la récupération des aliments:", error);
    throw error;
  }
};

// Fonction 2: Filtrer les aliments par catégorie
const runFoodExplorer = async (targetCategory) => {
  try {
    console.log(
      `\n Recherche des aliments dans la catégorie: "${targetCategory}"...`,
    );

    // Récupérer les données de l'API
    const res = await fetch(API_URL);
    const users = await res.json();

    // Transformer les users en foods
    const allFoods = transformUsersToFoods(users);

    // TRANSFORMATION (MAP) : extraire les données utiles
    const simplifiedFoods = allFoods.map((food) => ({
      id: food.id,
      name: food.name,
      category: food.category,
      price: food.price,
    }));

    // FILTRAGE (FILTER) : sélectionner les aliments de la catégorie recherchée
    const filteredFoods = simplifiedFoods.filter(
      (food) => food.category.toLowerCase() === targetCategory.toLowerCase(),
    );

    // Gestion du cas vide
    if (filteredFoods.length === 0) {
      console.log(
        `\n  Aucun aliment trouvé dans la catégorie "${targetCategory}"`,
      );
      console.log(
        ` Résultats: 0 aliment(s) trouvé(s) sur ${simplifiedFoods.length} au total`,
      );
    } else {
      console.log(`\n ${filteredFoods.length} aliment(s) trouvé(s):\n`);

      // Affichage formaté
      filteredFoods.forEach((food) => {
        console.log(`━━━━━━━━━━━━━━━━━━━━━━`);
        console.log(`[ => ID: ${food.id}]`);
        console.log(`Nom: ${food.name.toUpperCase()}`);
        console.log(`Catégorie: ${food.category}`);
        console.log(`Prix: ${food.price}€`);
      });

      // STATISTIQUES
      console.log(`\n Statistiques:`);
      console.log(`   • Total d'aliments: ${simplifiedFoods.length}`);
      console.log(`   • Résultats filtrés: ${filteredFoods.length}`);
      console.log(
        `   • Prix min: ${Math.min(...filteredFoods.map((f) => f.price))}€`,
      );
      console.table(sortedByPrice);

      console.log(`\n Statistiques:`);
      console.log(`   • Total d'aliments: ${simplifiedFoods.length}`);
      console.log(`   • Résultats filtrés: ${filteredFoods.length}`);
      console.log(
        `   • Prix min: ${Math.min(...filteredFoods.map((f) => f.price))}€`,
      );
      console.log(
        `   • Prix max: ${Math.max(...filteredFoods.map((f) => f.price))}€`,
      );
    }
  } catch (error) {
    console.error(" Erreur lors de la recherche:", error);
    throw error;
  }
};

// Fonction 3: Application complète avec filtrage avancé
const loadFoodApp = async (searchTerm) => {
  try {
    console.log("\n  Accès à la base de données des aliments...");

    // Récupérer les données de l'API
    const res = await fetch(API_URL);
    const users = await res.json();

    // Transformer les users en foods
    const rawData = transformUsersToFoods(users);

    // TRANSFORMATION (MAP) : nettoyer et préparer les données
    const cleanFoods = rawData.map((food) => ({
      id: food.id,
      name: food.name,
      price: parseFloat(food.price),
      category: food.category,
    }));

    console.log("\n Tous les aliments disponibles:");
    console.table(cleanFoods);

    // Recherche par nom
    const searchedFood = cleanFoods.find(
      (f) => f.name.toLowerCase() === searchTerm.toLowerCase(),
    );

    // Filtrage par catégorie
    const searchedFoodDetails = cleanFoods.filter(
      (f) => f.category.toLowerCase() === searchTerm.toLowerCase(),
    );

    console.log(
      `\n Recherche exacte pour "${searchTerm}":`,
      searchedFood || "Non trouvé",
    );

    if (searchedFoodDetails.length > 0) {
      console.log(`\n Aliments dans la catégorie "${searchTerm}":`);
      console.table(searchedFoodDetails);

      // Bonus: Trier les aliments par prix
      const sortedByPrice = [...searchedFoodDetails].sort(
        (a, b) => a.price - b.price,
      );
      console.log(`\n Statistiques:`);
      console.log(`   • Total d'aliments: ${cleanFoods.length}`);
      console.log(`   • Résultats filtrés: ${searchedFoodDetails.length}`);
      console.log(
        `   • Prix min: ${Math.min(...searchedFoodDetails.map((f) => f.price))}€`,
      );
      console.log(
        `   • Prix max: ${Math.max(...searchedFoodDetails.map((f) => f.price))}€`,
      );
    } else {
      console.log(`\n  Aucune catégorie nommée "${searchTerm}"`);
    }
  } catch (error) {
    console.error(" Erreur lors du chargement de l'application:", error);
    throw error;
  }
};

// ===== EXÉCUTION =====
console.log(" === FOOD EXPLORER APPLICATION === \n");

// Test 1: Récupérer tous les aliments
getFoods();

// Test 2: Explorer par catégorie
runFoodExplorer("dessert");

// Test 3: Application complète
loadFoodApp("dessert");
