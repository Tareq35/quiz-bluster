import React, { useState } from 'react';
import Quiz from '../Quiz/Quiz';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizItem = ({ question, index }) => {

    const [showCorrectAns, setShowCorrectAns] = useState(true)
    const [optionDisable, setOptionDisable] = useState([])

    const isDisable = optionDisable.filter(d => d.questionId === question.id)

    const notify = (ans, data) => {
        if (ans === 'right') {
            toast.success(data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        else {
            toast.error(data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    const handleClick = (option, index) => {
        setOptionDisable([...optionDisable, { questionId: question.id, index }])
        if (question.correctAnswer === option) {
            notify('right', 'Your answer is Correct!')
        }
        else {
            notify('wrong', 'Your answer is Wrong!')
            setShowCorrectAns(false)
        }

    }
    

    return (
        <>
            <div>
                <div className='flex justify-center my-8'>
                    <h2 className='text-xl font-semibold w-6/12'><span className='text-orange-400'>Question {index + 1} :</span> {question.question}</h2>


                    <button className={`pl-4 ${showCorrectAns ? 'cursor-not-allowed' : "cursor-pointer"}`} disabled={showCorrectAns} onClick={() => notify('right', `Correct answer is: ${question.correctAnswer}`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>

                </div>

                <div className='flex flex-col gap-2 mb-20'>
                    {
                        question.options.map((option, index) => (
                            <button disabled={isDisable.length > 0} key={index} onClick={() => handleClick(option, index)} className={`cursor-pointer w-6/12 mx-auto flex border rounded-md border-slate-400 py-10 px-5 hover:bg-blue-100 ${isDisable[0]?.index === index && 'bg-blue-300'}`}>

                                <p className='font-semibold text-lg'>
                                    {option}
                                </p>
                            </button>
                        ))
                    }
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default QuizItem;