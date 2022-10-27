import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <p>all course {allCourse.length}</p>
            <div className="grid grid-cols-3 gap-4 m-8">
                {
                    allCourse.map(course => <div course={course}>
                        <div>
                            <div className="card  bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={course.url} alt="Shoes" className="rounded-xl h-[100px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title ">{course.title}</h2>
                                    <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;