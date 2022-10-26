import React from 'react';
import './PremiumCheckout.css';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';


const PremiumCheckout = () => {
    const fullCourse2 = useLoaderData();
    console.log(fullCourse2);
    const { _id, title, author, image_url, rating, total_view } = fullCourse2;
    return (
        <Card><Card.Title className='text-center'>Course ID: {_id}</Card.Title>

        <Card.Title className='text-center'>Course Name: {title}</Card.Title>
   <Card.Img variant="top" style={{ height: '300px' }} src={image_url} />
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
   <div className='pre-btn'>
   <Link to=''>
           <Button className='text-center' variant="primary">Check Out </Button>
       </Link>
       </div>
</Card>
    );
};

export default PremiumCheckout;