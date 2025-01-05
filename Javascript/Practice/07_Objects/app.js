let student = {
  id: 1,
  name: "neha",
  isPassed: true,
};

console.log(student);
console.log(student.id);

//using constructor

let employee = new Object();
employee.id = 101;
employee.name = "rahul";
employee.salary = 40000;

console.log(employee);

//json object memeber as a function

let emp = {
  name: "akash",
  city: "pune",
  role: function () {
    console.log("Role of employee is software engineer");
  },
};

console.log(emp.city);
emp.role();

let emp1 = {
  id: 1,
  name: "swara",
  info: () => {
    return emp1.id + " " + emp1.name;
  },
};

console.log(emp1.info());

let data = {
  branch: "cse",
  branchId: 1234,

  display() {
    console.log("Branch & Branch Id is:", this.branch, this.branchId);
  },
};

data.display();
