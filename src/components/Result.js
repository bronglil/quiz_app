import React from 'react';

const Result = (props) => {
  console.log(props);
  return (
  <> < div > {
    props.answers === props.correct
      ? <h1 className=' text-center bg-white  text-black p-4 font-semibold'>Correct</h1>
      : <h1 className='text-center bg-white  text-black p-4 font-semibold'>Sorry!</h1>
  } {
    props.score
  } < /div>
  </ >);
}

export default Result;
