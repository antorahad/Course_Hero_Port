import { Link } from 'react-router-dom';
import Hero3 from '../assets/hero3.jpg'
const AboutBanner = () => {
    return (
        <div className="banner2 text-white">
            <div className="flex items-center justify-between max-w-6xl mx-auto py-14">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-center lg:text-start text-[30px] md:text-[54px] font-[600] max-w-[607px]">Learn Everyday & Any New Skills Online with Top Instructors</h1>
                    <p className="text-center lg:text-start max-w-[480px] text-[16px] md:text-[20px] font-[400]">We are proudly to provide you Educationpower quality education on your hand</p>
                    <div>
                        <Link to={'/course'}>
                            <button className="btn btn-success text-white rounded-[5px] px-[30px] py-[12px]">Enroll Now</button>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={Hero3} className="w-full h-auto rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;