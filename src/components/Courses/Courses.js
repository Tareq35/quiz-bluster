import React from 'react';

const Courses = ({ course }) => {
    const { logo, name, total } = course;
    return (
        <div className="card card-compact mx-auto w-96 bg-stone-300 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="flex p-6 justify-between">
                <div>
                    <h2 className="card-title">{name}</h2>

                    <p className='text-left'>Total questions: {total}</p>
                </div>

                <div className="">
                    <button className="btn btn-primary">Start Quiz <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg></button>
                </div>
            </div>
        </div>
    );
};

export default Courses;