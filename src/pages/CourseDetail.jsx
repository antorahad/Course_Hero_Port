import { useLoaderData, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from "react-router-dom";

const CourseDetail = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const singleDetail = details.find(detail => detail.id === idInt);
    const { 
        image,
        title,
        price,
        rating,
        description,
        number_of_lessons,
        lessons,
        total_lesson_duration 
    } = singleDetail;
    return (
        <div>
            <div className="w-full min-h-[500px] mb-20 banner relative">
                <div className="p-10">
                    <Link to={'/blog'} className="flex items-center gap-2 text-white">
                        <MdKeyboardArrowLeft size={20}></MdKeyboardArrowLeft>
                        <p className="text-[18px] font-[400]">Back</p>
                    </Link>
                </div>

                <img src={image} className="w-[1024px] h-[400px] object-cover object-center mx-auto absolute top-[270px] left-[155px]" />
            </div>
            <div className="max-w-5xl mx-auto space-y-6 py-[120px]">
                <h1 className="text-[30px] md:text-[54px] font-[600]">{title}</h1>
                <div>
                    <p className="text-[20px] font-[400]">Description: {description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[16px] font-[600]">Course Price: {price} USD</p>
                    <p className="text-[16px] font-[600]">Rating: {rating}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[16px] font-[600]">Total Lesson: {number_of_lessons} Moduels</p>
                    <p className="text-[16px] font-[600]">Total Lesson Duration: {total_lesson_duration} Hours</p>
                </div>
                <div>
                    <h1 className="text-[30px] font-[600]">Lesson List</h1>
                    <ul className="list-disc pl-5">
                        {
                            lessons.map(lesson => <li className="py-2" key={lesson.lesson_id}>{lesson.lesson_title}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <button className="btn btn-warning text-white rounded-[5px] px-[30px] py-[12px]">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;