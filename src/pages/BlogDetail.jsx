import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import User from "../assets/user.jpg"

const BlogDetail = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const singleDetail = details.find(detail => detail.id === idInt);
    const { image,
        title,
        publish_date,
        author,
        long_description } = singleDetail;
    return (
        <div>
             <div className="max-w-6xl mx-auto">
                <div className="bg-gray-100 bg-opacity-50 flex items-center p-10">
                    <Link to={'/blog'} className="flex items-center gap-2 text-success">
                        <MdKeyboardArrowLeft size={20}></MdKeyboardArrowLeft>
                        <p className="text-[18px] font-[400]">Back</p>
                    </Link>
                </div>
                <div className="w-full h-auto">
                    <img src={image} alt="Blog Image" className="w-full" />
                </div>
                <div className="bg-gray-100 bg-opacity-50 p-10 space-y-6">
                    <h1 className="text-[30px] md:text-[54px] font-[600]">{title}</h1>
                    <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center justify-center gap-3">
                        <img src={User} className="w-[40px] h-[40px] object-cover object-center rounded-full" />
                        <p className="text-[16px] font-[400]">{author}</p>
                    </div>
                    <p className="text-[16px] font-[400]">Date: {publish_date}</p>
                </div>
                    <p className="text-[16px] font-[400] leading-relaxed">{long_description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;