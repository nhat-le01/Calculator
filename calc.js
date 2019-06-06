var stack = "";
var operations = [];
var start_new = false;
var current_numbers = [];


$("#button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9, #button0").click(function(){
	if (operations.length != 0) {
		if (start_new) {
			current_numbers.push(Number(stack));
			stack = "";
			stack += this.value;
			start_new = false;
		}
		else {
			stack += this.value;
		}
	}
	else {
		var val = this.value;
		stack += val;
	}
	
	$("#display").val(stack);
});
$("#clearButton").click(function() {
	stack = "";
	operations = [];
	start_new = false;
	current_numbers = [];
	$("#display").val(stack);
});

$("#divideButton, #subtractButton, #addButton, #multiplyButton").click(function(){
	start_new = true;
	if (operations.length != 0 && current_numbers.length != 0) {
		//need to do some calculation here
		current_numbers.push(Number(stack));
		var result;
		var last = operations.length - 1;
		var last_number_index = current_numbers.length - 1;
		operations[last] = String(operations[last]);
		if (operations[last] === "addButton" ){
			result = current_numbers[last_number_index - 1] + current_numbers[last_number_index];
		}
		else if (operations[last] === "subtractButton") {
			result = current_numbers[last_number_index - 1] - current_numbers[last_number_index];
		}
		else if (operations[last] === "multiplyButton") {
			result = current_numbers[last_number_index - 1] * current_numbers[last_number_index];
		}
		else {
			result = current_numbers[last_number_index - 1] / current_numbers[last_number_index];
		}
		current_numbers.pop();
		current_numbers.pop();
		stack = result;
		start_new = true;
		operations.push(this.id);
		$("#display").val(result);
	}
	else {
		operations.push(this.id);
	}
	

	
});

$("#equalsButton").click(function() {
	if (operations.length != 0 && current_numbers.length != 0) {
		current_numbers.push(Number(stack));
		var result;
		var last = operations.length - 1;
		var last_number_index = current_numbers.length - 1;
		operations[last] = String(operations[last]);
		if (operations[last] === "addButton" ){
			result = current_numbers[last_number_index - 1] + current_numbers[last_number_index];
		}
		else if (operations[last] === "subtractButton") {
			result = current_numbers[last_number_index - 1] - current_numbers[last_number_index];
		}
		else if (operations[last] === "multiplyButton") {
			result = current_numbers[last_number_index - 1] * current_numbers[last_number_index];
		}
		else {
			result = current_numbers[last_number_index - 1] / current_numbers[last_number_index];
		}
		current_numbers.pop();
		current_numbers.pop();
		stack = result;
		start_new = true;
		

		$("#display").val(result);
		
	}
	else {
		$("#display").val(Number(stack));
	}
	
});
