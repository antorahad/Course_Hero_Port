import { Link } from 'react-router-dom';
import Hero2 from '../assets/hero2.jpg';

const Why = () => {
    return (
        <div className="max-w-6xl mx-auto px-5 py-14">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-[40px] font-[600]">Become A Hero</h1>
                <p className="text-[20px] font-[400]">Start your journey with Course Hero and be the hero of your learning.</p>
            </div>
            <div className="flex items-center justify-between mt-10">
                <div className="w-1/2 relative">
                    <div className='flex items-center'>
                        <img src={Hero2} className="w-[400px] h-[500px] object-cover object-center rounded-xl shadow-sm" />
                    </div>
                    <div className="stats shadow-sm rounded-xl absolute top-16 right-16">
                        <div className="stat flex flex-col items-center justify-center gap-1">
                            <div className="stat-title text-black font-[700]">Success Rate</div>
                            <div className="stat-value text-success">97%</div>
                            <div className="stat-desc text-black">Success Stories of Heros</div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col justify-center gap-5'>
                        <p className='text-[30px] font-[600]'>Why enroll with Course Hero?</p>
                        <ul className='flex flex-col justify-center gap-3 list-disc text-[16px] font-[400] pl-5'>
                            <li>Access a vast collection of course materials.</li>
                            <li>Connect with knowledgeable tutors ready to assist you.</li>
                            <li>Enjoy round-the-clock customer support.</li>
                            <li>Learn at your own pace, with the freedom to choose.</li>
                            <li>Join a thriving community of learners and educators.</li>
                            <li>Benefit from real-life success stories.</li>
                        </ul>
                        <Link to={'/about'}>
                            <button className="btn btn-success text-white rounded-[5px] px-[30px] py-[12px]">Explore More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;