import React from 'react'
import { assets } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'


const About = () => {
    return (
        <motion.div
        initial={{ opacity: 0, x:100}}
      transition={{ duration: 1 }}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
         className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-2 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated To Your Vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'></img>

                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2x1:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Year of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p>OngoinG Projects</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel odit sequi asperiores maxime fuga odio temporibus, saepe dignissimos qui? Sit excepturi voluptatem quod quidem eaque illum voluptatum exercitationem, nesciunt laudantium consequatur rem? Nemo, esse voluptas? Pariatur totam fugiat provident ducimus dignissimos, aperiam eveniet nulla sint velit, non, hic vitae ratione?</p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>

                </div>
            </div>

        </motion.div>
    )
}

export default About
