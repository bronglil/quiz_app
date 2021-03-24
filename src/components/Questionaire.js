import React from 'react';

const Questionaire = ({
  btnstate,
  handleNextQuestion,
  showAnswers,
  handleAnswer,
  data: {
    question,
    correct_answer,
    incorrect_answers
  }
}) => {

  const shuffledAnswers = [
    correct_answer, ...incorrect_answers
  ];
  //.sort( () =>  Math.random()- 0.5);

  const style = {
    margin: '0.5em',
    paddingLeft: 0,
    listStyle: 'none'
  };

  return (<div className='flex items-stretch flex-col m-6 '>
    <div className='bg-white text-purple-800 p-10 rounded shadow-md'>

      <h2 className='text-2xl' dangerouslySetInnerHTML={{
          __html: question + " ? "
        }}/>

    </div>

    <div className='grid grid-cols-2 gap-6 mt-6'>

      {
        shuffledAnswers.map((answer, index) => {

          const bgColor = showAnswers
            ? answer === correct_answer
              ? 'bg-green-500'
              : 'bg-red-500'
            : 'bg-white';

          return (<> < button key = {
            index
          }
          className = {
            ` ${bgColor}  p-4  font-semibold rounded shadow `
          }
          onClick = {
            () => handleAnswer(answer)
          }
          disabled = {
            btnstate
          } > {
            answer
          }</button> < />
  );
     })}

    </div>

    {
      showAnswers && (<button onClick={handleNextQuestion} className={` bg-purple-700  text-white p-4 font-semibold rounded shadow self-center mt-16 `}>
        Next Question
      </button>)
    }

  </div>);

};
export default Questionaire;
