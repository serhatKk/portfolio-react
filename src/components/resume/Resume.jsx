import React from 'react'
import { cv } from '../../Data'
import Card from './Card'
import shapeOne from "../../assets/shape-1.png";
import './resume.css'

const Resume = () => {
  return (
    <section className="resume section" id="section">
        <h2 className="section__title text-cs">Devam</h2>
        <p className="section__subtitle">
            Benim <span>Hikayem</span>
        </p>

        <div className="resume__container container grid">
            <div className="resume__group">
                <h3 className="resume__heading">Eğitim</h3>
                <div className="resume__items">
                    {cv.map((val,id)=> {
                        if(val.category === 'education'){
                            return(
                                <Card 
                                key={id}
                                title={val.title} 
                                subtitle={val.subtitle}
                                date={val.date} 
                                description={val.description}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            <div className="resume__group">
                <h3 className="resume__heading">Deneyim</h3>
                <div className="resume__items">
                    {cv.map((val,id)=> {
                        if(val.category === 'experience'){
                            return(
                                <Card 
                                key={id}
                                title={val.title} 
                                subtitle={val.subtitle}
                                date={val.date}
                                description={val.description}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </div>

        <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className='shape' />
          </div>

    </section>
  )
}

export default Resume