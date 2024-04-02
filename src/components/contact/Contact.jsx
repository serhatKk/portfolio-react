import React, { useState, useEffect } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegMap } from 'react-icons/fa';
import './contact.css';
import axios from 'axios';
import shapeOne from "../../assets/shape-1.png";

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [messageSent, setMessageSent] = useState(false);
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);

    useEffect(() => {
        // Check form errors on initial load
        checkFormErrors();
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
        if (value.trim() !== '') {
            setFormErrors({ ...formErrors, [name]: false });
        } else {
            setFormErrors({ ...formErrors, [name]: true });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        let formIsValid = true;
        const newFormErrors = {};
        for (const key in form) {
            if (form.hasOwnProperty(key)) {
                if (form[key].trim() === '') {
                    formIsValid = false;
                    newFormErrors[key] = true;
                }
            }
        }

        if (!formIsValid) {
            setFormErrors(newFormErrors);
            setFormSubmitted(true); // Form submitted but not valid
            setErrorMessageVisible(true);
            setTimeout(() => {
                setErrorMessageVisible(false);
            }, 3000);
            
            return;
        }

        axios.post(
            'https://sheet.best/api/sheets/649733a3-d615-4fa5-b237-9261616920e4',
            form
        ).then((response) => {
            console.log(response);
            // Clear form
            setForm({ name: '', email: '', subject: '', message: '' });
            // Set messageSent to true
            setMessageSent(true);
            // Reset form errors

            setFormSubmitted(false);
            // After 3 seconds, reset messageSent to false
            setTimeout(() => {
                setMessageSent(false);
            }, 3000);
            setFormSubmitted(true);
        });
    };

    const checkFormErrors = () => {
        const errors = {};
        for (const key in form) {
            if (form.hasOwnProperty(key)) {
                if (form[key].trim() === '') {
                    errors[key] = true;
                }
            }
        }
        setFormErrors(errors);
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">İletişim</h2>
            <p className="section__subtitle">
                Mail <span>Gönderin</span>
            </p>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact__cardtit">Adres</h3>
                        <p className="contact__card-data">Uşak,Türkiye</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__cardtit"> Email</h3>
                        <p className="contact__card-data">kahramanserhat43@gmail.com</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>
                        <h3 className="contact__cardtit">Telefon</h3>
                        <p className="contact__card-data">+90 544 313 1657</p>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Adınız <b>{(formSubmitted || formErrors.name || messageSent) && '*'}</b></label>
                            <input
                                type="text"
                                name='name'
                                onChange={handleChange}
                                value={form.name}
                                className="contact__form-input" />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Mail Adresiniz <b>{(formSubmitted || formErrors.email || messageSent) && '*'}</b></label>
                            <input
                                type="email"
                                name='email'
                                onChange={handleChange}
                                value={form.email}
                                className="contact__form-input" />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Konu <b>{(formSubmitted || formErrors.subject || messageSent) && '*'}</b></label>
                        <input
                            type="text"
                            name='subject'
                            onChange={handleChange}
                            value={form.subject}
                            className="contact__form-input" />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">Mesajınız <b>{(formSubmitted || formErrors.message || messageSent) && '*'}</b></label>
                        <textarea
                            className="contact__form-input"
                            name='message'
                            onChange={handleChange}
                            value={form.message}
                        ></textarea>
                    </div>

                    <div className="contact__submit">
                        {errorMessageVisible && (
                            <div className="error-message">Lütfen tüm gerekli alanları doldurunuz.</div>
                        )}
                        {messageSent && <div className="success-message">Mesaj başarıyla gönderildi!</div>}

                        <button type='submit' className='btn text-cs'>Mesaj Gönder</button>
                    </div>
                </form>
            </div>

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className='shape' />
            </div>
            <div className="disable-select">
                <div className="section__bg-wrapper">
                    <span className="bg__title">İletişim</span>
                </div>
            </div>
        </section>
    )
}

export default Contact;
