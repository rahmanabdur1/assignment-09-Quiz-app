import React from 'react';

const Blog = () => {
    return (
        <div className='p-20'>
            <h1 className='text-2xl text-center mb-4 '> Blog Question</h1>
            <div className="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>  React Router is a library that is used to manage routing in React applications. Routing is the process of navigating from one page to another in a web application. React Router provides a number of features that make it easy to manage routing in React applications, including:

                        Route definitions: React Router allows you to define routes in your application's code. Routes define the URL paths that your application can handle.
                        Route matching: React Router matches routes to the current URL. When a route is matched, React Router renders the component that is associated with that route.
                        History API: React Router uses the History API to manage the browser's history. The History API allows you to navigate to different pages in your application without reloading the page.
                        Nested routing: React Router supports nested routing. Nested routing allows you to create a hierarchy of pages in your application.
                        Internationalization: React Router supports internationalization. Internationalization allows you to create applications that can be used by users in different languages.
                        React Router is a popular library for managing routing in React applications. It is easy to use and provides a number of features that make it easy to create complex routing applications.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>The Context API is a React API that allows you to share data between components without having to pass props down manually at every level. This makes it easier to share data between components, especially when the data is used by many components or when the data needs to be updated frequently.

                        The Context API consists of two main components: the context provider and the context consumer. The context provider is responsible for creating and managing the context, which holds the data to be shared between components. On the other hand, the consumer is used to access the context and its data from within a component.

                        To use the Context API, you first need to create a context provider. This is done using the React.createContext() function. The React.createContext() function takes two arguments: the name of the context and a default value for the context.

                        Once you have created a context provider, you can use it to create context consumers. Context consumers are regular React components that use the useContext() hook to access the context data.

                        The useContext hook takes two arguments: the context provider and a default value for the context. The useContext() hook will return the current value of the context, or the default value if the context has not been initialized yet.

                        Here is an example of how to use the Context API to share data between components:</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>
                        The useRef hook is a React hook that allows you to create a mutable ref object that persists its value between renders. This is useful for things like tracking the current state of a component, or for keeping a reference to a DOM element.

                        The useRef hook takes one argument, which is the initial value of the ref object. The useRef hook returns a ref object that has a .current property that you can use to access the current value of the ref object.

                        Here is an example of how to use the useRef hook:</p>
                </div>
            </div>
        </div>
    );
};

export default Blog
