import React from 'react'
import Features1 from './Features1'
import Gallery from './Gallery'
import Image from 'next/image'


function Features() {
  return (
   
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
     
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Best Course Program Features <br></br> For Students</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Lorem ipsum is a placeholder text commonly used to demonstrate the visual</p>
      </div>
     
    
    
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <Image className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695898064/education%20img/pexels-august-de-richelieu-4261790_ljumc3.jpg" alt="Image Description" width={1920} height={1920}></Image>
            <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
              Education
            </span>
          </div>
    
          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
             Join Now Course
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
             Bou Now
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </p>
          </div>
        </a>
       
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <Image className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695897456/education%20img/pexels-august-de-richelieu-4260325_iwx7jb.jpg" alt="Image Description" width={1920} height={1920}></Image>
          </div>
    
          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
            Join Now Course
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Buy Now
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </p>
          </div>
        </a>
       
        <a className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://Images.pexels.com/photos/4626343/pexels-photo-4626343.jpeg?auto=compress&cs=tinysrgb&w=600')]" href="#">
          <div className="flex-auto p-4 md:p-6">
            <h3 className="text-xl text-white/[.9] group-hover:text-white"><span className="font-bold">Course</span> Lorem ipsum is a placeholder text commonly used to demonstrate the visual </h3>
          </div>
          <div className="pt-0 p-4 md:p-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
              Visit the site
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </a>
      
      </div>
    <Features1 />
    <Gallery />
    </div>
   

  )
}

export default Features