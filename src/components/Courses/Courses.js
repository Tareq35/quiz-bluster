import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {

    const { id, logo, name, total } = course;
    return (
        <div className="card card-compact mx-auto w-96 bg-stone-300 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="flex p-6 items-center justify-between">
                <div>
                    <h2 className="card-title text-2xl">{name}</h2>

                    <p className='text-left'>Total questions: {total}</p>
                </div>

                <div className="">
                    <Link to={`/quiz/${id}`}>
                        <button className="btn btn-info shadow-lg font-bold">Start Quiz <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;