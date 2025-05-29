db.employees.aggregate([
  { $match: { department: "IT" } },
  { $project: { name: 1, email: 1 } },
  { $sort: { name: 1 } },
  { $skip: 1 },
  { $limit: 1 },
]);

db.employees.aggregate([
  { $group: { _id: "$department", total: { $sum: "$salary" } } },
]);

db.employees.aggregate([
  { $project: { name: 1, email: 1,salary:1 } },
  { $addFields: { Bonus: { $multiply: ["$salary", 2] } } },
]);
