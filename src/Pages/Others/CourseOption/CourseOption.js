import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const CourseOption = () => {
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect( () =>{
        fetch('https://assignment-hero-tenth-server.vercel.app/courseCategories')
        .then( res => res.json())
        .then(data => setCourseCategories(data));
    }, [])
console.log(courseCategories);
    return (
        <div>
        <h4>Courses: {courseCategories.length}</h4>
       <div>
           {
               courseCategories.map(courseCategory => <p key={courseCategory.id}>
                   <Link to={`/courseDetails/${courseCategory.id}`}>{courseCategory.name}</Link>
               </p>)
           }
       </div>
   </div>
    );
};

export default CourseOption;