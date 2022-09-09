const adviceId = document.querySelector('.advice-id')
const advice = document.querySelector('.advice')
const diceIcon = document.querySelector('.dice-icon')

let Url = "https://api.adviceslip.com/advice"

function getAdvice() {
    fetch(Url).then((Response) => {
        return Response.json()
    }).then((data) => {
        console.log(data)
        adviceId.innerHTML = "ADVICE" + "  " + "#" + data.slip.id;
        advice.innerHTML = "❝" + data.slip.advice + "❞";
    })
}

getAdvice();

diceIcon.addEventListener('click', () => {

    getAdvice();
})