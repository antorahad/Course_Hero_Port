import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
    return (
        <div className="bg-white">
            <div className="navbar px-5 py-7 container mx-auto">
                <div className="navbar-start">
                    <Link to={'/'}>
                        <p className="uppercase text-[25px] font-[600]"><span className="text-success">Course</span> Hero</p>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="mr-7">
                        <ul className="flex items-center justify-center text-[16px] font-[500]">
                            <li className="px-4">
                                <NavLink to={'/'} className=
                                    {({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-success" : ""
                                    }>
                                    Home
                                </NavLink>
                            </li>
                            <li className="px-4">
                                <NavLink to={'/about'} className=
                                    {({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-success" : ""
                                    }>About
                                </NavLink>
                            </li>
                            <li className="px-4">
                                <NavLink>Course</NavLink>
                            </li>
                            <li className="px-4">
                                <NavLink to={'/blog'} className=
                                    {({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-success" : ""
                                    }>Blog
                                </NavLink>
                            </li>
                            <li className="px-4">
                                <NavLink to={'/contact'} className=
                                    {({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-success" : ""
                                    }>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="px-4">
                                <NavLink>
                                    <AiOutlineShoppingCart size={25}></AiOutlineShoppingCart>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to={'/signin'}>
                            <button className="btn btn-success text-white text-[14px] font-[600] rounded-[5px] px-[30px] py-[12px]">Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;