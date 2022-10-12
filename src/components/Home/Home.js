import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../image/header-image.png';
import Courses from '../Courses/Courses';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className='lg:flex w-8/12 mt-10 p-10 m-auto bg-lime-200'>
                <div className='lg:w-1/2 sm:p-12'>
                    <img className='mx-auto my-auto' src={image} alt="" />
                </div>
                <div className='lg:w-1/2 my-auto'>
                    <h1 className='text-3xl font-bold'>
                        Lest Start The  <span className='text-pink-500'>Quiz Blust </span>!
                    </h1>
                    <p className='text-lg mt-4'>
                        Check out our online computer programming quizzes to enhance your knowledge, learn new things or prepare for an upcoming test. Made up of well-researched and interesting quiz questions, each and every quiz here can test your awareness and grasp of the subject.
                    </p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2  gap-10 mt-20 w-8/12 mx-auto'>
                {
                    courses.map(course => <Courses
                    key={course.id}
                    course={course}
                    ></Courses>)
                }
            </div>
        </div>
    );
};

export default Home;