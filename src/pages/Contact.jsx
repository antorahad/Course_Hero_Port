import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto space-y-6 py-14">
                <ContactInfo />
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;