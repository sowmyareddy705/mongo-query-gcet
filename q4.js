db.employees.insertMany([
  {
    name: "Brian C",
    email: "brian@gmail.com",
    department: "IT",
    salary: 2256,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Chastity J",
    email: "chastity@gmail.com",
    department: "HR",
    salary: 4556,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

db.employees.find().skip(2);
db.employees.find().limit(2);
db.employees.findOne();
db.employees.find().sort({ name: 1 }); //try -1
db.employees.find({ department: "IT" });
db.employees.find({}, { _id: 0, name: 1, email: 1 });
db.employees.find({ department: "IT" }, { _id: 0, name: 1, email: 1 });
db.employees.find(
  { department: "IT" },
  { _id: false, name: true, email: true }
);
db.employees.countDocuments()
db.employees.find({},{dept:"$department"})
