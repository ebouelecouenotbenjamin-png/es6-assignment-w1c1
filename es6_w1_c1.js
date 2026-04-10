console.log("I am present");
const X = "global";
function test() {
  const X = "local";
  console.log(X);
}
test();
console.log(X);

/*const user = { name: "stella", age: 25 };

console.log(user.age);

let score = 0;
for (let i = 0; i <= 3; i++) {
  score += i;
  console.log(score);
}

function greet(name) {
  return "Hello ," + name;
}
greet("benj");
console.log("benj");

const num = [1, 2, 3];
const doubled = num.map(function (n) {
  return n * 2;
});
console.log(doubled);

const greet = (name) => {
  return "Hello , " + name;
};
console.log(greet("benj")); 

const user = {
  name: "ben",
  age: 23,
  city: "yaounde",
};

const { name, age, city } = user;
const { city: location } = user;

const array = [1, 2, 3, ...20];
const [first, second, third, ...rest] = Array;

function card({ ingredients, name, description = "unknown" }) {
  return ing;
}

double = (A) => A * 2;
let result = double(4);

console.log(result);
*/
