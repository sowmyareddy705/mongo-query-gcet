db.employees.aggregate([
  { $group: { _id: "$department", total: { $sum: "$salary" } } },
]);

db.createView("DepartmentSalary", "employees", [
  { $group: { _id: "$department", total: { $sum: "$salary" } } },
]);

db.createView("DepartmentSalary", "employees", [
  { $group: { _id: "$department", total: { $sum: 1 } } },
]);

db.DepartmentSalary.drop()

db.createView("EmpOrders","orders",[
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
])