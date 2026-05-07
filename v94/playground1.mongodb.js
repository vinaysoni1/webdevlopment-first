
use('SigmaDateBase');

// Insert a few documents into the Courses collection to work with.
db.getCollection('courses').insertMany(
  [
  {
    "name": "JAVA",
    "price": 20000,
    "Owner": "vinay soni"
  },
  {
    "name": "Python",
    "price": 18000,
    "Owner": "Rahul Sharma"
  },
  {
    "name": "ReactJS",
    "price": 22000,
    "Owner": "Anjali Verma"
  },
  {
    "name": "NodeJS",
    "price": 25000,
    "Owner": "Amit Patel"
  },
  {
    "name": "MongoDB",
    "price": 15000,
    "Owner": "Sneha Gupta"
  },
  {
    "name": "Spring Boot",
    "price": 30000,
    "Owner": "Rohit Jain"
  },
  {
    "name": "Angular",
    "price": 21000,
    "Owner": "Karan Mehta"
  },
  {
    "name": "Docker",
    "price": 27000,
    "Owner": "Priya Singh"
  },
  {
    "name": "Kubernetes",
    "price": 35000,
    "Owner": "Deepak Yadav"
  },
  {
    "name": "AWS",
    "price": 40000,
    "Owner": "Neha Kapoor"
  }
]);



// Print a message to the output window.
console.log(`Done inserting Data`);