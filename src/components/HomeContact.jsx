import { Link } from 'react-router-dom';
import Contact from '../assets/hero2.jpg'
const HomeContact = () => {
    return (
        <div className="py-20">
            <div className="flex items-center justify-between max-w-6xl mx-auto bg-gray-100 bg-opacity-30 shadow-sm p-10 rounded-[10px]">
                <div className='flex flex-col justify-center gap-7 w-1/2'>
                    <h1 className='text-[40px] font-[600]'>Get More Info About us</h1>
                    <p className='w-[500px] text-[16px] font-[400]'>Connect with us for inquiries and assistance regarding our services. Our dedicated team is here to help you, providing prompt solutions and addressing your needs. Reach out today to experience top-notch support and expertise.</p>
                    <div className='flex items-center gap-5'>
                        <Link>
                            <button className='btn btn-warning text-white text-[14px] font-[600] rounded-[5px] px-[30px] py-[12px]'>Enroll Now</button>
                        </Link>
                        <Link to={'/contact'}>
                            <button className='btn btn-success text-white text-[14px] font-[600] rounded-[5px] px-[30px] py-[12px]'>Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={Contact} className="w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default HomeContact;