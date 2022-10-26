import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then( data => setCategories(data))
    },[])
    return (
        <div>
            {
                categories.map(category => 
                    <p className="p-4 hover:text-xl hover:text-blue-500 m-2" key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>
                )
            }
        </div>
    );
};

export default LeftSidebar;