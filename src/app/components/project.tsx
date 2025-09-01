import React from 'react'
import BentoGrid, {BentoGridItem} from './ui/bento'
import { projectItems } from './data/Index'

const project = () => {
  return (
    <section id="project" className='pt-20'>
        <h1 className='text-white text-3xl font-bold mb-10 text-center'>Project</h1>
        <BentoGrid className="max-w-6xl mx-auto gap-12">
            {projectItems.map(({id, title, description, img,  imgClassName, titleClassName}) => (
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default project