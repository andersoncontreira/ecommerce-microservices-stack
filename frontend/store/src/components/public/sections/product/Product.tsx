import React from 'react';
import { Product as ProductType } from '../../../../types/Product';
import crossImg from '../../../../assets/images/cross.svg';
import style from './Product.module.scss';

interface ProductProps {
    products: ProductType[];
}

const Product: React.FC<ProductProps> = ({ products }) => {
    return (

        // Start Product Section
        <div className={style.productSection}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className={"mb-4 " + style.sectionTitle}>Crafted with excellent material.</h2>
                        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                        <p><a href="/shop" className="btn">Explore</a></p>
                    </div>
                    {products && products.map(
                        (item, index) =>
                            item.active && (
                                <div key={index} className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                                    <a className={style.productItem} href="/cart">
                                        <img src={item.image} className={"img-fluid " + style.productThumbnail} alt={item.image.replace("images/", "")} />
                                        <h3 className={style.productTitle}>{item.title}</h3>
                                        <strong className={style.productPrice}>${item.price}</strong>
                                        <span className={style.iconCross}>
                                            <img src={crossImg} className="img-fluid" alt="cross.svg" />
                                        </span>
                                    </a>
                                </div>

                            )
                    )}
                </div>
            </div>
        </div>
        // End Product Section
    );
};

export default Product;