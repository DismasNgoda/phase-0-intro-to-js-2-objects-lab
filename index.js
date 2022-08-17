// Write your solution in this file!
let employee = {name: "Sam", streetAddress: "Nairobi"};
function updateEmployeeWithKeyAndValue(obj, key, value){
    const employee1 = {...obj};
    employee1[key] = '11 Broadway';
    
    return employee1;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee.streetAddress = '12 Broadway';
    return employee;
};

function deleteFromEmployeeByKey(obj, key){
    let newEmployee = {...obj}
    delete newEmployee['name'];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}



