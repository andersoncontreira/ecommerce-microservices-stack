
// Components
import Header from "../../components/public/header/Header.tsx";
import Hero from "../../components/public/sections/hero/Hero.tsx";
import Product from "../../components/public/sections/product/Product.tsx";

const About = () => {
    
    const productData = [
        { id: 1, title: 'Nordic Chair', price: 50.00, active: true, image: 'images/product-1.png' },
        { id: 2, title: 'Kruzo Aero Chair', price: 78.00, active: true, image: 'images/product-2.png' },
        { id: 3, title: 'Ergonomic Chair', price: 43.00, active: true, image: 'images/product-3.png' },
        { id: 4, title: 'Classic Chair', price: 60.00, active: false, image: 'images/product-4.png' }
      ];

    return (
        <>
            <Hero page="about"/>
            <Product products={productData} />
        </>
    );
}

export default About;