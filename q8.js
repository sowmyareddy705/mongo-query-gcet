db.employees.createIndex({email:1})
db.employees.getIndexes()
 db.employees.dropIndex("email_1")
 db.employees.find({email:'john@gmail.com'}).explain("executionStats")