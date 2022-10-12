import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold my-10'>Some Important Questions</h1>

            <div tabIndex={0} className="collapse w-8/12 mx-auto collapse-arrow border border-base-300 bg-stone-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of React Router?
                </div>
                <div className="collapse-content">
                    <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse w-8/12 mx-auto collapse-arrow border border-base-300 bg-stone-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does Context API works?
                </div>
                <div className="collapse-content">
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse w-8/12 mx-auto collapse-arrow border border-base-300 bg-stone-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is useRef what does it do?
                </div>
                <div className="collapse-content">
                    <p>A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.
                        useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;