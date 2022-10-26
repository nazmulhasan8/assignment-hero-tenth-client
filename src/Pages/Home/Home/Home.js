import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../CourseSummary/CourseSummary';



const Home = () => {
    const allPosts = useLoaderData();
    return (
        <div>
            
       <h1 className='text-center'>
       Computer Science BD Courses
        </h1>
        
     
            
            <div className="products-container">
            {
                allPosts.map(post => <CourseSummary
                    key={post.id}
                    post={post}
                ></CourseSummary>)
            }
            </div>
        </div>
    );
};

export default Home;