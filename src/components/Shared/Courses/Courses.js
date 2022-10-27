import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

const Courses = () => {
    const coursesData = useLoaderData();

    return (
        <div>
            <div className="flex">
                <div className="w-1/5">
                    <LeftSidebar />
                </div>

                <div className="w-4/5">
                <p>show courses {coursesData.length}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-8 h-42">
                    {
                        coursesData.map(cd=><div key={cd._id}>
                            <div className="card  bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={cd.url} alt="Shoes" className="rounded-xl h-[150px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="text-normal">{cd.title}</h2>
                                    <div className="card-actions">
                                    <button className="btn btn-primary"><Link to={`/course/${cd._id}`}>Get premium access</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Courses;