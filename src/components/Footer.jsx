import { BiLogoFacebookSquare, BiLogoLinkedinSquare, BiLogoWhatsapp } from 'react-icons/bi';
import { BsMedium } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className="bg-zinc-950 text-white p-10">
            <div className="flex items-center justify-evenly max-w-6xl mx-auto">
                <div className="flex flex-col justify-center gap-5">
                    <p className="text-[25px] font-[600]"><span className="text-success">Course</span> Hero</p>
                    <p className="text-[16px] font-[400] max-w-[300px]">Start your journey with Course Hero and be the hero of your learning.</p>
                    <div className="flex items-center gap-5">
                        <BiLogoFacebookSquare size={20}></BiLogoFacebookSquare>
                        <BiLogoLinkedinSquare size={20}></BiLogoLinkedinSquare>
                        <BiLogoWhatsapp size={20}></BiLogoWhatsapp>
                        <BsMedium size={20}></BsMedium>
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-5'>
                    <p className="text-[20px] font-[600]">Company</p>
                    <div className='text-[14px] font-[400] flex flex-col justify-center gap-3'>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Enroll Course</a>
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-5'>
                    <p className="text-[20px] font-[600]">Legal</p>
                    <div className='text-[14px] font-[400] flex flex-col justify-center gap-3'>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-5'>
                    <p className='text-[20px] font-[600]'>Newsletter</p>
                    <form className='flex flex-col justify-center gap-3'>
                        <input type='email' placeholder='user@gmail.com' className='input w-full rounded-[5px] text-black' />
                        <input type="submit" value='Subscribe' className='btn btn-block btn-success text-white rounded-[5px]' />
                    </form>
                </div>
            </div>
            <div className='max-w-6xl mx-auto mt-10'>
                <hr />
                <div className='flex items-center justify-center'>
                    <p className='text-[12px] font-[400] mt-5'>All Right Reserverd to <a href="https://n-dev-portfolio.netlify.app/" className='text-success'>N.dev</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;