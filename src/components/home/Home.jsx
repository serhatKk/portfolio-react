import profileImg from '../../assets/profile-img.png';
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import {FaTwitter,FaInstagram,FaGithub} from 'react-icons/fa';
import "./home.css";


const Home = () => {
    return (
                
        <section className='home' id='home'>
            <div className="home__wrapper">
            <div className="home__container container">
                <p className="home__subtitle text-cs">
                    Hello,<span>My Name is</span>
                </p>
                <h1 className="home__title text-cs"><span>Sertan</span> Kahraman
                </h1>
                <p className="home__job">
                    <span className="text-cs">I Am</span><b> PC Engineer</b>
                </p>
                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profileImg} alt="" className='home__profile' />
                    </div>

                 <p className="home__data home__data-one">
                   <span className="text-lg">1 <b>+</b>
                   </span>

                   <span className="text-sm text-cs">
                    Years of <span>Experince</span>
                   </span>
                    
                 </p>

                 <p className="home__data home__data-two">
                   <span className="text-lg">
                    10
                   </span>

                   <span className="text-sm text-cs">
                    Completed <span>Projects</span>
                   </span>
                 </p>
                 <img src={shapeOne} alt="" className="shape shape__1" />
                 <img src={shapeTwo} alt="" className="shape shape__2" />
                 <img src={shapeTwo}alt="" className="shape shape__3" />
                </div>
                <p className="home__text">
                    From Usak, Turkiye. I have rich experience in C# .Net Windows Forms also I am good at Python.  I love to do somethings fun.
                </p>
                <div className="home__socials">
                    <a href="https://github.com/serhatKk" target="_blank" className="home__socials-link">
                        <FaGithub/>
                    </a>
                    <a href="https://www.instagram.com/serhat.khrmn" target="_blank" className="home__socials-link">
                        <FaInstagram/>
                    </a>
                    <a href="https://twitter.com/Serhat_khrmn" target="_blank" className="home__socials-link">
                        <FaTwitter/>
                    </a>
                </div>
                <div className="home__btns">
                    <a href="https://drive.usercontent.google.com/download?id=1hTZ35VkHMhi1is9r8fmooUDIX7AZA9B4&export=download&authuser=2&confirm=t&uuid=d9b97876-c3b5-489d-a31a-8963b2f30969&at=APZUnTVjWQiQ4dx4otrOnn7HMfhL:1711545056500"target="_blank" className="btn text-cs">Download CV</a>
                    <a href="" className="hero__link text-cs">My Skills</a>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Home