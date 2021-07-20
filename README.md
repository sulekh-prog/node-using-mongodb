# Using MongoDB with NodeJS Project

Make sure you have MongoDB and NodeJS installed on your system prior to start this project.

## Setup steps

1. Install MongoDB community: https://www.mongodb.com/download-center/community
2. Install NodeJS: https://nodejs.org/en/download/

## Run & Test

1. Run `npm start` first to make sure your project is started succesfully
2. Run `npm test` to test everything

for single item
app.get("/person/:people", (req, res) => {
const person = req.params.people;
if (people.includes(person.Id)) {
console.log("requested person:", person);
res.status(200).send(person);
} else {
console.log("error:404 user not added");
res.status(404).send("user not found");
}
});
