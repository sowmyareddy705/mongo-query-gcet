db.address.insertMany([
  {
    empId: ObjectId("683860a0490c4b45407cb256"),
    residence: {
      doorNum: "A-135",
      street: "Verdin Ct",
      city: "Columbus",
      state: "OH",
    },
  },
  {
    empId: ObjectId("683725a61ec7a6a977725e42"),
    residence: {
      doorNum: "AH-320",
      street: "Bay Meadows",
      city: "Jacksonville",
      state: "FL",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
  { $match: { email: "chastity@gmail.com" } },
  { $unwind: "$addr" },
  { $project: { name: 1, "addr.residence.city": 1 } },
]);