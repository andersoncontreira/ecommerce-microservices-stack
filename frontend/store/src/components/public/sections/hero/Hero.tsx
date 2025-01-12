import couchImg from '../../../../assets/images/couch.png'
import style from './Hero.module.scss';
const Hero = () => {
    return (
        // Start Hero Section
        <div className={style.hero}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className={style.introExcerpt}>
                            <h1>Modern Interior <span className="d-block">Design Studio</span></h1>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src={couchImg} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // End Hero Section 
    );
}

export default Hero;