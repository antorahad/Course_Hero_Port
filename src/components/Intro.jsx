const Intro = () => {
    return (
        <div>
            <div className="flex flex-col justify-center gap-5">
                <h1 className="text-[40px] font-[600]">Course Hero Your Ultimate <br /> Online Learning Companion</h1>
                <article className="text-[16px] font-[400]">
                    {
                        `
                    In today's digital age, education has evolved beyond the confines of traditional classrooms. With the rise of online learning, Course Hero has emerged as a leading platform, revolutionizing the way students access educational resources. This online educational hub is a beacon of knowledge, offering a vast array of study materials and tools to help students succeed in their academic journey.

                    Course Hero provides students with a treasure trove of study resources, including lecture notes, practice exams, and textbook solutions. These resources aid students in comprehending complex subjects and achieving their academic goals. Furthermore, the platform encourages collaboration and knowledge sharing, as students can upload and share their own study materials, earning rewards in the process.

                    One of Course Hero's standout features is 24/7 access to expert tutors who can provide personalized assistance, clarifying doubts and boosting confidence in challenging subjects. This instant support ensures that no student is left struggling with their coursework.

                    With a mission to empower students to learn more effectively, Course Hero has become an indispensable tool for modern education. It not only simplifies the learning process but also connects a global community of learners, fostering a spirit of collaboration and knowledge exchange. For students seeking an enhanced learning experience, Course Hero is the ultimate destination for academic excellence.
                    `
                    }
                </article>
            </div>
        </div>
    );
};

export default Intro;