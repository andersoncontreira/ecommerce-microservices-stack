
// Components
import ContactForm from "../../components/public/forms/contact/ContactForm.tsx";
import Header from "../../components/public/header/Header.tsx";
import Hero from "../../components/public/sections/hero/Hero.tsx";
import Product from "../../components/public/sections/product/Product.tsx";

const Contact = () => {

    return (
        <>
            <Hero page="contact" />
            <ContactForm></ContactForm>
        </>
    );
}

export default Contact;