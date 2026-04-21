import React from 'react'
import { BentoGrid, BentoGridItem } from "./ui/bento";
import { hobbySkill } from './data/Index'

const Hobby = () => {
  return (
    <section id="hobby">
      <h1 className='text-white text-3xl font-bold mb-10 text-center'>Hobby and Skills</h1>
      <BentoGrid>
        {hobbySkill.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            img={item.img}
            className={item.className}
            renderContent={item.renderContent}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Hobby