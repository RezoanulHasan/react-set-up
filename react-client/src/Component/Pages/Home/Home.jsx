
import useTitle from '../../../Hooks/useTitle';
import React, { useEffect } from 'react'
const Home = () => {
    useTitle('Home'),

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            
           <h1 className='text-4xl'>home</h1> 
        </div>
    );
};

export default Home;