import "./Blog.css"
import React from 'react';

const Blog = () => {
    return (
        <div>
            <main class="border border-blue-200 p-3 m-3 ">
                <section id="questions " class="bg-gray-100 p-2 ">
                    <div class="question">
                        <h1 class="text-2xl text-purple-500 font-semibold">1. <span class="text-red-400 font-normal">When use Context API?</span></h1>
                        <p class="shadow-lg w-11/12 my-5 p-2"> <span class="font-semibold underline "> Context API :</span>
                            the Context API is useful when we have data that needs to be shared across multiple components in your application. It can simplify your code and make it easier to manage state
                        </p>
                    </div>

                    <div class="question">
                        <h1 class="text-2xl text-purple-500 font-semibold">2. <span class="text-red-400 font-normal">What is custom hook?</span></h1>
                        <div class="shadow-lg w-11/12 my-5 p-2">
                            <p> <span class="font-semibold underline "> Custom hook :</span>
                                A custom hook is a reusable function in React that encapsulates logic that can be shared between components. Custom hooks are a powerful feature in React because they allow us to extract complex logic from components and reuse it in a simple and efficient way.
                            </p>
                        </div>
                    </div>

                    <div class="question">
                        <h1 class="text-2xl text-purple-500 font-semibold">3. <span class="text-red-400 font-normal">What is useRef ?</span></h1>
                        <p class="shadow-lg w-11/12 my-5 p-2"> <span class="font-semibold underline "> UseRef :</span>In React, useRef is a hook that provides a way to store and access mutable values that persist across renders. It returns a mutable object with a current property that can be updated without triggering a re-render.

                        </p>

                    </div>
                    <div class="question">
                        <h1 class="text-2xl text-purple-500 font-semibold">4. <span class="text-red-400 font-normal">What is useMemo ?</span></h1>
                        <p class="shadow-lg w-11/12 my-5 p-2"> <span class="font-semibold underline "> useMemo:</span>
                            In React, useMemo is a hook that allows use to memoize expensive computations so that they are only re-executed when the dependencies of the computation change. It is useful for optimizing performance by avoiding unnecessary re-calculations
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Blog;