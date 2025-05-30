db.employees.aggregate([
  {
    $project: {
      name: 1,
      salary: 1,
      grade: { $cond: [{ $gte: ["$salary", 2000] }, "Grade A", "Grade B"] },
    },
  },
]);

db.employees.aggregate([
  {
    $project: {
      name: 1,
      salary: 1,
      grade: {
        $cond: {
          if: { $gt: ["$salary", 2000] },
          then: "Grade A",
          else: "Grade B",
        },
      },
    },
  },
]);

db.employees.aggregate([
    {$project:{name:1,email:1,location:1}},
    {$unwind:"$location"}
])