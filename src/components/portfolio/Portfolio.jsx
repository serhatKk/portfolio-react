import React, { useState } from 'react'
import List from './List'
import Items from './Items'
import { projects } from '../../Data'
import shapeOne from "../../assets/shape-1.png";
import './portfolio.css'
import { AnimatePresence } from 'framer-motion'

const allNavList = [
  'HEPSİ',
  ...new Set(projects.map((project) => project.category)),
];
const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects)
  const [navList, setCategory] = useState(allNavList)

  const filterItems = (category) => {
    if (category === 'HEPSİ') {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter((item) => item.category === category);
    setMenuItems(newProjectItems)
  }
  return (
    <section className='portfolio section' id='work'>
      <h2 className="section__title text-cs">Portföy</h2>
      <p className="section__subtitle">
        Tamamlanmış <span>Projeler</span>
      </p>

      <List list={navList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className='shape' />
      </div>
      <div class="disable-select">
        <div className="section__bg-wrapper">
          <span className="bg__title">Projeler</span>
        </div>
      </div>
    </section>
  )
}
export default Portfolio
