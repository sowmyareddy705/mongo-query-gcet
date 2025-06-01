db.orders.aggregate([
  {
    $lookup: {
      from: "employees",           
      localField: "empId",         
      foreignField: "_id",        
      as: "empOrderDetails"
    }
  },
  {
    $unwind: "$empOrderDetails"
  },
  {
    $group: {
      _id: {
        name: "$empOrderDetails.name",
        email: "$empOrderDetails.email"
      },
      totalOrderValue: { $sum: "$orderValue" }
    }
  },
  {
    $project: {
      _id: 0,
      name: "$_id.name",
      email: "$_id.email",
      totalOrderValue: 1
    }
  }
]);