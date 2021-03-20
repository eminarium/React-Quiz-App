import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import questions from './questions'
import './App.css';
import WelcomeScreen from './components/WelcomeScreen'

const App = () => {

  const [isInProgress, setIsInprogress] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)
  
  const [questionIndex, setQuestionIndex] = useState(0)
  const [totalTrue, setTotalTrue] = useState(0)

  return (
    <div className="container">
      { 
        (!isInProgress) ? 
          <WelcomeScreen amount={questions.length} /> 
          : 
          null 
      }
    </div>
  );
}

export default App;
