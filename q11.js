db.employees.aggregate([
  {
    $unwind: {
      path: "$location",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $project: {
      name: 1,
      email: 1,
      location: 1,
      salary: 1,
      age: 1,
      annualSalary: { $multiply: ["$salary", 12] },
      band: {
        $cond: {
          if: { $gt: ["$age", 40] },
          then: "BAND A",
          else: "BAND B"
        }
      }
    }
  },
  {
    $sort: { salary: -1 }
  },
  {
    $limit: 3
  }
]);
