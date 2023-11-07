import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Signup = () => {
    return (
        <div className='min-h-screen flex items-center justify-center px-5 py-5 banner'>
            <div className='max-w-6xl mx-auto bg-white py-10 px-7 rounded-xl shadow-sm'>
                <div className="mb-5">
                    <Link to={'/'} className="flex items-center gap-2 text-success">
                        <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
                        <p>Back</p>
                    </Link>
                </div>
                <div className='flex flex-col justify-center gap-3'>
                    <h1 className='text-[30px] font-[600]'>Account Signup</h1>
                    <p className='max-w-[411px] text-[16px] font-[400]'>Become a member and enjoy exclusive promotions.</p>
                </div>
                <form className='mt-5'>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-3'>
                            <label>Name</label>
                            <input type="text" placeholder='User Name' className='input input-bordered rounded-[5px]' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label>Email</label>
                            <input type="email" placeholder='Email Address' className='input input-bordered rounded-[5px]' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label>Password</label>
                            <input type="password" placeholder='Password' className='input input-bordered rounded-[5px]' />
                        </div>
                        <div className='flex flex-col'>
                            <input type="submit" value="Sign Up" className='btn btn-success text-white rounded-[5px] px-[30px] py-[12px]' />
                        </div>
                        <p className="text-[13px]">Have an account ? <Link to={'/signin'} className="text-success underline">Sign In here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;