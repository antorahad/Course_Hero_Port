import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BiLogoFacebookSquare, BiLogoLinkedinSquare, BiLogoWhatsapp } from 'react-icons/bi';
import { BsMedium } from 'react-icons/bs';
import User from "../assets/user.jpg"

const BlogDetail = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const singleDetail = details.find(detail => detail.id === idInt);
    const { 
        image,
        title,
        publish_date,
        author,
        long_description 
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
                <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center justify-center gap-3">
                        <img src={User} className="w-[40px] h-[40px] object-cover object-center rounded-full" />
                        <p className="text-[16px] font-[400]">{author}</p>
                    </div>
                    <p className="text-[16px] font-[400]">Published: {publish_date}</p>
                </div>
                <p className="text-[16px] font-[400] leading-relaxed">{long_description}</p>
                <hr />
                <div className="flex items-center justify-center gap-3 text-gray-900">
                    <p className="text-[16px] font-[400]">Share via: </p>
                    <div className="flex items-center justify-center gap-5 cursor-pointer">
                        <BiLogoFacebookSquare size={20}></BiLogoFacebookSquare>
                        <BiLogoLinkedinSquare size={20}></BiLogoLinkedinSquare>
                        <BiLogoWhatsapp size={20}></BiLogoWhatsapp>
                        <BsMedium size={20}></BsMedium>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;