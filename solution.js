// ici nous utilisons les let parce que les informations sur le student peuvent etre modifié plus loin dans le code
let student1 = {
  name: "Marie",
  age: 22,
  city: "Yaounde",
  skills: ["HTML", "CSS"],
};

let student2 = {
  name: "Paul",
  age: 25,
  city: "Douala",
  skills: ["Python", "SQL"],
};

// nous utilisons les const ici parce que chaque etudiant aura un nom unique ainsi que son age
// on a utilisé la destructuration ici pour eviter d'acceder directement a student
const getCity = ({ city }) => city;
// on a utilisé la destructuration ici pour eviter d'acceder
// on a utilisé les littéral de gabarit pour rendre le code plus lisible et facilite la concatenation des chaines de caracteres
const buildProfile = (student, extraSkills) => {
  const { name, age } = student;
  const allSkills = [...student.skills, ...extraSkills];
  return `nom: ${name}, age: ${age} ans, de  ${getCity(student)}, matieres:  ${allSkills.join(", ")}`;
};
const mergeStudents = (s1, s2) => {
  return {
    name: `${s1.name} & ${s2.name}`,
    city: "Cameroun",
  };
};

const collectNames = (...students) => {
  return students.map(({ name }) => name);
};

console.log(buildProfile(student1, ["JavaScript", "React"]));
console.log(mergeStudents(student1, student2));
console.log(collectNames(student1, student2));
