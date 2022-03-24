// Write your solution in this file!
const employee = {
    name: "Adam",
    streetAddress: "Street",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeNew = {...employee};
    employeeNew[key] = value
    return employeeNew;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeWow = {...employee};
    delete employeeWow[key]; 
    return employeeWow;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}