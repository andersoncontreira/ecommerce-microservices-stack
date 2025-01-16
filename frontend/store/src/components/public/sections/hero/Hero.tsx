import React from 'react';
import couchImg from '../../../../assets/images/couch.png';
import style from './Hero.module.scss';

interface HeroProps {
    page: string;
}

const Hero: React.FC<HeroProps> = ({ page }) => {

    const renderContent = (title: string, description: string) => (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className={style.introExcerpt}>
                        <h1>{title}</h1>
                        <p className="mb-4">{description}</p>
                        <p>
                            <a href="/shop" className="btn btn-secondary me-2">Shop Now</a>
                            <a href="/services" className="btn btn-white-outline">Explore</a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className={style.heroImgWrap}>
                        <img src={couchImg} className="img-fluid" alt="Couch" />
                    </div>
                </div>
            </div>
        </div>
    );

    const content = (() => {
        switch (page) {
            case 'contact':
                return renderContent('Contact', 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.');
            case 'home':
            default:
                return renderContent('Modern Interior Design Studio', 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.');
        }
    })();

    return (
        <div className={style.hero}>
            {content}
        </div>
    );
}

export default Hero;