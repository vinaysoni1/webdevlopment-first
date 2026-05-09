use("CrudDB")

// crud operations in mongodb
db.createCollection("MyCourses")

// create
db.MyCourses.insertOne ({
    "Name":"Vinay Bhai Sahab",
    "Age":22,
    "Course":"Web Development",
    "Duration":"6 Months",
    "Price":10000
})

db.MyCourses.insertMany (
    [
  {
    "Name": "Vinay Bhai",
    "Age": 22,
    "Course": "Web Development",
    "Duration": "6 Months",
    "Price": 10000
  },
  {
    "Name": "Rahul Sharma",
    "Age": 24,
    "Course": "Python Development",
    "Duration": "4 Months",
    "Price": 12000
  },
  {
    "Name": "Aman Verma",
    "Age": 21,
    "Course": "Data Science",
    "Duration": "8 Months",
    "Price": 18000
  },
  {
    "Name": "Sneha Patel",
    "Age": 23,
    "Course": "UI/UX Design",
    "Duration": "5 Months",
    "Price": 15000
  },
  {
    "Name": "Rohit Kumar",
    "Age": 25,
    "Course": "Java Programming",
    "Duration": "6 Months",
    "Price": 14000
  },
  {
    "Name": "Pooja Singh",
    "Age": 22,
    "Course": "Digital Marketing",
    "Duration": "3 Months",
    "Price": 9000
  },
  {
    "Name": "Arjun Mehta",
    "Age": 26,
    "Course": "Machine Learning",
    "Duration": "9 Months",
    "Price": 25000
  },
  {
    "Name": "Neha Gupta",
    "Age": 20,
    "Course": "Graphic Design",
    "Duration": "4 Months",
    "Price": 11000
  },
  {
    "Name": "Karan Joshi",
    "Age": 27,
    "Course": "Cyber Security",
    "Duration": "7 Months",
    "Price": 22000
  },
  {
    "Name": "Priya Nair",
    "Age": 23,
    "Course": "Full Stack Development",
    "Duration": "6 Months",
    "Price": 20
  }
])


// read
// let a = db.MyCourses.find({Price: 10000})
// // console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// let b = db.MyCourses.find({Price: 10000})
// console.log(a)

// update

// let c = db.MyCourses.updateMany({Name: "Vinay Bhai"}, {$set: {Price: 15000}})
// console.log(c)

// let d= db.MyCourses.updateOne({Price: 10000}, {$set: {Price: 15000}})
// console.log(d)

// delete
let e = db.MyCourses.deleteMany({Name: "Vinay Bhai"})
console.log(e)

db.MyCourses.deleteOne({Name: "Rahul Sharma"})

