import React,{useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import './FullCourse.css';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';


const FullCourse = () => {
    const fullCourse = useLoaderData();
    console.log(fullCourse);
    const { _id, title, author, details, image_url, rating, total_view } = fullCourse;
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
content: () => componentRef.current,
documentTitle: 'emp-data',
onAfterPrint: ()=> alert('PDF Success')   

});
    
    
    return (
        
        
            <>
            
            <div  ref={componentRef} style={{width:'100%', height: window.innerHeight}}>
               

                <h2 className='pb-20 text-center'>{title}  <button className='pl-5' onClick={handlePrint}> <small>Download PDF</small> </button></h2>
                
        <Card>
             
        <Card.Img className='center-image' variant="top" src={image_url} />
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image
                    roundedCircle
                    className='me-2'
                    src={author?.img}
                    style={{ height: '60px' }}
                ></Image>
                <div>
                    <p className='mb-0'>{author?.name}</p>
                    <p>{author?.published_date}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark className='me-2'></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
           
            <Card.Text>
                {details}
            </Card.Text>
            <div className='d-flex justify-content-between'>
            <Link to='/'>
                <Button  variant="primary">Go Back To Home Page</Button>
            </Link>
            <Link to={`/checkout/${_id}`}>
                <Button variant="primary">Get Premium Access </Button>
            </Link>
            </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
            <div>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating?.number}</span>
            </div>
            <div>
                <FaEye className='me-2'></FaEye>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
    </Card>
    

            </div>
            
            </>
           
    );
};

export default FullCourse;