import { useEffect, useRef } from 'react';
import logo from '../../img/download.jpg';
import Typed from 'typed.js';
const Background = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Your  Generel Quiz'],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };

    }, []);

    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
            <img src={logo} alt="" className="w-full h-full rounded-lg " />
            <div className="text-center mt-12">
                <h1 className=" text-6xl auto-type" >
                    Let's Test <br />
                    <span className='text-blue-700' ref={typedElement}>

                    </span>

                </h1>

            </div>
        </div>
    );
};

export default Background;
