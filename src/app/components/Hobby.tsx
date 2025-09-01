import React from 'react'
import BentoGrid, {BentoGridItem} from './ui/bento'
import { hobbyItems } from './data/Index'

const Hobby = () => {
  return (
    <section id="hobby">
        <h1 className='text-white text-3xl font-bold mb-10 text-center'>Hobby</h1>
        <BentoGrid className="max-w-6xl mx-auto gap-12">
            {hobbyItems.map(({id, title, description, img, imgClassName}) => (
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

export default Hobby