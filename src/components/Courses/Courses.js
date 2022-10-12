import React from 'react';

const Courses = ({courses}) => {
    const {logo, name, total}= courses;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Courses;