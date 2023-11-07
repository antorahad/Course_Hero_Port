import { Link } from "react-router-dom";
import { LuTimerReset } from 'react-icons/lu';
import { MdAttachMoney } from 'react-icons/md';

const Course = ({ course }) => {
    const {
        image,
        title,
        price,
        description,
        total_lesson_duration
    } = course
    return (
        <div className="card bg-white rounded-[10px]">
            <div className="flex flex-col gap-5 card-body p-5">
                <figure className="h-[200px]">
                    <img src={image} className="w-full h-[200px] object-cover rounded-xl" />
                </figure>
                <h1 className="text-[20px] font-[600] truncate">{title}</h1>
                <div className="flex items-center justify-between gap-[5px] text-success">
                    <div className="flex items-center justify-center ">
                        <MdAttachMoney size={20}/>
                        <p className="text-[16px] font-[600]">{price} USD</p>
                    </div>
                    <div className="flex items-center justify-center gap-[5px]">
                        <LuTimerReset size={20}/>
                        <p className="text-[16px] font-[600]">{total_lesson_duration} Hours</p>
                    </div>
                </div>
                <div>
                    <p className="line-clamp-2 text-[16px] font-[400]">{description}</p>
                </div>
                <Link>
                    <button className="btn btn-success text-white rounded-[5px] px-[30px] py-[12px]">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Course;