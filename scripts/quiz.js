// Global variables
let countdownIntervalId;
let score = 0;
const totalQuestions = 5;

// Object containing correct answers for each question
const correctAnswers = {
    question1: "option-1-2",
    question2: "option-2-4",
    question3: "option-3-1",
    question4: "option-4-2",
    question5: "option-5-4",
};

function startQuiz() {
    /* initalise quiz, by hiding the title and start button, display the first question and next button */
    document.getElementById("quiz-title").style.display = "none";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("question1").style.display = "block";
    document.getElementById("next-1").style.display = "block";
    // Start the countdown timer and load the progress bar
    countdownIntervalId = startCountdown();
    score = 0; // Reset the score
}


function startCountdown() {
    /* initialize the countdown timer, create a countdown interval for each question.
    libaries: https://sweetalert2.github.io/ 
    references: https://sweetalert2.github.io/#usage , 
    https://www.w3schools.com/jsref/met_win_setinterval.asp
    https://www.w3schools.com/jsref/met_win_clearinterval.asp
    */
    const countdown = document.getElementById('countdown');
    const countdownNumber = document.getElementById('countdown-number');
    let time = 11;
    countdown.style.display = "flex";

    // Set up the countdown interval
    const countdownInterval = setInterval(() => {
        time--;
        countdownNumber.innerHTML = time;
        // Display a message and end the quiz if time runs out
        if (time === 0) {
            clearInterval(countdownInterval);
            Swal.fire({
                icon: 'error',
                title: 'Time Up!',
                text: 'You ran out of time.',
                confirmButtonText: 'Start Again',
                position: 'bottom',
                customClass: {
                    popup: 'swal-popup'
                },
            }).then(() => {
                endQuiz();
            });
        }
    }, 1000);

    return countdownInterval;
}

function nextQuestion(currentQuestionId, nextQuestionId, currentNextButtonId, nextNextButtonId) {
    /* initialize the next question, create a function to move to the next question.
    libaries: https://sweetalert2.github.io/
    references: https://sweetalert2.github.io/#usage
    https://www.w3schools.com/jsref/jsref_slice_array.asp
    */
    if (!nextQuestionId) {
        displayCompletionMessage();
        return;
    }

    clearInterval(countdownIntervalId); // Clear the countdown interval

    // Hide the current question and show the next one
    document.getElementById(currentQuestionId).style.display = "none";
    document.getElementById(nextQuestionId).style.display = "block";

    // Hide the current "Next" button and show the next one
    document.getElementById(currentNextButtonId).style.display = "none";
    document.getElementById(nextNextButtonId).style.display = "block";
    countdownIntervalId = startCountdown();

    // Update the question number and load the progress bar
    const questionNumber = parseInt(nextQuestionId.slice(-1));
}



function displayCompletionMessage() {
    /*display the completion message, create a function to display the final score.*/
    document.getElementById("quiz-complete").style.display = "flex";
    viewScore();
}

function viewScore() {
    /*display final score html elements*/
    document.getElementById("score").innerHTML = score;
    document.getElementById("score-message").style.display = "block";
    document.getElementById("correct-answers").innerHTML = score;
    document.getElementById("end-quiz").style.display = "block";
}


function endQuiz() {
    /*Removes timer and progres bar elements, resets the quiz to start again*/
    clearInterval(countdownIntervalId); // Clear the countdown interval

    // Loops through all questions and hides them
    for (let i = 1; i <= totalQuestions; i++) {
        document.getElementById(`question${i}`).style.display = "none";
        document.getElementById(`next-${i}`).style.display = "none";
    }
    // Hide completion message, score, and "End Quiz" button
    document.getElementById("quiz-complete").style.display = "none";
    document.getElementById("score-message").style.display = "none";
    document.getElementById("end-quiz").style.display = "none";

    // Show the title and start button to restart the quiz
    document.getElementById("quiz-title").style.display = "block";
    document.getElementById("start-button").style.display = "block";
}


function checkAnswer(questionId, correctAnswer) {
    /*uses correct answers object to check if the selected answer is correct,
    increment score if correct, display a message if correct or incorrect,
    display a message if no answer is selected
    references: https://sweetalert2.github.io/ */
    const selectedOption = document.getElementsByName(questionId);
    let selected = false;

    // Loop through the selected options to check if an answer is selected
    for (let i = 0; i < selectedOption.length; i++) {
        if (selectedOption[i].checked) {
            selected = true;
            if (selectedOption[i].id === correctAnswer) {
                score++; // Increment score if answer is correct
                Swal.fire({
                    icon: 'success',
                    title: 'Correct!',
                    text: 'You selected the correct answer.',
                    confirmButtonText: 'Next',
                    position: 'bottom',
                    customClass: {
                        popup: 'swal-popup'
                    },
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrect!',
                    text: 'You selected the wrong answer.',
                    confirmButtonText: 'Next',
                    position: 'bottom',
                    customClass: {
                        popup: 'swal-popup'
                    },
                });
            }
            break;
        }
    }
}

function assignEventListeners(totalQuestions) {
    /* This function assigns event listeners to the "Next" button for each question */

    for (let i = 1; i <= totalQuestions; i++) {
        // Get the "Next" button element for the current question
        const nextButton = document.querySelector('[id="next-' + i + '"]');
        
        // Add a click event listener to the "Next" button
        nextButton.addEventListener("click", function() {
            console.log("Question " + i + " Next button clicked")
            const questionId = 'question' + i;
            const correctAnswer = correctAnswers[questionId];
            checkAnswer(questionId, correctAnswer);
            
            // Move to the next question if not the last one
            if (i < totalQuestions) {
                const nextQuestionId = 'question' + (i + 1);
                const currentNextButtonId = 'next-' + i;
                const nextNextButtonId = 'next-' + (i + 1);
                nextQuestion(questionId, nextQuestionId, currentNextButtonId, nextNextButtonId);
            } else {
                // Display completion message if it's the last question
                nextQuestion(questionId, "quiz-complete");
            }
        });
    }
}

// Call the function to assign event listeners
assignEventListeners(totalQuestions);