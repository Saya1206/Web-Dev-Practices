let student = {
  id: 1,
  name: "neha",
  isPassed: true,
};

//return keys

let keys = Object.keys(student);
console.log(keys);

//return values

let values = Object.values(student);
console.log(values);

//return key/value pairs

let entries = Object.entries(student);
console.log(entries);

//check whether a key is present or not (using in)

console.log("name" in student); //true
console.log("roll" in student); //false

//freeze() : Prevents modification of properties

let obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 5; // Will not change
console.log(obj.a); // Output: 1

//Adding Properties

let emp = {
  name: "sakshi",
  id: 2,
};

emp.city = "kolhapur";
emp.salary = 50000;

console.log(emp);

//Updating Properties

emp.name = "ajay";
emp.city = "pune";

console.log(emp);

//Deleting Properties

delete emp.id;
console.log(emp);
