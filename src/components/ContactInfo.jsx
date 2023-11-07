import Location from '../assets/placeholder.png'
import Mail from '../assets/mail.png'
import Hotline from '../assets/phone-call.png'



const ContactInfo = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-[40px] font-[600]">Get in Touch</h1>
                <p className=" text-[20px] font-[400]">We provide our official address, email address, and hotline number below</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
                <div className="card bg-gray-100 bg-opacity-30 shadow-sm rounded-[10px] p-5">
                    <div className="flex flex-col justify-center gap-5 card-body">
                        <div className='flex items-center justify-center w-[80px] h-[80px] bg-success bg-opacity-30 rounded-full'>
                            <img src={Location} className="w-[40px] h-[40px]" />
                        </div>
                        <h1 className='text-[20px] font-[600]'>Office Address</h1>
                        <p className='text-[16px] font-[400]'>1234 Elm Street, Cityville, State 12345, Countryland.</p>
                    </div>
                </div>
                <div className="card bg-gray-100 bg-opacity-30 shadow-sm rounded-[10px] p-5">
                    <div className="flex flex-col justify-center gap-5 card-body">
                        <div className='flex items-center justify-center w-[80px] h-[80px] bg-success bg-opacity-30 rounded-full'>
                            <img src={Mail} className="w-[40px] h-[40px]" />
                        </div>
                        <h1 className='text-[20px] font-[600]'>Email Address</h1>
                        <p className='text-[16px] font-[400]'>herocourse@gmail.com</p>
                    </div>
                </div>
                <div className="card bg-gray-100 bg-opacity-30 shadow-sm rounded-[10px] p-5">
                    <div className="flex flex-col justify-center gap-5 card-body">
                        <div className='flex items-center justify-center w-[80px] h-[80px] bg-success bg-opacity-30 rounded-full'>
                            <img src={Hotline} className="w-[40px] h-[40px]" />
                        </div>
                        <h1 className='text-[20px] font-[600]'>Support & Service</h1>
                        <p>(555) 555-5555</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;