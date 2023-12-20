import React, { useState } from 'react'
import './Home.css'
const Home = () => {
  const questions = [
    { id: 1, text: "You regularly make new friends." },
    { id: 2, text: "You are often the life of the party." },
    { id: 3, text: "You prefer routine and stability over spontaneity." },
    { id: 4, text: "You enjoy trying new and exotic foods." },
    { id: 5, text: "You often find yourself lost in thought." },
    { id: 6, text: "You value logic and reason over emotions." },
    { id: 7, text: "You enjoy being the center of attention." },
    { id: 8, text: "You like to plan things in advance." },
    { id: 9, text: "You prefer reading fiction over non-fiction." },
    { id: 10, text: "You often feel overwhelmed by deadlines." },
    { id: 11, text: "You are good at adapting to new situations." },
    { id: 12, text: "You believe it's better to be prepared than spontaneous." },
    { id: 13, text: "You enjoy outdoor activities and sports." },
    { id: 14, text: "You prefer working alone over teamwork." },
    { id: 15, text: "You often daydream about the future." },
  ];

  const [currentSet, setCurrentSet] = useState(1);

  const questionsToShow = questions.slice((currentSet - 1) * 5, currentSet * 5);

  const handleNextSet = () => {
    setCurrentSet((prevSet) => prevSet + 1);
  };
  const [selectedSize, setSelectedSize] = useState('');

  const [agreeOption, setAgreeOption] = useState('');
  const [disagreeOption, setDisagreeOption] = useState('');

  const handleAgreeChange = (event) => {
    const value = event.target.value;
    setAgreeOption(value);
    setSelectedSize(value);
  };

  const handleDisagreeChange = (event) => {
    const value = event.target.value;
    setDisagreeOption(value);
    setSelectedSize(value);
  };
  return (
    <>
     <div className="question-container">
     {currentSet && (
          <span className="sr-only">{`Question ${currentSet*5} of ${questions.length}.`}</span>
        )}
        {questionsToShow.map((question, index) => (
          < >
        <span key={question.id} className="statement text-center">
        {question.text}
        </span>
        <div className="group__options">
          <div className="options-caption">
            Agree
          </div>
          <div className="radio-group">
            <input
              type="radio"
              className="radio large"
              id="agreeLarge"
              value="large"
              checked={agreeOption === 'large'}
              onChange={handleAgreeChange}
              disabled={selectedSize && selectedSize !== 'large'}
            />
            <input
              type="radio"
              className="radio medium"
              id="agreeMedium"
              value="medium"
              checked={agreeOption === 'medium'}
              onChange={handleAgreeChange}
              disabled={selectedSize && selectedSize !== 'medium'}
            />
            <input
              type="radio"
              className="radio small"
              id="agreeSmall"
              value="small"
              checked={agreeOption === 'small'}
              onChange={handleAgreeChange}
              disabled={selectedSize && selectedSize !== 'small'}
            />
          </div>

          
          <div className="radio-group">
            <input
              type="radio"
              className="radio small"
              id="disagreeSmall"
              value="small"
              checked={disagreeOption === 'small'}
              onChange={handleDisagreeChange}
              disabled={selectedSize && selectedSize !== 'small'}
            />
            <input
              type="radio"
              className="radio medium"
              id="disagreeMedium"
              value="medium"
              checked={disagreeOption === 'medium'}
              onChange={handleDisagreeChange}
              disabled={selectedSize && selectedSize !== 'medium'}
            />
            <input
              type="radio"
              className="radio large"
              id="disagreeLarge"
              value="large"
              checked={disagreeOption === 'large'}
              onChange={handleDisagreeChange}
              disabled={selectedSize && selectedSize !== 'large'}
            />
          </div>
          <div className="options-caption">
            Disagree
          </div>
        </div>
        </>
        ))}
        <button onClick={handleNextSet} disabled={currentSet === Math.ceil(questions.length / 5)}>
        Next
      </button>
      </div>
  </>
  )
}

export default Home