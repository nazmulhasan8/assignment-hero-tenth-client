import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Brand4 from '../../../assets/brands/Brand4.png';
import CourseOption from '../../CourseOption/CourseOption';
import ReactSwitch from "react-switch";


const Header = () => {
    const { user, logOut, theme, toggleTheme } = useContext(AuthContext);
console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4 header' expand="lg" bg="light" variant="light">
            <Container className='header'>
                <Navbar.Brand className='header'>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/'>
                <img className='mr-3' style={{ height: '60px', borderRadius: '50%' }}src={Brand4} alt="Brand3" />
                    Computer Science BD</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link style={{textDecoration: 'none', color: 'grey', fontSize: '20px', paddingLeft: '20px'}} to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link style={{textDecoration: 'none', color: 'grey', fontSize: '20px', paddingLeft: '20px'}} to='/faq'>Faq</Link></Nav.Link>
                        <Nav.Link><Link style={{textDecoration: 'none', color: 'grey', fontSize: '20px', paddingLeft: '20px'}} to='/blog'>Blog</Link></Nav.Link>  
                          
                        
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' style={{textDecoration: 'none', color: 'grey', fontSize: '20px', paddingLeft: '20px'}}>Login</Link>
                                        <Link to='/register' style={{textDecoration: 'none', color: 'grey', fontSize: '20px', paddingLeft: '20px'}}>Register</Link>
                                    </>
                            }


                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                            
                            <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}
                                    title={user?.displayName} 
                                    >  
                                                        
                                </Image>
                                            
                                
                                : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                    <CourseOption></CourseOption>
                    </div>
                    <ReactSwitch onChange={toggleTheme} checked={theme==="dark"} />
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
};

export default Header;