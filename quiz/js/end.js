
const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostResentScore = localStorage.getItem('mostResentScore')


const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const MAX_HIGH_SCORES = 5

finalScore.innerHTML = mostResentScore

username.addEventListener('keyup', e => {
    saveScoreBtn.disabled = !username.value
})

const saveHighScore = e => {

    e.preventDefault();

    const scoreObj = {
        name: username.value,
        score: mostResentScore
    }

    highScores.push(scoreObj)
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(MAX_HIGH_SCORES)
    localStorage.setItem('highScores',JSON.stringify(highScores))

    window.location.assign('index.html')

}

