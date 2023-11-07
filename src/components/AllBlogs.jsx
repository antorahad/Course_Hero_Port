import { useLoaderData } from "react-router-dom"
import BlogCard from "./BlogCard";
const AllBlogs = () => {
    const blogs = useLoaderData()
    return (
        <div className="py-20">
            <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;