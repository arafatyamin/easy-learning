import React,{ useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';


const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    const {title, balance, about, url} = course;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div className="bg-gray-300">
        
        <div ref={componentRef} className="flex justify-center  pt-8">
            <div className="card w-1/2">
            
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
            <div className="flex">
            <p className="text-2xl font-bold">Price : {balance}</p>
            <button className="link btn btn-primary" onClick={handlePrint}>Download PDF</button>
            </div>
            
            
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{about}</p>
                
                
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default CourseDetails;