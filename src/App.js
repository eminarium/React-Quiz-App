import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import questions from './questions'
import './App.css';
import WelcomeScreen from './components/WelcomeScreen'
import QuestionCard from './components/QuestionCard'
import ResultsScreen from './components/ResultsScreen'

const App = () => {

  const quizStates = {
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    ENDED: 2
  }

  const [quizState, setQuizState] = useState(quizStates.NOT_STARTED)
  
  const [questionIndex, setQuestionIndex] = useState(0)
  const [totalRight, setTotalRight] = useState(0)
  const [totalWrong, setTotalWrong] = useState(0)

  const startQuiz = () => {
    setQuizState(quizStates.IN_PROGRESS)
  }

  const restart = () => {
    setQuizState(quizStates.NOT_STARTED)
    setQuestionIndex(0)
    setTotalRight(0)
    setTotalWrong(0)
  }

  const isLastQuestion = () => {
    return ((questions.length - 1) === questionIndex) ? true : false
  }

  const isFirstQuestion = () => {
    return (questionIndex === 0) ? true : false
  }

  const getNextQuestion = () => {
    setQuestionIndex((questionIndex) => questionIndex + 1)
  }

  const getPrevQuestion = () => {
    setQuestionIndex((questionIndex) => questionIndex - 1)
  }

  const getAnswer = (answer) => {
    if (!isLastQuestion()) {
      getNextQuestion()
    } else {
      setQuizState(quizStates.ENDED)
    }

    if (answer.isRight)
      setTotalRight((totalRight) => totalRight + 1)
    else
      setTotalWrong((totalWrong) => totalWrong + 1)
  }

  switch(quizState) {
    case quizStates.NOT_STARTED:
      return (
        <WelcomeScreen 
          amount={questions.length} 
          startQuiz = { startQuiz }
        /> 
      )
    case quizStates.IN_PROGRESS:
      return (
        <QuestionCard
          orderNo={questionIndex + 1}
          question={questions[questionIndex]}
          isLast={isLastQuestion()}
          isFirst={isFirstQuestion()}
          previous={getPrevQuestion}
          next={getNextQuestion}
          getAnswer={getAnswer}
        /> 
      )
    case quizStates.ENDED:
      return (
        <ResultsScreen 
          totalQuestions = {questions.length}
          rightAnswers = { totalRight }
          wrongAnswers = { totalWrong }
          unAnswered = { questions.length - totalRight - totalWrong }
          restart = { restart }
        />
      )

  }

}

export default App;
