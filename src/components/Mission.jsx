const Mission = () => {
    return (
        <div>
            <div className="flex flex-col justify-center gap-5">
                <h1 className="text-[40px] font-[600]">Our Mission</h1>
                <article className="text-[16px] font-[400]">
                    {
                        `
                        At Course Hero, our mission is to empower learners worldwide by providing access to the resources, support, and tools they need to excel in their educational journeys. We believe that every student, regardless of their background or location, should have the opportunity to reach their full academic potential.

                        Our commitment to this mission is driven by the belief that education is the key to personal and professional growth. We understand the challenges students face, from demanding coursework to complex subjects. That's why we have built a platform that offers a vast library of study materials, expert tutors, and a global community of learners who come together to support one another.
                        
                        We strive to make education accessible and affordable for all. With Course Hero, students can access a wealth of resources, including study guides, practice exams, and textbook solutions, to aid in their understanding of course materials. Our platform promotes collaboration, as students can share their own study materials, making learning a collective effort.
                        
                        We are dedicated to providing 24/7 access to expert tutors who offer personalized guidance, ensuring that students can overcome challenges and build their confidence in any subject. By breaking down barriers and connecting learners worldwide, Course Hero is more than just a platform; it's a catalyst for academic excellence.
                        
                        Our mission is not only to help students succeed academically but also to inspire a lifelong love for learning. With Course Hero, learners are equipped to conquer their educational goals and achieve a brighter future. Together, we're transforming education and shaping a world where knowledge knows no bounds.
                        `
                    }
                </article>
            </div>
        </div>
    );
};

export default Mission;