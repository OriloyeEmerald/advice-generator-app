import React from 'react';
import '../styles/advice.css'
import { DiceFive } from 'phosphor-react';
import diceLogo from '../assets/Group 3.svg'
import borderLogo from '../assets/Group.svg'

const Advice = ({advice, number, getAdvice, isLoading}) => {
  return (
    <div className='container'>
      {isLoading
       ? 
      (<h4>getting advice....</h4>)
      :
    <div>
       <h5 className='advice-id'>advice    <span className='num'>{' #' + number}</span></h5>
       <p className='advice'>"{advice}"</p>
       <div className="border-container">
        <div className="border"></div>
        <img src={borderLogo} alt="" className='bar' /> 
        <div className="border"></div>
    </div>
       <div className='img'>
        <img src={diceLogo} alt="" onClick={getAdvice} />
       </div>
      </div> 
      }
    </div>
  );
}

export default Advice;
 