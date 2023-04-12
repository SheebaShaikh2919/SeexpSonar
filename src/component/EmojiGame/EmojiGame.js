import React, { useState } from "react";
import { EmojiData } from "./EmojiData";
import EmojiResult from "./EmojiResult";
import "./Emoji.css";

function EmojiGame() {
  const [currentImage, setCurrentImage] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeImage = () => {
    updateScore();
    if (currentImage < EmojiData.length - 1) {
      setCurrentImage(currentImage + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === EmojiData[currentImage].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentImage(0);
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
          <EmojiResult
            score={score}
            totalScore={EmojiData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
          <p class="card-text question">
              <img className="emoji-list" src={EmojiData[currentImage].image}/>
        </p>
          <div className="option-container">
            <ul className="list-option">
              {EmojiData[currentImage].options.map((option, i) => {
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
              onClick={changeImage}
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

export default EmojiGame;
