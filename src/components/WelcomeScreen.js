import React from 'react'
import quiz_img from '../images/quiz.jpg'

const WelcomeScreen = ({amount, startQuiz}) => {
    return (
        <div className = "card p-3 m-5" style = {{width: "60rem"}}>
            <div className = "row">
                <div className = "col-md-4">
                    <img src={quiz_img} className="img-fluid img-thumbnail" alt="Quiz image" title = "Quiz image"></img>
                </div>
                <div className = "col-md-8">
                    <div className = "card-body">
                        <h1 className = "card-title">Welcome to the Quiz app !</h1>
                        <h3 className = "card-text">
                            <small className="text-muted" >{amount} questions total.</small>
                        </h3>
                        <h5 className = "card-text">If you are ready, press START.</h5>
                        <button 
                            className = "btn btn-primary"
                            onClick = {() => startQuiz()}
                        >
                            START
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    header: {
        fontSize: 16
    }
}

export default WelcomeScreen
