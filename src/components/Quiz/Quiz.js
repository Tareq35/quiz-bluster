import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';

const Quiz = () => {
    const { courseId } = useParams();
    const [quiz, setQuiz] = useState({});

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${courseId}`)
            .then(res => res.json())
            .then(data => setQuiz(data.data))
    }, [courseId])

    if(!quiz.id) return <div className='flex justify-center'>loading....</div>

    console.log(quiz);
    return (
        <div>
            <h1 className='text-center'>Question of {quiz?.name}</h1>
            <div>
                {
                    quiz.questions.map(question => <QuizItem
                        key={question.id}
                        question={question}
                    ></QuizItem>)
                }
            </div>


        </div>
    );
};

export default Quiz;