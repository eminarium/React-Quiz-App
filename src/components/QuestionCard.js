import React from 'react'

const QuestionCard = ({ text, answers }) => {
    return (
        <div>
            <h1>{ text }</h1>
            <div>
                {
                    answers.map(answer => (
                        <div>{ answer.text }</div>
                    ))
                }
            </div>
        </div>
    )
}

export default QuestionCard

