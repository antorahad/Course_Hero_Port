import brand1 from '../assets/google-2015.svg'
import brand2 from '../assets/airbnb.svg'
import brand3 from '../assets/fedex-express-6.svg'
import brand4 from '../assets/hubspot.svg'
import brand5 from '../assets/microsoft.svg'

const Trusted = () => {
    return (
        <div className="max-w-6xl mx-auto py-14">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-[40px] font-[600]">We Are Trusted</h1>
                <p className="text-[20px] font-[400]">Course Hero is recognized by a wide range of both large and small companies.</p>
            </div>
            <div className='flex items-center justify-evenly mt-10'>
                <img src={brand1} className="w-[200px]" />
                <img src={brand2} className="w-[200px]" />
                <img src={brand3} className="w-[200px]" />
                <img src={brand4} className="w-[200px]" />
                <img src={brand5} className="w-[200px]" />
            </div>
        </div>
    );
};

export default Trusted;