import React, { useState } from "react";
import { QuizData } from "./QuizData";
import QuizResult from "./QuitResult";
import "./Quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if ((clickedOption === QuizData[currentQuestion].answer1) || (clickedOption === QuizData[currentQuestion].answer2 )) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };
  return (
    <div className="row justify-content-start">
      <div className="col-lg-8">
    {/* <div className="Quit-1"> */}
      {/* <div className="card"> */}
        <div className="border shadow p-4">
          {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
          <p class="card-text question">
              <h4 className="question-txt card-text">
              {currentQuestion + 1}. {QuizData[currentQuestion].question}
              </h4>
          </p>
          <div className="option-container">
            <ul className="list-option">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                <li className="list-group mb-2">
                  <button
                    // className="option-btn"
                    className={`list-group-item list-group-item-action btn-primary btn ${
                      clickedOption == i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                  </li>
                );
              })}
              </ul>
            </div>
            <input
              type="button"
              value="Next"
              className="next-button btn-primary btn"
              onClick={changeQuestion}
            />
            </>
          )}
          </div>
      {/* </div> */}
    {/* </div> */}
    </div>
    </div>
  );
}

export default Quiz;
