// ==========================================
// GENERAL KNOWLEDGE EXAM
// ==========================================

const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: 1
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "B. R. Ambedkar"],
        answer: 2
    },
    {
        question: "Which is the largest planet in our Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "Which is the longest river in India?",
        options: ["Yamuna", "Ganga", "Godavari", "Narmada"],
        answer: 1
    },
    {
        question: "Who wrote the Indian National Anthem?",
        options: [
            "Rabindranath Tagore",
            "Bankim Chandra Chattopadhyay",
            "Sarojini Naidu",
            "Subhash Chandra Bose"
        ],
        answer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        answer: 1
    },
    {
        question: "What is the national animal of India?",
        options: ["Lion", "Elephant", "Tiger", "Leopard"],
        answer: 2
    },
    {
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: 2
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: 2
    },
    {
        question: "Who was the first President of India?",
        options: [
            "Dr. Rajendra Prasad",
            "Dr. S. Radhakrishnan",
            "Jawaharlal Nehru",
            "Zakir Husain"
        ],
        answer: 0
    },
    {
        question: "Which is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: 2
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar"],
        answer: 2
    },
    {
        question: "Which organ pumps blood throughout the human body?",
        options: ["Brain", "Heart", "Lungs", "Kidney"],
        answer: 1
    },
    {
        question: "How many states are there in India?",
        options: ["26", "27", "28", "29"],
        answer: 2
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Lion", "Cheetah", "Tiger", "Horse"],
        answer: 1
    },
    {
        question: "Who discovered gravity?",
        options: [
            "Albert Einstein",
            "Galileo Galilei",
            "Isaac Newton",
            "Nikola Tesla"
        ],
        answer: 2
    },
    {
        question: "Which is the largest desert in the world?",
        options: [
            "Sahara Desert",
            "Gobi Desert",
            "Arabian Desert",
            "Antarctic Desert"
        ],
        answer: 3
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Fe", "Cu"],
        answer: 1
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: 1
    },
    {
        question: "Who was the first person to walk on the Moon?",
        options: [
            "Yuri Gagarin",
            "Neil Armstrong",
            "Buzz Aldrin",
            "Michael Collins"
        ],
        answer: 1
    },
    {
        question: "Which is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: 1
    },
    {
        question: "Which Indian city is known as the Pink City?",
        options: ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
        answer: 0
    },
    {
        question: "How many players are there in a cricket team?",
        options: ["9", "10", "11", "12"],
        answer: 2
    },
    {
        question: "Which is the hardest natural substance?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        answer: 2
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["50°C", "75°C", "100°C", "150°C"],
        answer: 2
    },
    {
        question: "Which is the national flower of India?",
        options: ["Rose", "Lotus", "Sunflower", "Jasmine"],
        answer: 1
    },
    {
        question: "Which Indian state has the longest coastline?",
        options: ["West Bengal", "Tamil Nadu", "Gujarat", "Kerala"],
        answer: 2
    },
    {
        question: "What is the full form of CPU?",
        options: [
            "Central Processing Unit",
            "Computer Processing Unit",
            "Central Program Unit",
            "Computer Program Utility"
        ],
        answer: 0
    },
    {
        question: "Which is the largest continent?",
        options: ["Africa", "Europe", "Asia", "North America"],
        answer: 2
    }
];


// ==========================================
// LOGIN PAGE
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document
            .getElementById("email")
            .value
            .trim()
            .toLowerCase();

        const message = document.getElementById("message");

        if (email === "") {
            message.textContent = "Please enter your email.";
            return;
        }

        const attempted = localStorage.getItem("exam_" + email);

        if (attempted === "completed") {
            message.textContent = "This email has already completed the exam.";
            return;
        }

        localStorage.setItem("currentEmail", email);

        // Save exam start time
        localStorage.setItem("examStartTime", Date.now());

        window.location.href = "exam.html";
    });
}


// ==========================================
// EXAM PAGE - DISPLAY QUESTIONS
// ==========================================

const questionContainer = document.getElementById("questions");

if (questionContainer) {

    questions.forEach(function (item, index) {

        const questionBox = document.createElement("div");

        questionBox.className = "question-box";

        questionBox.innerHTML = `
            <h3>${index + 1}. ${item.question}</h3>

            <label>
                <input type="radio"
                       name="question${index}"
                       value="0">
                ${item.options[0]}
            </label>

            <label>
                <input type="radio"
                       name="question${index}"
                       value="1">
                ${item.options[1]}
            </label>

            <label>
                <input type="radio"
                       name="question${index}"
                       value="2">
                ${item.options[2]}
            </label>

            <label>
                <input type="radio"
                       name="question${index}"
                       value="3">
                ${item.options[3]}
            </label>
        `;

        questionContainer.appendChild(questionBox);
    });
}


// ==========================================
// 40 MINUTE TIMER
// ==========================================

const timerElement = document.getElementById("timer");

if (timerElement) {

    let startTime = Number(localStorage.getItem("examStartTime"));

    if (!startTime) {
        startTime = Date.now();
        localStorage.setItem("examStartTime", startTime);
    }

    const totalTime = 40 * 60 * 1000;

    function updateTimer() {

        const currentTime = Date.now();

        const elapsed = currentTime - startTime;

        const remaining = totalTime - elapsed;

        if (remaining <= 0) {

            timerElement.textContent = "00:00";

            clearInterval(timerInterval);

            alert("Time is over! Your exam will be submitted.");

            const form = document.getElementById("examForm");

            if (form) {
                form.requestSubmit();
            }

            return;
        }

        const totalSeconds = Math.floor(remaining / 1000);

        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        timerElement.textContent =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");
    }

    updateTimer();

    const timerInterval = setInterval(updateTimer, 1000);
}


// ==========================================
// SUBMIT EXAM + CHECK ANSWERS
// ==========================================

const examForm = document.getElementById("examForm");

if (examForm) {

    examForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let score = 0;

        questions.forEach(function (item, index) {

            const selected = document.querySelector(
                `input[name="question${index}"]:checked`
            );

            if (selected) {

                const selectedAnswer = Number(selected.value);

                if (selectedAnswer === item.answer) {
                    score++;
                }
            }
        });

        const email = localStorage.getItem("currentEmail");

        if (!email) {
            alert("Email not found. Please login again.");
            window.location.href = "index.html";
            return;
        }

        // Mark this email as completed
        localStorage.setItem("exam_" + email, "completed");

        // Save result
        localStorage.setItem("examScore", score);
        localStorage.setItem("examTotal", questions.length);

        // Go to result
        window.location.href = "result.html";
    });
}


// ==========================================
// RESULT PAGE
// ==========================================

const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");

if (scoreElement && percentageElement) {

    const score = Number(
        localStorage.getItem("examScore")
    ) || 0;

    const total = Number(
        localStorage.getItem("examTotal")
    ) || 30;

    const percentage =
        Math.round((score / total) * 100);

    scoreElement.textContent =
        score + " / " + total;

    percentageElement.textContent =
        "Percentage: " + percentage + "%";
}


// ==========================================
// BACK TO HOME
// ==========================================

function goHome() {

    window.location.href = "index.html";
}