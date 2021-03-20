import React from 'react'

const ResultsScreen = ({ totalQuestions, rightAnswers, wrongAnswers }) => {
    return (
        <div>
            <h1>You came to the end of the Quiz !</h1>
            <h3>Thank you for taking part in it.</h3>
            <h3>Your result is :</h3>
            <h6>Total: { totalQuestions }</h6>
            <h6>Right: { rightAnswers }</h6>
            <h6>Wrong: { wrongAnswers }</h6>
        </div>
    )
}

export default ResultsScreen
