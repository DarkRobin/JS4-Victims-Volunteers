var disaster = prompt("How many disaster victims?")
var victimName = []
var victimNumber = []
var victimStreet = []


	for (var i = 0; i < disaster; i++){
		victimName.push(prompt("What is the victims name?"));
		victimNumber.push(prompt("Victims phone number?"));
		victimStreet.push(prompt("Victims street name?"));


	}

var volunteers = prompt("How many volunteers?")
var volunteerName = []
var volunteerNumber = []	
var volunteerStreet =[]


	for(var i = 0; i < volunteers; i++){
		volunteerName.push(prompt("What is the volunteers name?"));
		volunteerNumber.push(prompt("Volunteers phone number?"));
		volunteerStreet.push(prompt("Volunteers street name?"))
	}


alert("Victims: " + disaster[0] + "       " + "Volunteers: " + volunteers[0]  + "\nVictims Name: " + victimName + "       "  + "Volunteers: " + volunteerName + "\nVictims Number: " + victimNumber + "Volunteers Number: " + volunteerNumber + "\nVictims Street: " + victimStreet  + "       " + "Volunteers Street" + volunteerStreet);