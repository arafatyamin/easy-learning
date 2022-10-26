import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    const {title, balance, about, url} = course;
    return (
        <div className="flex justify-center bg-gray-300 pt-8">
            <div className="card w-1/2">
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{about}</p>
                <p>{balance}</p>

                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CourseDetails;