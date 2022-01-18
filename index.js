let userName = window.prompt( 'Please enter your name:' )
let userScore = 0

for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
   
    if(userAnswer === question.correctAnswer){
        console.log ('Correct')
        window.alert('Correct!')
    }

        userScore = userScore + 10

    if (userAnswer !== question.correctAnswer){
        console.log ('Incorrect')
        window.alert('Incorrect, sorry')
    }
        
    
}

window.alert('Your score is: ' + userScore)

let games = []

let game = {
    user: userName,
    score: userScore
}

games.push(game)

console.log (games)
