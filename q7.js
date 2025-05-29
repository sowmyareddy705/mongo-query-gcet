db.employees.find({ department: "IT" });
db.employees.find({ department: { $eq: "IT" } });
db.employees.find({ department: { $ne: "IT" } });
db.employees.find({ salary: { $gt: 4000 } });
db.employees.find({ salary: { $lt: 4000 } });
db.employees.find({ salary: { $gte: 2456 } });
db.employees.find({ salary: { $lte: 2456 } });
db.employees.find({ department: { $in: ["HR", "IT"] } });
db.employees.find({ department: { $nin: ["HR", "IT"] } });

db.employees.find({
  $and: [{ salary: { $gt: 3000 } }, { department: { $eq: "IT" } }],
});

db.employees.find({
  $or: [{ salary: { $gt: 3000 } }, { department: { $eq: "HR" } }],
});

db.employees.find({
  $nor: [{ salary: { $gt: 3000 } }, { department: { $eq: "HR" } }],
});

db.employees.find({ salary: { $not: { $lt: 4000 } } });

db.employees.find({ department: { $exists: false } });

db.employees.find({ department: { $exists: true } });

db.employees.find({ name: { $regex: "Cathy" } });

db.employees.find({ name: { $regex: "^C" } });

db.employees.find({ name: { $regex: "G$" } });

