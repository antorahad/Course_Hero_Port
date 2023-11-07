import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

const Signin = () => {
    return (
        <div className='min-h-screen flex items-center justify-center px-5 py-5 banner2'>
            <div className='max-w-6xl mx-auto bg-white py-10 px-7 rounded-xl shadow-sm'>
                <div className="mb-5">
                    <Link to={'/'} className="flex items-center gap-2 text-success">
                        <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
                        <p>Back</p>
                    </Link>
                </div>
                <div className='flex flex-col justify-center gap-3'>
                    <h1 className='text-[30px] font-[600]'>Welcome Back Hero</h1>
                    <p className='max-w-[411px] text-[16px] font-[400]'>If you are already a member you can login with your email address and password.</p>
                </div>
                <form className='mt-5'>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-3'>
                            <label>Email</label>
                            <input type="email" placeholder='Email Address' className='input input-bordered rounded-[5px]' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label>Password</label>
                            <input type="password" placeholder='Password' className='input input-bordered rounded-[5px]' />
                        </div>
                        <div className='flex flex-col'>
                            <input type="submit" value="Sign In" className='btn btn-success text-white rounded-[5px] px-[30px] py-[12px]' />
                        </div>
                        <p className="text-[14px] font-[600] text-center">Or sign in with</p>
                        <div className="flex items-center justify-center">
                            <button><FcGoogle size={30}></FcGoogle></button>
                        </div>
                        <p className="text-[13px]">{`Dont have an account ?`} <Link to={'/signup'} className="text-success underline">Sign up here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;