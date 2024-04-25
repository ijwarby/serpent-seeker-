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
    /* function to start the quiz , hides the start button and displays the first question, 
    starts the countdown timer and resets score. */
    document.getElementById("quiz-title").style.display = "none";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("question1").style.display = "block";
    document.getElementById("next-1").style.display = "block";
    countdownIntervalId = startCountdown();
    score = 0; 
    hideScoreMessage(); 
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
    /* initialize the next question, hides the current question and displays the next question,
    hides the current "Next" button and shows the next one, starts the countdown timer.
    libaries: https://sweetalert2.github.io/
    references: https://sweetalert2.github.io/#usage
    https://www.w3schools.com/jsref/jsref_slice_array.asp
    */

    clearInterval(countdownIntervalId); 
    document.getElementById(currentQuestionId).style.display = "none";
    document.getElementById(nextQuestionId).style.display = "block";
    document.getElementById(currentNextButtonId).style.display = "none";
    document.getElementById(nextNextButtonId).style.display = "block";
    countdownIntervalId = startCountdown();
}

function viewScore() {
    /* display final score html elements */
    const scoreValue = document.getElementById("score");
    scoreValue.innerText = score;
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score-message").style.display = "block";
    document.getElementById("view-score").style.display = "none";
    document.getElementById("end-quiz").style.display = "block"; // Show End Quiz button
}

function endQuiz() {
    /* Removes timer and progress bar elements, resets the quiz */
    clearInterval(countdownIntervalId); // Clear the countdown interval
    // Loops through all questions and hides them
    for (let i = 1; i <= totalQuestions; i++) {
        document.getElementById(`question${i}`).style.display = "none";
        document.getElementById(`next-${i}`).style.display = "none";
    }

    // Hide elements 
    document.getElementById("quiz-complete").style.display = "none";
    document.getElementById("end-quiz").style.display = "block"; // Show End Quiz button
    document.getElementById("countdown").style.display = "none";

    // Show the title and start button to restart the quiz
    document.getElementById("quiz-title").style.display = "block";
    document.getElementById("start-button").style.display = "block";
    hideScoreMessage(); // Hide the score message
}

function checkAnswer(questionId, correctAnswer) {
     /*uses correctAnswers object to check if the selected answer is correct,
    increment score if correct, display a message if correct or incorrect,
    display a message if no answer is selected
    references: https://sweetalert2.github.io/ */
    const selectedOption = document.getElementsByName(questionId);
    let selected = false;

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

function assignEventListeners() {
    // Assign event listeners to next buttons for each question
    for (let i = 1; i <= totalQuestions; i++) {
        const nextButton = document.querySelector(`#next-${i}`);
        nextButton.addEventListener("click", function() {
            const questionId = `question${i}`;
            const correctAnswer = correctAnswers[questionId];
            checkAnswer(questionId, correctAnswer);
            if (i < totalQuestions) {
                const nextQuestionId = `question${i + 1}`;
                const currentNextButtonId = `next-${i}`;
                const nextNextButtonId = `next-${i + 1}`;
                nextQuestion(questionId, nextQuestionId, currentNextButtonId, nextNextButtonId);
            } else {
                nextQuestion(questionId, "quiz-complete", `next-${i}`, null);
                displayCompletionMessage(); // Display completion message
                viewScore(); // Show score and End Quiz button
            }
        });
    }
}

// Call the function to assign event listeners
assignEventListeners(totalQuestions);

function hideScoreMessage() {
    /* Hide the score message */
    document.getElementById("score-container").style.display = "none";
    document.getElementById("score-message").style.display = "none";
    document.getElementById("view-score").style.display = "block"; // Show View Score button
    document.getElementById("end-quiz").style.display = "none"; // Hide End Quiz button
}

function displayCompletionMessage() {
    /* Display completion message */
    document.getElementById("quiz-complete").style.display = "block";
}
