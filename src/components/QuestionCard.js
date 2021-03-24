import React from 'react'

const QuestionCard = ({ question, orderNo, isFirst, isLast, previous, next, getAnswer }) => {
    return (
        <div className = "card m-3">
            <div className="card-header d-flex justify-content-between">
                <h5 style = {{display: "inline"}}>
                    Question # {orderNo}
                </h5>
                <div>
                    <button
                        className = "btn btn-primary"
                        disabled={(!isFirst) ? "" : "disabled"}
                        onClick={() => previous()}
                    >
                        Prev
                    </button>
                    {' '}
                    <button
                        className="btn btn-primary"
                        disabled={(!isLast) ? "" : "disabled"}
                        onClick={() => next()}
                    >
                        Next
                    </button>
                </div>

            </div>

            <div className = "card-body">
                <div className = "row">
                    <div className = "col-md-8">
                        <h3 className = "card-title">{ question.text }</h3>
                    </div>

                    <div className="col-md-4">
                        <ul className = "list-group">
                        {
                            question.answers.map(answer => (
                                <li 
                                    className = "list-group-item" 
                                    key={answer.id}
                                    onClick = {() => getAnswer(answer)}
                                >
                                    {answer.text}
                                </li>
                            ))
                        }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QuestionCard

