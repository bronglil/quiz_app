import React, {useState} from 'react';
import {questions} from './components/data';
import {Questionaire} from './components';
import Progress from './components/Progress';
import './App.css';
import Result from './components/Result';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [answers, setAnswers] = useState();
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [btnstate, setBtnState] = useState(false);

  const handleAnswer = (answer) => {

    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setBtnState(true);
    setAnswers(answer);
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setBtnState(false);
    setCurrentIndex(currentIndex + 1)
  }

  return questions.length > 0
    ? (<div className='container'>
      <ProgressBar>
        <ProgressBar striped="striped" variant="success" now={currentIndex} max={questions.length} key={1}/>
      </ProgressBar>

      <Progress className=' text-3xl ' total={questions.length + 1} current={currentIndex + 1}/> {
        currentIndex >= questions.length
          ? (<h1 className='text-3xl text-white font-bold'>Game Ended you Scored {score}</h1>)
          : (<Questionaire btnstate={btnstate} showAnswers={showAnswers} data={questions[currentIndex]} handleNextQuestion={handleNextQuestion} handleAnswer={handleAnswer}/>)
      }

      {showAnswers && (<Result answers={answers} correct={questions[currentIndex].correct_answer}/>)}
      <br/>

      <div className=' text-base relative'>
        <h6 className='font-bold absolute'>score: {Math.floor(score * 100 / (currentIndex))}%</h6>
        <h6 className='font-bold absolute inset-y-0 right-0'>Max score: {Math.floor((score * 100 / (currentIndex + 1)))}%</h6>
      </div>
      <div className='flex items-stretch flex-col m-6 '>

        <ProgressBar>
          <ProgressBar striped="striped" variant="success" now={(score * 100 / (currentIndex))} key={1}/>
          <ProgressBar variant="warning" now={(score * 100 / (currentIndex))} key={2}/>
          <ProgressBar striped="striped" variant="danger" now={(score * 100 / (currentIndex))} key={3}/>
        </ProgressBar>

      </div>

    </div>)
    : (<h2>loading...</h2>);

}

export default App;
