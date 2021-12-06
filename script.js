
let front = document.querySelector('.front p');
let back = document.querySelector('.back p');
let card = document.querySelector('.card');

document.querySelector('#btnPrev').addEventListener('click', prevCard);
document.querySelector('#btnFlip').addEventListener('click', flipCard);
document.querySelector('#btnNext').addEventListener('click', nextCard);




let quiz = [];
getQuiz();

let currentCard = -1;

function getQuiz() {
    fetch('https://us-central1-quizbackend-54f6a.cloudfunctions.net/quizData')
    .then( resp => resp.json())
    .then( respJson => {
        quiz = respJson;
    })
    .catch(err => {
        console.error(err);
    });
}

function prevCard() {
    card.classList.remove('flipped');
    setTimeout(() => {
        currentCard = currentCard - 1 < 0 ? currentCard : currentCard - 1;
        front.textContent = quiz[currentCard].question;
        back.textContent = quiz[currentCard].answer;
    }, 500);
    
}

function nextCard() {
    card.classList.remove('flipped');
    setTimeout(()=>{
        currentCard = currentCard + 1 >= quiz.length ? window.print("End of quiz") : currentCard + 1;
        front.textContent = quiz[currentCard].question;
        back.textContent = quiz[currentCard].answer;        
    }, 500);
    
}

function flipCard() {
    card.classList.toggle('flipped');
}
