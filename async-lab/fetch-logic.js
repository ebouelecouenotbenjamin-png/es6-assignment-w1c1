/*//Voici mon rendu pour le devoir de la Semaine 1.
const fetchUserData = async () => {
  console.log("Requete lancee...");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    if (!response.ok) {
      throw new Error(`Erreur serveur ! Statut HTTP : ${response.status}`);
    }
    const user = await response.json();

    console.log(`
 Nom : ${user.name}
 Entreprise : ${user.company.name}
Email : ${user.email}
        `);
    console.log("Requete terminee.");
  } catch (error) {
    console.error(
      `%c  Échec de la récupération des données : ${error.message} , color: red; font-weight: bold`,
    );
  }
};

fetchUserData();

const getFastData = async () => {
  try {
    console.log("Lancement des requêtes parallèles...");
    const [responseUser, responsePost] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
    ]);

    if (!responseUser.ok || !responsePost.ok) {
      throw new Error("L'une des requêtes a échoué.");
    }

    const [user, post] = await Promise.all([
      responseUser.json(),
      responsePost.json(),
    ]);

    console.log(" Les DEUX requêtes sont terminées !");
    console.log(`L'utilisateur ${user.name} a écrit le post : "${post.title}"`);
  } catch (error) {
    console.error("Erreur lors de l'exécution parallèle :", error);
  }
};


1.
Le code de départ essayait de lire la réponse immédiatement, de manière synchrone.
L'API fetch() prend du temps pour aller chercher les données sur le réseau. Dans le code initial, JavaScript 
n'attendait pas que la réponse revienne. La variable `response` contenait une Promesse "en attente" (pending), 
et non les données réelles. Par conséquent, essayer de faire `.json()` ou `.name` dessus a provoqué une erreur 
ou retourné 'undefined'.

2.
Le mot-clé `await` met l'exécution de la fonction asynchrone en pause jusqu'à ce que la Promesse soit résolue 
(ou rejetée). Pendant que la fonction attend les données, l'utilisateur peut toujours scroller, cliquer sur des boutons et interagir avec le reste de la page. Seule la fonction `fetchUserData` est en attente.

3.
L'API `fetch()` est particulière : elle ne déclenche une véritable erreur dans le bloc `catch` que s'il y a un 
problème de réseau (comme une coupure internet) ou si la requête n'a pas pu partir. 
Si le serveur répond avec une erreur comme "404 Not Found" ou "500 Internal Error", fetch() considère que la 
requête a "réussi" techniquement (car le serveur a répondu). Vérifier `response.ok` permet de s'assurer que le 
code de statut HTTP est un vrai succès (entre 200 et 299) avant d'essayer d'extraire les données JSON, ce qui 
évite des crashs plus loin dans le code.
*/

let student1 = {
  name: "marie",
  age: 22,
  city: "yaounde",
  skills: ["javascript", "python", "html", "css"],
};
let student2 = {
  name: "paul",
  age: 25,
  city: "douala",
  skills: ["html", "algorithmique", "css"],
};

const getCity = ({ city }) => city;

const buildProfile = (student = {}, extraSkills) => {
  const { name, age } = student;
  const allSkills = [...student.skills, ...extraSkills];
  return `${name} is ${age} years old and has skills in ${allSkills.join(", ")}.`;
};

const mergeSudents = (student1, student2) => {
  return {
    name: student1.name + " & " + student2.name,
  };
};

const collectName = (...students) => {
  return students.map(({ name }) => name);
};

console.log(buildProfile(student1, ["react", "dom"]));
//console.log(mergeSudents(student1, student2));
console.log(collectName(student1, student2));
