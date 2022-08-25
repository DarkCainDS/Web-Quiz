import React, { useEffect, useState } from 'react';
import questionCss30 from './Css30';
import '../Styles/quiz-style.css'
import useSound from 'use-sound';
import correct from '../Javascript/music/correct.wav';
import incorrect from '../Javascript/music/error.wav';
import { ResultQuiz } from '../ResultQuiz';

export const QuizCss30 = ({scenario}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [leftTime, setLeftTime] = useState(60);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [answerShown, setAnswersShown] = useState(false)
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(incorrect);


  const nextQuestion = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
      correctAnswer()
    } else {
      wrongAnswer();
    };


    const forwardQuestion = currentQuestion + 1;
    if (forwardQuestion < questionCss30.length) {
      
      setCurrentQuestion(forwardQuestion);
      setLeftTime(60);
      
    } else {
      setShowScore(true)
    }
  };



  useEffect(() => {
    const interval = setInterval(() => {
      if (leftTime > 0) setLeftTime((prev) => prev - 1);
      if (leftTime === 0) setButtonDisabled(true);
      

    }, 1000);
    return () => clearInterval(interval);

  }, [leftTime]);


  if (answerShown)
    return (
      <main className="quiz">
        <ResultQuiz score={score} question={questionCss30} scenario={scenario}/>
        <div className="container">
          <div className="question-count">
            <span> Question {currentQuestion + 1} of</span> {questionCss30.length}
          </div>
          <div className="question-text">
            {questionCss30[currentQuestion].questionTitle}
          </div>
          <div className='answer-section  answer-individual'>
            {
              questionCss30[currentQuestion].options.filter(
                (opcion) => opcion.isCorrect
              )[0].answerText
            }
          </div>
          <button className='quiz-button'
            onClick={() => {
              if (currentQuestion === questionCss30.length - 1) {
                window.location.href = "/";
                
              } else {
                setCurrentQuestion(currentQuestion + 1);
              }
            }}
          >
            {currentQuestion === questionCss30.length - 1
              ? "Play Again"
              : "Next"}
          </button >
          <button className='quiz-button'
            onClick={() => {
              if (currentQuestion <= 0) {
                window.location.href = "/"
              } else {
                setCurrentQuestion(currentQuestion - 1);

              }
            }}>
            {currentQuestion <= 0 ? "Play Again" : "Back"}
          </button>
        </div>
      </main>
    );





  return (
    
    <div className='quiz'>
      <div className='container'>
        {showScore ? (
          <div className='score-section'>
            <span>You scored {score} out of {questionCss30.length}</span>

            <button className='quiz-button'
              onClick={() => (window.location.href = "/")}>
              {" "}
              Play Again
            </button>
            <button className='quiz-button'
              onClick={() => {
                setShowScore(false);
                setAnswersShown(true);
                setCurrentQuestion(0);
              }}
            >
              See Answer and statistics
            </button>
          </div>

        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questionCss30.length}
                <div className='next-question'>
                  {!buttonDisabled ? (<span className='timer'>Left time: {leftTime}</span>) : (<button className='quiz-button' onClick={() => { setLeftTime(60); setButtonDisabled(false); setCurrentQuestion(currentQuestion + 1); if (currentQuestion === questionCss30.length - 1) { setShowScore(true) } }}>Next Question</button>)}
                </div>
              </div>
              <div className='question-text'>{questionCss30[currentQuestion].questionTitle}</div>
            </div>
            <div className='answer-section'>
              {questionCss30[currentQuestion].options.map((respuesta,i) => (
                <button key={i} className='quiz-button' disabled={buttonDisabled} onClick={(() => nextQuestion(respuesta.isCorrect))}  >{respuesta.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>

    </div>
  );
  
}
