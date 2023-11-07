import { Link } from "react-router-dom";
import User from "../assets/user.jpg"

const BlogCard = ({ blog }) => {
    const {
        id,
        image,
        title,
        publish_date,
        author,
        short_description
    } = blog;
    return (
        <div className="card bg-gray-100 bg-opacity-30 shadow-sm rounded-[10px]">
            <div className="flex flex-col gap-5 card-body p-5">
                <figure className="h-[200px]">
                    <img src={image} className="w-full h-[200px] object-cover rounded-xl" />
                </figure>
                <h1 className="text-[20px] font-[600] truncate">{title}</h1>
                <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center justify-center gap-3">
                        <img src={User} className="w-[30px] h-[30px] object-cover object-center rounded-full" />
                        <p className="text-[14px] font-[400]">{author}</p>
                    </div>
                    <p className="text-[14px] font-[400]">Date: {publish_date}</p>
                </div>
                <div>
                    <p className="line-clamp-2 text-[16px] font-[400]">{short_description}</p>
                </div>
                <Link to={`/blog/${id}`}>
                    <button className="btn btn-success text-white rounded-[5px] px-[30px] py-[12px]">Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;