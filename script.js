(function(){
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const myQuestions = [
        {
            question: "1. Какой орган отвечает за фотосинтез в растениях?",
            answers: {
                a: "Корень",
                b: "Стебель",
                c: "Лист",
                d: "Цветок"
            },
            correctAnswer: "c"
        },
        {
            question: "2. Что является основным источником энергии для живых организмов?",
            answers: {
                a: "Белки",
                b: "Жиры",
                c: "Углеводы",
                d: "Вода"
            },
            correctAnswer: "c"
        },
        {
            question: "3. Какая молекула содержит генетическую информацию?",
            answers: {
                a: "ДНК",
                b: "АТФ",
                c: "РНК",
                d: "Глюкоза"
            },
            correctAnswer: "a"
        }
    ];

    function buildQuiz(){
        const output = [];

        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                const answers = [];

                for(letter in currentQuestion.answers){

                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </label><br>`
                    );
                }

                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div><hr>`
                );
            }
        );

        quizContainer.innerHTML = output.join('');
    }

    function showResults(){

        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        myQuestions.forEach( (currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            }
            else{
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `Вы набрали ${numCorrect} из ${myQuestions.length} правильных ответов.`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();
