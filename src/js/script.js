window.addEventListener('DOMContentLoaded', () => {
    const questions = [{
            question: "Какой язык работает в браузере?",
            answers: ["Java", "C", "Python", "JavaScript"],
            correct: 4,
        },
        {
            question: "Что означает CSS?",
            answers: [
                "Central Style Sheets",
                "Cascading Style Sheets",
                "Cascading Simple Sheets",
                "Cars SUVs Sailboats",
            ],
            correct: 2,
        },
        {
            question: "Что означает HTML?",
            answers: [
                "Hypertext Markup Language",
                "Hypertext Markdown Language",
                "Hyperloop Machine Language",
                "Helicopters Terminals Motorboats Lamborginis",
            ],
            correct: 1,
        },
        {
            question: "В каком году был создан JavaScript?",
            answers: ["1996", "1995", "1994", "все ответы неверные"],
            correct: 2,
        },
    ];

    let score = 0,
        questionNumber = 0;

    const headerContainer = document.querySelector('#header'),
        listContainer = document.querySelector('#list'),
        button = document.querySelector('#submit');

    const showResults = () => {
        let title = '';
        let message = '';

        if (score == questions.length) {
            title = `Поздравляем! 👋🥇🏆`;
            message = 'Вы ответили на все вопросы!🎉🎉🎉';

        } else if ((score * 100) / questions.length >= 50) {
            title = `Неплохой результат! 🥈`;
            message = 'Вы ответили на половину вопросов!🎈🎈🎈';

        } else {
            title = `Стоит постараться! 🥉`;
            message = 'Пока у вас меньше половины правильных ответов!⚡⚡⚡';
        }

        button.textContent = `Повторить`;
        headerContainer.innerHTML = `
                                    <h2 class="quiz__title">${title}</h2>
                                    <h3 class="quiz__summ">${message}</h3>
                                    <p class="quiz__result">${score} из ${questions.length}</p>
                                   `;
        button.blur();
        button.addEventListener('click',() => {
            history.go();
        });
    }
    const clearForm = () => {
        headerContainer.innerHTML = '';
        listContainer.innerHTML = '';
    };

    clearForm();

    const addQuestions = () => {
        const title = `<h2 class="quiz__header">${questions[questionNumber]['question']}</h2>`;
        let i = 1;
        headerContainer.innerHTML = title;
        for (item of questions[questionNumber]['answers']) {
            const questionTemplate = `
            <li>
                <label>
                    <input type="radio" value =${i}  class="auiz__answer form-check-input" name="answer">
                    <span>%answer%</span>
                </label>
            </li>
            `;
            i = i + 1;
            const answerHtml = questionTemplate.replace('%answer%', item);
            listContainer.innerHTML += answerHtml;

        }

    };

    addQuestions();

    const checkAnswer = () => {

        const checkRadio = document.querySelector('input[type="radio"]:checked');
        if (!checkRadio) {
            return;
        }

        const userAnswer = parseInt(checkRadio.value);

        if (userAnswer === questions[questionNumber]['correct']) {
            score++;
        }

        if (questionNumber !== questions.length - 1) {
            console.log('Это не полседний вопрос!');
            questionNumber++;
            clearForm();
            addQuestions();
        } else {
            clearForm();
            showResults();
        }

    };

    checkAnswer();

    button.addEventListener('click', () => {
        
    });


});