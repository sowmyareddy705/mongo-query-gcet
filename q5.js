db.employees.updateOne({ email: "john@gmail.com" }, { $set: { age: 23 } });
db.employees.updateMany({}, { $set: { age: 23 } });
db.employees.updateMany({}, { $set: { points: 0 } });
db.employees.updateMany({}, { $inc: { points: 1 } }); //try -1
db.employees.updateMany({}, { $rename: { points: "score" } });
db.employees.updateMany({}, { $unset: { score: "" } });

//updating arrays
db.employees.updateMany(
  { email: "john@gmail.com" },
  { $push: { location: "CL" } }
);
db.employees.updateMany(
  { email: "john@gmail.com" },
  { $addToSet: { location: "CL" } }
);
db.employees.updateMany({ email: "john@gmail.com" }, { $pop: { location: 1 } });

//deleting documents
db.employees.deleteOne({ email: "brian@gmail.com" });
db.employees.deleteMany({ dept: "admin" });


//CRUD Operation
//Create, Read, Update, Delete