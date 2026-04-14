const fetchUsers = async () => {
  try {
    const response = await fetch("https:jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const smplifiedusers = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      city: user.address.city,
    }));

    console.table(smplifiedusers);
    return smplifiedusers;
  } catch (err) {
    console.error("projet error: ", err.message);
  }
};
fetchUsers();

const runUserDirectory = async (targetCity) => {
  console.log(`fetching users from ${targetCity}...`);
  const reponse = await fetch("https:jsonplaceholder.typicode.com/users");
  const allUsers = await reponse.json();
  const filteredUser = allUsers.filter(
    (user) => user.address.city === targetCity,
  );

  if (filteredUser.length === 0) {
    console.log(`No users found from ${targetCity}`);
  } else {
    filteredUser.forEach((user) => {
      console.log(`[ => ID: ${user.id}]`);
      console.log(
        `Name: ${user.name.toUpperCase()}, Email: ${user.email}, company: ${user.company.name}`,
      );
      console.log(
        `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
      );
    });
  }
};

runUserDirectory("Gwenborough");

const API_URL = "https:jsonplaceholder.typicode.com/users";
const loadUserApp = async (city) => {
  try {
    console.log("trying to access Database ");
    const response = await fetch(API_URL);
    const rawData = await response.json();
    console.table(rawData);
    const cleanUsers = rawData.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      city: user.address.city,
      company: user.company.name,
      address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
    }));

    const searchcity = "roscoeview";
    const results = cleanUsers.filter(
      (user) => user.city.toLowerCase() === searchcity,
    );
    console.log("\n=======");
    console.log(`User results - ${searchcity}: `);
    console.table(results);
  } catch (err) {
    console.error("Error fetching user data: ", err.message);
  }
};
loadUserApp("roscoeview");
