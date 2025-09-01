import React from 'react'
import BentoGrid, {BentoGridItem} from './ui/bento'
import { skillItems } from './data/Index'

const Skill = () => {
  return (
    <section id="skill" className='pt-20'>
        <h1 className='text-white text-3xl font-bold mb-10 text-center'>Skill</h1>
        <BentoGrid className="max-w-6xl mx-auto gap-12">
            {skillItems.map(({id, title, description, img,  imgClassName}) => (
                <BentoGridItem
                key={id}
                title={title}
                description={description}
                img={img}
                imgClassName={imgClassName}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Skill