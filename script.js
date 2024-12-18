const quizData = {
  science: [
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "100°C" },
    { question: "What is the primary gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen" },
    { question: "Who is known as the father of modern physics?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"], answer: "Albert Einstein" },
    { question: "What is the chemical formula for salt?", options: ["H2O", "NaCl", "CO2", "O2"], answer: "NaCl" },
    { question: "Which gas do plants absorb from the air?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "What is the most abundant element in the universe?", options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"], answer: "Hydrogen" },
    { question: "What is the boiling point of water in Fahrenheit?", options: ["212°F", "100°F", "150°F", "300°F"], answer: "212°F" }
  ],
  sports: [
    { question: "Which sport is known as the 'king of sports'?", options: ["Football", "Cricket", "Basketball", "Tennis"], answer: "Football" },
    { question: "Who won the FIFA World Cup in 2018?", options: ["France", "Germany", "Brazil", "Spain"], answer: "France" },
    { question: "How many players are on a basketball team?", options: ["5", "7", "9", "11"], answer: "5" },
    { question: "In which sport would you perform a slam dunk?", options: ["Football", "Basketball", "Tennis", "Baseball"], answer: "Basketball" },
    { question: "Who holds the record for the most home runs in Major League Baseball?", options: ["Babe Ruth", "Barry Bonds", "Hank Aaron", "Alex Rodriguez"], answer: "Barry Bonds" },
    { question: "Which country won the 2020 Summer Olympics?", options: ["USA", "China", "Japan", "Germany"], answer: "USA" },
    { question: "In tennis, what is the term for a score of 40-40?", options: ["Deuce", "Advantage", "Set", "Match"], answer: "Deuce" },
    { question: "How long is a standard football match?", options: ["60 minutes", "70 minutes", "90 minutes", "120 minutes"], answer: "90 minutes" },
    { question: "Which country is known for the sport of sumo wrestling?", options: ["China", "Japan", "India", "Russia"], answer: "Japan" },
    { question: "Who is known as the greatest basketball player of all time?", options: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Shaquille O'Neal"], answer: "Michael Jordan" }
  ],
  history: [
    { question: "Who was the first President of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
    { question: "In which year did the Titanic sink?", options: ["1910", "1912", "1915", "1920"], answer: "1912" },
    { question: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Emperor Wu", "Emperor Taizong", "Emperor Meiji"], answer: "Qin Shi Huang" },
    { question: "Who discovered America in 1492?", options: ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "Leif Erikson"], answer: "Christopher Columbus" },
    { question: "What year did World War I begin?", options: ["1912", "1914", "1916", "1918"], answer: "1914" },
    { question: "Who was the famous queen of ancient Egypt?", options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Mariam"], answer: "Cleopatra" },
    { question: "In what year did the Berlin Wall fall?", options: ["1989", "1991", "1979", "1963"], answer: "1989" },
    { question: "Who wrote the 'I Have a Dream' speech?", options: ["Martin Luther King Jr.", "Malcolm X", "Rosa Parks", "John F. Kennedy"], answer: "Martin Luther King Jr." },
    { question: "What year did the first man walk on the moon?", options: ["1967", "1969", "1971", "1973"], answer: "1969" },
    { question: "Who was the leader of the Soviet Union during World War II?", options: ["Joseph Stalin", "Leon Trotsky", "Vladimir Lenin", "Mikhail Gorbachev"], answer: "Joseph Stalin" }
  ],
  technology: [
    { question: "Who is the founder of Microsoft?", options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"], answer: "Bill Gates" },
    { question: "Which company developed the iPhone?", options: ["Apple", "Samsung", "Nokia", "Huawei"], answer: "Apple" },
    { question: "What does 'HTML' stand for?", options: ["HyperText Markup Language", "HyperTransfer Markup Language", "HyperText Modeling Language", "Home Tool Markup Language"], answer: "HyperText Markup Language" },
    { question: "Which company is known for the search engine 'Google'?", options: ["Facebook", "Microsoft", "Google", "Amazon"], answer: "Google" },
    { question: "What year was the first iPhone released?", options: ["2005", "2007", "2009", "2011"], answer: "2007" },
    { question: "Who invented the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"], answer: "Alexander Graham Bell" },
    { question: "What is the name of the first artificial satellite?", options: ["Apollo 11", "Sputnik 1", "Vostok 1", "Explorer 1"], answer: "Sputnik 1" },
    { question: "What does 'RAM' stand for in computing?", options: ["Read Access Memory", "Random Access Memory", "Read and Write Memory", "Rapid Access Memory"], answer: "Random Access Memory" },
    { question: "Which company developed the Android operating system?", options: ["Google", "Microsoft", "Apple", "Samsung"], answer: "Google" },
    { question: "Which social media platform was founded by Mark Zuckerberg?", options: ["Twitter", "Instagram", "Facebook", "Snapchat"], answer: "Facebook" }
  ],
  maths: [
    { question: "What is 5 + 3?", options: ["7", "8", "9", "10"], answer: "8" },
    { question: "What is 12 - 5?", options: ["6", "7", "8", "9"], answer: "7" },
    { question: "What is 7 * 6?", options: ["36", "42", "48", "52"], answer: "42" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "What is 25 ÷ 5?", options: ["4", "5", "6", "7"], answer: "5" },
    { question: "What is the perimeter of a rectangle with length 5 and width 4?", options: ["16", "18", "20", "22"], answer: "18" },
    { question: "What is the value of pi to two decimal places?", options: ["3.12", "3.14", "3.16", "3.15"], answer: "3.14" },
    { question: "What is 20% of 50?", options: ["5", "10", "15", "20"], answer: "10" },
    { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6" },
    { question: "What is the sum of the angles in a triangle?", options: ["90°", "180°", "360°", "270°"], answer: "180°" }
  ]
};

const params = new URLSearchParams(window.location.search);
const domain = params.get("domain");

if (!domain || !quizData[domain]) {
  document.body.innerHTML = "<h1>Invalid domain or no questions available.</h1>";
} else {
  const questions = quizData[domain];
  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    if (currentQuestion < questions.length) {
      const q = questions[currentQuestion];
      document.getElementById("quiz").innerHTML = `
        <h2>Question ${currentQuestion + 1}: ${q.question}</h2>
        <div class="options">
          ${q.options
            .map(
              (opt, i) => `
            <div>
              <input type="radio" id="opt${i}" name="answer" value="${opt}">
              <label for="opt${i}">${opt}</label>
            </div>
          `
            )
            .join("")}
        </div>
      `;
    } else {
      showResults();
    }
  }

  function showResults() {
    document.getElementById("quiz").innerHTML = `
      <h2>Your Score: ${score}/${questions.length}</h2>
      <p>${
        score === questions.length
          ? "Excellent work!!!"
          : score > questions.length / 2
          ? "Good job!"
          : "Better luck next time!"
      }</p>
      <button id="retry-btn" class="button">Retry Quiz</button>
    `;
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("retry-btn").addEventListener("click", () => {
      currentQuestion = 0;
      score = 0;
      document.getElementById("next-btn").style.display = "inline-block";
      loadQuestion();
    });
  }

  function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected && selected.value === questions[currentQuestion].answer) {
      score++;
    }
  }

  document.getElementById("next-btn").addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert("Please select an answer before proceeding.");
      return;
    }
    checkAnswer();
    currentQuestion++;
    loadQuestion();
  });

  loadQuestion();
}
