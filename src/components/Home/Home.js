import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Home = () => {
    return (
        <div className=' m-12 '>
                
                    <div className="carousel mx-auto w-full h-[500px]  m-8">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src='https://i.ibb.co/JRxF45H/7439097-32818.jpg' alt='' className="h-full w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/WvCZnVY/50023962-954353468091324-6288095836630941696-n.jpg" alt="" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/HXWpYLp/10798281-19362653.jpg" alt="" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    </div>

                    {/* footer */}
                    <div>
                    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                    <div className="grid grid-flow-col gap-4">
                        <Link to='' className="link link-hover">About us</Link> 
                        <Link to='' className="link link-hover">Contact</Link> 
                        <Link to='' className="link link-hover">Jobs</Link> 
                        <Link to='' className="link link-hover">Press kit</Link>
                    </div> 
                    <div>
                        <div className="grid grid-flow-col gap-4">
                        <Link to=''><FaFacebook/></Link> 
                        <Link to=''><FaYoutube/></Link> 
                        <Link to=''><FaTwitter/></Link>
                        </div>
                    </div> 
                    <div>
                        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                    </div>
                    </footer>
                    </div>
        </div>
    );
};

export default Home;