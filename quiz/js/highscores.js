const highScoresList = document.querySelector('#highScoresList')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = highScores.map( sc => {
    return `<li>${sc.name} - ${sc.score}</li>`
}).join('')