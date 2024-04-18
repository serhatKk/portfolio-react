import React from 'react';
import profileImg from '../../assets/profile-img.png';
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import "./home.css";
import CV from "../../assets/Sertankahraman-CV.pdf"


const Home = () => {
    return (

        <section className='home' id='home'>
            <div className="home__wrapper">
                <div className="home__container container">
                    <p className="home__subtitle text-cs">
                        Merhabalar, <span>Ben</span>
                    </p>
                    <h1 className="home__title text-cs"><span>Sertan</span><br />Kahraman
                    </h1>

                    <p className="home__job">
                        <span className="text-cs"></span><b> Bilgisayar Mühendisiyim.</b>
                    </p>

                    <div className="home__img-wrapper">
                        <div className="home__banner">
                            <img src={profileImg} alt="" className='home__profile' />
                        </div>

                        <p className="home__data home__data-one">
                            <span className="text-lg">1 <b>+</b>
                            </span>

                            <span className="text-sm text-cs">
                                Yıl <span>Deneyim</span>
                            </span>

                        </p>

                        <p className="home__data home__data-two">
                            <span className="text-lg">7 <b></b>
                            </span>

                            <span className="text-sm text-cs">
                                Tamamlanmış <span>Proje</span>
                            </span>
                        </p>
                        <img src={shapeOne} alt="" className="shape shape__1" />
                        <img src={shapeTwo} alt="" className="shape shape__2" />
                        <img src={shapeTwo} alt="" className="shape shape__3" />
                    </div>
                    <p className="home__text">
                        İstanbul,Türkiye'de yaşıyorum, C# .Net Windows Forms konusunda deneyimim var ve Python'da da iyiyim. Eğlenceli bir şeyler yapmayı seviyorum.
                    </p>

                    <div className="home__socials">
                        <a href="https://github.com/serhatKk" target="_blank" className="home__socials-link">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/serhat.khrmn" target="_blank" className="home__socials-link">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/Serhat_khrmn" target="_blank" className="home__socials-link">
                            <FaTwitter />
                        </a>
                    </div>

                    <div className="home__btns">
                        <a download='' href={CV} target="_blank" className="btn text-cs">CV İNDİR</a>
                        <a href="#skills" className="hero__link text-cs"> Yeteneklerim</a>
                    </div>

                </div>
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className='shape' />
            </div>

            <div class="disable-select">
                <div className="section__bg-wrapper">
                    <span className="bg__title">Bilgisayar Müh.</span>
                </div>
            </div>
        </section>
    )
}
export default Home

