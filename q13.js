db.orders.insertMany([
  {
    empId: ObjectId("683860a0490c4b45407cb256"),
    items: { 1: 3, 3: 2 },
    orderValue: 345,
    status: "pending",
  },
  {
    empId: ObjectId("683860a0490c4b45407cb256"),
    items: { 3: 3, 2: 2 },
    orderValue: 600,
    status: "pending",
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "Ord",
    },
  },
  { $project: { name: 1, "Ord.orderValue": 1 } },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "Ord",
    },
  },
  { $unwind: "$Ord" },
  { $project: { name: 1, "Ord.orderValue": 1 } },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "Ord",
    },
  },
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "Addr",
    },
  },
]);

db.employees.aggregate([
  { $match: { email: "chastity@gmail.com" } },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "Ord",
    },
  },
  { $unwind: "$Ord" },
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "Addr",
    },
  },
  {
    $project: {
      _id: 0,
      name: 1,
      "Addr.residence.city": 1,
      "Ord.orderValue": 1,
      "Ord.status": 1,
    },
  },
]);