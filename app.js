var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function employeeObjMaker(name, empNumber, currentSalary, rating){
	this.name = name;
	this.empNumber = empNumber;
	this.currentSalary = currentSalary;
	this.rating = rating;
}

function calculateSTI(empInfo) {
	var name = this.name;
	var empNumber = this.empNumber;
	var currentSalary = Math.round(parseFloat(this.currentSalary));
	var rating = this.rating;
	
	var processedEmployee = {};
	var bonus = 0;
	var bonusPercentage = 0;
	var adjSalary = currentSalary;	// base + STI
	var totalBonus = bonus;

	// calc sti
	switch(rating) {
		case 0:
		case 1:
		case 2:
			bonusPercentage = 0;
			break;
		case 3:
			bonusPercentage = .04;
			break;
		case 4:
			bonusPercentage = .06;
			break;
		case 5:
			bonusPercentage = .10;
			break;
		default:
			bonusPercentage = 0;
	}

	bonusPercentage = adjustBonusPercentage(empNumber, bonusPercentage, currentSalary);
	
	// build processed array
	processedEmployee.name = name;
	processedEmployee.bonusPercentage = bonusPercentage;

	bonus = Math.round(bonusPercentage * currentSalary);
	adjSalary = currentSalary + bonus;

	processedEmployee.adjSalary = adjSalary;
	processedEmployee.bonus = bonus;

	return processedEmployee;
}

function adjustBonusPercentage(empNumber, bonusPercentage, currentSalary) {
	if(empNumber.length == 4) {
		bonusPercentage += .05;
	}

	if(currentSalary > 65000) {
		bonusPercentage -= .01;
	}

	if(bonusPercentage > .13) {
		bonusPercentage = .13;
	}

	return bonusPercentage;
}

for(var i = 0; i < employees.length; i++) {
	employeeObjMaker.apply(employees[i]);
	console.log(calculateSTI(employees[i]));

}