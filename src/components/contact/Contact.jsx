import React, { useState } from 'react'
import { FaRegAddressBook ,FaRegEnvelope,FaRegMap} from 'react-icons/fa'
import './contact.css'
import axios from 'axios';
const Contact = () => {
    const [form,setForm]=useState({
        name:'',
        email:'',
        subject:'',
        message:''
    });

    const handleChange=(e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form,[name]: value });

    };

    const handleSubmit=(e) =>{
        e.preventDefault();

        axios.post(
            'https://sheet.best/api/sheets/649733a3-d615-4fa5-b237-9261616920e4',
            form
        ).then((response) => {
            console.log(response);
            //clear form 
            setForm({name:'',email:'',subject:'',message:''});
        });
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
                    <label className="contact__form-tag text-cs">Adınız <b>*</b></label>
                    <input
                     type="text"
                     name='name'
                     onChange={handleChange}
                     value={form.name} 
                     className="contact__form-input" />
                </div>
                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Mail Adresiniz <b>*</b></label>
                    <input 
                     type="email" 
                     name='email'
                     onChange={handleChange}
                     value={form.email} 
                     className="contact__form-input" />
                </div>
            </div>

            <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Konu <b>*</b></label>
                    <input 
                    type="text"
                    name='subject'
                    onChange={handleChange}
                    value={form.subject}  
                    className="contact__form-input" />
             </div>
             <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">Mesajınız <b>*</b></label>
                 <textarea 
                 className="contact__form-input"
                 name='message'
                 onChange={handleChange}
                 value={form.message} 
                 ></textarea>
                </div>
            <div className="contact__submit">
                <button type='submit' className='btn text-cs'>Mesaj Gönder</button>
            </div>

        </form>
        </div>
    </section>
  )
}

export default Contact