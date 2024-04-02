import React, { useEffect, useState } from 'react'
import { links } from '../../Data'
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs'
import shapeOne from "../../assets/shape-1.png";
import './header.css'
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    }
    return theme
}
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [theme, setTheme] = useState(getStorageTheme());
    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    };

    const toogleTheme = () => {
        if (theme == 'light-theme') {
            setTheme('dark-theme')
        }
        else {
            setTheme('light-theme')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme)
    }, [theme]);

    return (
        <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
            <nav className="nav">
                <Link to='/' onClick={scrollTop} className="nav__logo text-cs">Sertan</Link>
                <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {links.map(({ name, path }, index) => {
                                return (
                                    <li className="nav__item" key={index}>
                                        <Link
                                            className='nav__link text-cs'
                                            to={path}
                                            spy={true}
                                            hashSpy={true}
                                            smooth={true}
                                            offset={-85}
                                            duration={300}
                                            onClick={() => setShowMenu(!showMenu)}

                                        >
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="header__socials">
                            <a href="https://github.com/serhatKk" target="_blank" className="header__socials-link">
                                <FaGithub />
                            </a>
                            <a href="https://www.instagram.com/serhat.khrmn" target="_blank" className="header__socials-link">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com/Serhat_khrmn" target="_blank" className="header__socials-link">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div className="section__deco deco__left header__deco">
                        <img src={shapeOne} alt="" className='shape' />
                    </div>
                </div>
                <div className="nav__btns">
                    <div className="theme__toggle" onClick={toogleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                    </div>
                    <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() =>
                        setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header