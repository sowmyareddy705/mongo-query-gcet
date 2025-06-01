//use admin

db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [{ role: "root", db: "admin" }],
});

//C:\Program Files\MongoDB\Server\7.0\bin

//open mongod.cfg file and add following lines

security: 
  authorization: enabled;

//go to services and restart mongodb server

//>mongosh --username admin --authenticationDatabase admin

//use gcet

db.createUser({
  user: "john",
  pwd: "1234",
  roles: [{ role: "read", db: "gcet" }],
});

db.getUsers();

exit

//>mongosh --username john --authenticationDatabase gcet

//following query will fail for john
db.employees.updateOne({ email: "mike@gmail.com" }, { $set: { salary: 23 } });

 db.dropUser("john")

 open mongodb compass

 mongodb: //admin:admin@localhost:27017