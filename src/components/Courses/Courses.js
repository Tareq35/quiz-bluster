import React from 'react';

const Courses = ({course}) => {
    const {logo, name, total}= course;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Courses;