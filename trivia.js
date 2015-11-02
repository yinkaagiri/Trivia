// Create array of trivia data
	var TriviaData = new Array(10)
	createTwoDimensionalArray(3);

	// Track questions and user result

	var questionsAsked = 0;
	var totalCorrect = 0;
	var currentQuestion = 0;
	var selectionValid = false;

	// Set questions and correct answers in the array created
  // questions:
	TriviaData[0][0] = "In Portugal you can be fined if caught driving whilst wearing flip-flops or not wearing a shirt";
			 TriviaData[1][0] = "Drinking alcohol kills brain cells.";
			 TriviaData[2][0] = "A human body has enough iron in it to make a nail 7.5 cm (3 in.) long.";
			 TriviaData[3][0] = "Adults have fewer bones than babies do.";
			 TriviaData[4][0] = "Halloween originally marked the end of harvest.";
			 TriviaData[5][0] = "An inferno is a unit of heat equal to 1 billion K (about 1 billion °C).";
			 TriviaData[6][0] = "The Russian parliament building in Moscow is called the White House.";
			 TriviaData[7][0] = "Halloween is the largest commercial holiday.";
			 TriviaData[8][0] = "Sneezes regularly exceed 100 m.p.h.";
			 TriviaData[9][0] = "Antarctica has more annual precipitation than the Sahara desert.";

			 // Answers to questions
			 TriviaData[0][1] = "true";
			 TriviaData[1][1] = "false";
			 TriviaData[2][1] = "true";
			 TriviaData[3][1] = "true";
			 TriviaData[4][1] = "true";
			 TriviaData[5][1] = "true";
			 TriviaData[6][1] = "true";
			 TriviaData[7][1] = "false";
			 TriviaData[8][1] = "true";
			 TriviaData[9][1] = "false";

			 // Has question been asked ?
			 // necessary because we are asking in random order
			 TriviaData[0][2] = "no";
			 TriviaData[1][2] = "no";
			 TriviaData[2][2] = "no";
			 TriviaData[3][2] = "no";
			 TriviaData[4][2] = "no";
			 TriviaData[5][2] = "no";
			 TriviaData[6][2] = "no";
			 TriviaData[7][2] = "no";
			 TriviaData[8][2] = "no";
			 TriviaData[9][2] = "no";

	setQuestion();

	// Sets question text and indicator to know question has been displayed
	function setQuestion() {
		selectionValid = false;
		while (selectionValid == false) {
			currentQuestion = Math.floor(Math.random() * 10);
			if (TriviaData[currentQuestion][2] == "no") {
				selectionValid = true;
			}
		}
		document.getElementById("TriviaQuestion").innerHTML = TriviaData[currentQuestion][0];
		TriviaData[currentQuestion][2] = "yes";
		questionsAsked = questionsAsked + 1;
	}

	function processAnswer(myAnswer) {
		if (TriviaData[currentQuestion][1] == myAnswer) {
			// answer correct
			totalCorrect = totalCorrect + 1;
		}
	}

	// creates two dimensional array
	function createTwoDimensionalArray(arraySize) {
		for (i = 0; i < TriviaData.length; i++)
		TriviaData[i] = new Array(arraySize);
	}

	// Check answer, update result and randomly select next question
	function checkAnswer() {
		if (document.getElementById("RadioTrue").checked) {
			processAnswer("true");
		}
		else {
			processAnswer("false");
		}
		// get next question if it has not been asked all
		if (questionsAsked < 10) {
			setQuestion();
		}
		// last question displayed - disable button and show final results
		else {
			alert("Quiz complete! You got " + totalCorrect + " correct out of 10.");
			document.getElementById("ButtonContinue").disabled = true;
		}
		// update result
		document.getElementById("NumberAsked").innerHTML = questionsAsked;
		document.getElementById("NumberCorrect").innerHTML = totalCorrect;
	}

// reset button to refresh game 




// var question1 = {
//   text: "What is the capital?",
//   answer: "Washington, DC"
// };
//
// var question2 = {
//   text: "What is the capital of Virgina?",
//   answer: "Richmond"
// };
//
// var questions = [question1, question2, question3]
//
// currentNumber = 0;
// questions[currentNumber]
