import React from 'react';
import './App.css';
import './index.css'; // CSS dosyasını burada içe aktarın

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx'; 
import Services from './components/services/Services.jsx';
import Skills from './components/skills/Skills.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Resume from './components/resume/Resume.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
    return (
        <main className='main'>
            <Header/>
            <Home /> 
            <Services/>
            <Skills/>
            <Portfolio/>
            <Resume/>
            <Contact/>
            <Footer/>
        </main>
    );
    
}
export default App;