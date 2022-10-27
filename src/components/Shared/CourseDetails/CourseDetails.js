import React,{ useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
                <label htmlFor="my-modal" className="btn btn-primary">CheckOut</label>

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p>{balance}</p>
                    <p className="py-4">Complate Enrollment</p>
                    <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">ok</label>
                    </div>
                </div>
                </div>

                <Link >
                
                
                </Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default CourseDetails;