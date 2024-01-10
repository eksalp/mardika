import React from 'react';
import './App.css';
import '../Home/awal.css';
import Freeprogram from './Freeprogram';
import TrialProgram from './ProgramTrial';
import MentoringProgram from './Program Mentoring/ProgramMentoring';

const To = () => {
  return (
    <>
    <div className='wrappers'>
      <h3 className='judul'>Free</h3>
    <Freeprogram/>
    </div>

    <div className='wrappers'>
      <h3 className='judultrial'>Trial Class</h3>
    <TrialProgram/>
    </div>

    <div className='wrappers'>
      <h3 className='judulmentoring'>Program Mentoring</h3>
    <MentoringProgram/>
    </div>
    
        
    </>
  );
};

export default To;
