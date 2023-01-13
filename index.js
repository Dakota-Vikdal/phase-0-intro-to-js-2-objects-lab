// Write your solution in this file!
const employee = {
    name:"Nathalie",
    streetAddress: "Rusty Allen",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Vandaer");



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmploy= {...employee};
    delete newEmploy[key];
    return newEmploy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
