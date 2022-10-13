import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';

const Quiz = () => {
    const {data:quiz} = useLoaderData();

    // console.log(quiz);
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-10'>Questions of {quiz.name}</h1>
            <div>
                {
                    quiz.questions.map((question,index) => (<QuizItem
                        key={question.id}
                        question={question}
                        index= {index}
                    ></QuizItem>)
                    )
                }
            </div>


        </div>
    );
};

export default Quiz;