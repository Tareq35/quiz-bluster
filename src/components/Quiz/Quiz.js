import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';

const Quiz = () => {
    const { courseId } = useParams();
    const [quiz, setQuiz] = useState({});
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${courseId}`)
        .then(res => res.json())
        .then(data => setQuiz(data))
    }, [courseId])



    console.log(quiz);
    return (
        <div>
            <h1 className='text-center'>Question of {}</h1>
            <QuizItem
            
            ></QuizItem>
            
        </div>
    );
};

export default Quiz;