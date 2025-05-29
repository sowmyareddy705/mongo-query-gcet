//Assigment
// 1. Change the email address of john to john@outlook.com
// 2. Display top 3 highest paid employees
// 3. Increase the salary of all the employees by 1000
// 4. Insert a new employee to admin department
// 5. Delete all the employees from admin department

// 1
db.employees.updateOne(
  { name: "John Smith" },
  { $set: { email: "john@outlook.com" } }
);
 // 2
 db.employees.find().sort({ salary: -1 }).limit(3);
// 3
db.employees.updateMany({}, { $inc: { salary: 1000 } });
// 4
db.employees.insertOne({
  name: "New Admin",
  email: "admin@company.com",
  department: "admin",
  salary: 3000,
  location: ["NY", "CA"],
  date: new Date()
});
// 5
db.employees.deleteMany({ department: "admin" });