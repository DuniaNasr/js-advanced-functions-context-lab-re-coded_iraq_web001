/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(emp){
  return {
    firstName: emp[0],
    familyName: emp[1],
    title: emp[2],
    payPerHour: emp[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
}
function createEmployeeRecords(empRows){
  return empRows.map(emp => createEmployeeRecord(emp))
}
function createTimeInEvent(dateStamp){
  const [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type:"TimeIn",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}
function createTimeOutEvent(dateStamp){
  const [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type:"TimeOut",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}
function hoursWorkedOnDate(date){
  const timeIn = this.timeInEvents.find(event => event.date === date);
  const timeOut = this.timeOutEvents.find(event => event.date === date);
  return (timeOut.hour - timeIn.hour)/100 ;
}
function wagesEarnedOnDate(date){
  let pay = hoursWorkedOnDate.call(this, date) * this.payPerHour;
  return parseFloat(pay.toString())
}
function findEmployeeByFirstName(arr, firstName){
  return arr.find(emp => emp.firstName === firstName);
}
function calculatePayroll(arr){
  return arr.reduce((memo, rec) => memo + allWagesFor.call(rec), 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}
6:53
introduction to context
6:53
// Your code here
function createEmployeeRecord(employee){
  return {
    firstName:employee[0],
    familyName:employee[1],
    title:employee[2],
    payPerHour:employee[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
}
function createEmployeeRecords(employeesData){
  return employeesData.map(employeeData => createEmployeeRecord(employeeData))
};
function createTimeInEvent(emp, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    emp.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return emp
}
function createTimeOutEvent(emp, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    emp.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return emp
}
function hoursWorkedOnDate(empRecord, date){
  const inEvent = empRecord.timeInEvents.find(e=> e.date === date);
  const outEvent = empRecord.timeOutEvents.find(e=> e.date === date)
  return (outEvent.hour - inEvent.hour)/100;
}
function wagesEarnedOnDate(emp, date){
    let rawWage = hoursWorkedOnDate(emp, date) * emp.payPerHour;
    return parseFloat(rawWage.toString());
}
function allWagesFor(emp){
    let eligibleDates = emp.timeInEvents.map(e=>e.date);
    let payable = eligibleDates.reduce((memo, d)=>{
        return memo + wagesEarnedOnDate(emp, d)
    }, 0)
    return payable
}
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(rec=>rec.firstName === firstName)
}
function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce((memo, rec) => memo + allWagesFor(rec), 0)
}