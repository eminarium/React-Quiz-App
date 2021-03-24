import React from 'react'

const ResultsScreen = ({ totalQuestions, rightAnswers, wrongAnswers, unAnswered, restart }) => {
    return (
        <div className = "card m-3">
            <h1 className = "card-header text-center">You came to the end of the Quiz !</h1>
            
            <div className = "card-body">
                <h3 className="card-text">Thank you for taking part in it.</h3>

            </div>

            <div className = "row m-3 p-3 d-flex justify-content-between">
                <div className = "col-sm">
                    <div className="alert alert-secondary justify-content-between d-flex">
                        Total
                    <span className="badge badge-secondary badge-pill align-self-center">{totalQuestions}</span>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="alert alert-secondary justify-content-between d-flex">
                        Right
                    <span className="badge badge-primary badge-pill align-self-center">{rightAnswers}</span>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="alert alert-secondary justify-content-between d-flex">
                        Wrong
                    <span className="badge badge-danger badge-pill align-self-center">{wrongAnswers}</span>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="alert alert-secondary justify-content-between d-flex">
                        Unanswered
                    <span className="badge badge-warning badge-pill align-self-center">{unAnswered}</span>
                    </div>
                </div>
            </div>
            <div className = "row m-3 align-self-center">
                <button
                    className="btn btn-primary"
                    onClick={() => restart()}
                >
                    RESTART
                </button>
            </div>
        </div>
    )
}

export default ResultsScreen
