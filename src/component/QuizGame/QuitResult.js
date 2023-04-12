import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        <h2>Your Score: {props.score}</h2>
        <h2> Total Score: {props.totalScore}</h2>
    </div>
    <button className="next-button btn-primary btn" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult