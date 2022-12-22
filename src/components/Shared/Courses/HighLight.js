import React from 'react';
import { Link } from 'react-router-dom';

const HighLight = ({coursesData}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                {
                    coursesData?.slice(0,3).map(cd=><div key={cd?._id}>
                        <div className="card h-42 shadow-2xl bg-gray-300">
                            <figure className="">
                                <img src={cd.url} alt="Shoes" className="rounded-t-xl w-full h-[200px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-normal">{cd?.title}</h2>
                                <div className="card-actions">
                                <button className="btn btn-primary"><Link to={`/course/${cd?._id}`}>Get premium access</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HighLight;