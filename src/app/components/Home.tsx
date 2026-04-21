import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from "@/lib/utils";
import Button from './ui/button'
import { TextGenerateEffect as Text } from './ui/text'

const Home = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight  />
        </div>

         <div className=" flex h-[50rem] w-full items-center justify-center bg-white dark:bg-secondary absolute top-0 left-0">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-secondary"></div>
    </div>

    <div className='flex justify-center relative my-20'>
        <div className='max-w-[89vw] items-center flex flex-col justify-center'>
          <p className=" tracking-widest text-sm text-center text-blue-100 max-w-80">
            Muhammad Novel, Developer Pemulax
          </p>
            <Text 
            className='text-[40px]'
            words='Hi, welcome to My Portfolio'
            />
            <div className='mt-6'>
              <a href='#about'>
              <Button 
              title='Eksplore my Portfolio'
              />
              </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home