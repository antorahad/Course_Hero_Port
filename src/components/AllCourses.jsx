import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const AllCourses = () => {
    const allCourse = useLoaderData()
    return (
        <div>
            <div className="min-h-screen w-full flex items-center justify-center banner3 text-white">
                <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-10">
                    <h1 className="text-[50px] font-[600] text-center">Choose from over 30 courses, <br /> each guided by our top mentors.</h1>
                    <div className="text-black w-full flex items-center justify-center gap-2">
                        <input type="text" placeholder="Web Development Bootcamp" className="input w-1/2 rounded-[5px] py-[12px]"/>
                        <button className="btn btn-success text-white rounded-[5px] px-[30px] py-[12px]">Search</button>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 py-14">
                {
                    allCourse.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default AllCourses;