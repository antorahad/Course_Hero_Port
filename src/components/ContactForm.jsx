const ContactForm = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-[40px] font-[600]">Leave A Message</h1>
                <p className=" text-[20px] font-[400]">Questions about Course Hero or any topic? Feel free to ask.</p>
            </div>
            <div className="w-1/2">
                <form className="flex flex-col gap-5 bg-gray-100 bg-opacity-30 rounded-[5px] shadow-sm px-5 py-10">
                    <input type="text" className="input input-bordered w-full rounded-[5px]" placeholder="Your Name" />
                    <input type="email" className="input input-bordered w-full rounded-[5px]" placeholder="Your Email" />
                    <textarea className="textarea textarea-bordered w-full h-[200px] overflow-y-auto rounded-[5px]" placeholder="Your Message"></textarea>
                    <div>
                        <button className="btn btn-success text-white rounded-[5px] px-[30px] py-[12px]">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;