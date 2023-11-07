import { PiScrollFill } from 'react-icons/pi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { BiTask } from 'react-icons/bi';

const Service = () => {
    return (
        <div className="max-w-6xl mx-auto px-5 py-14">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-[40px] font-[600]">Deal For You</h1>
                <p className="text-[20px] font-[400]">Unlock premium study resources and expert tutoring with Course Hero today.</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
                <div className="card shadow-md bg-gray-300 bg-opacity-30 rounded-[10px]">
                    <div className="card-body">
                        <div className="flex flex-col justify-center gap-4">
                            <div className='flex items-center justify-center w-[80px] h-[80px] bg-success bg-opacity-20 rounded-full text-success'>
                                <PiScrollFill size={30}></PiScrollFill>
                            </div>
                            <p className='text-[25px] font-[600]'>Easy Payment</p>
                            <p className='text-[16px] font-[400]'>Streamline your online billing, invoices, and contracts effortlessly, ensuring efficient management of your financial transactions and agreements.</p>
                        </div>
                    </div>
                </div>
                <div className="card shadow-md bg-gray-300 bg-opacity-30 rounded-[10px]">
                    <div className="card-body">
                        <div className="flex flex-col justify-center gap-4">
                            <div className='flex items-center justify-center w-[80px] h-[80px] bg-success bg-opacity-20 rounded-full text-success'>
                                <AiOutlineSchedule size={30}></AiOutlineSchedule>
                            </div>
                            <p className='text-[25px] font-[600]'>Scheduling</p>
                            <p className='text-[16px] font-[400]'>Simplify scheduling and effortlessly track attendance with our user-friendly solution, making it a breeze to manage your appointments and events.</p>
                        </div>
                    </div>
                </div>
                <div className="card shadow-md bg-gray-300 bg-opacity-30 rounded-[10px]">
                    <div className="card-body">
                        <div className="flex flex-col justify-center gap-4">
                            <div className='flex items-center justify-center w-[80px] h-[80px] bg-success bg-opacity-20 rounded-full text-success'>
                                <BiTask size={30}></BiTask>
                            </div>
                            <p className='text-[25px] font-[600]'>Reporting</p>
                            <p className='text-[16px] font-[400]'>Effortlessly track student progress and get clear, easy-to-understand analysis reports for better insights into their performance and development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;