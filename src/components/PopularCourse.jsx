import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Course from "./Course";
const PopularCourse = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setPopular(data))
    }, [])

    return (
        <div className="banner py-20">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col justify-center items-center gap-3 text-white">
                    <h1 className="text-[40px] font-[600]">Our Most Popular Courses</h1>
                    <p className="text-[20px] font-[400]">Learn at your own pace, with the freedom to choose</p>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-10">
                    {
                        popular.slice(0, 6).map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
                <div className="mt-7 flex items-center justify-center">
                    <Link>
                        <button className='btn btn-success text-white text-[14px] font-[600] rounded-[5px] px-[30px] py-[12px]'>Explore More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;