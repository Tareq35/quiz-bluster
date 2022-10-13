import React, { useState } from 'react';
import Quiz from '../Quiz/Quiz';

const QuizItem = ({ question }) => {

    const [check, setCheck] = useState(false)

    // const { question, options } = question;
    return (
        <div>
            <div className='flex justify-evenly mb-8'>
                <h2>{question.question}</h2>

                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </p>
            </div>

            <div className='flex flex-col gap-2'>
                {
                    question.options.map((option, index) => (
                        <div key={index} onClick={() => setCheck(!check)} className='cursor-pointer w-6/12 mx-auto flex border rounded-md border-slate-400 py-10 px-5'>
                            <input className='' onChange={() => { }} checked={check} type="radio" name="" id="" />
                            <p>
                                {option}
                            </p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default QuizItem;