import React from 'react'
import Features1 from './Features1'
import Gallery from './Gallery'

function Features() {
  return (
   
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
     
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Best Course Program Features <br></br> For Students</h2>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Lorem ipsum is a placeholder text commonly used to demonstrate the visual</p>
      </div>
     
    
    
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <a class="group rounded-xl overflow-hidden" href="#">
          <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Description"></img>
            <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
              Sponsored
            </span>
          </div>
    
          <div class="mt-7">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
             Join Now Course
            </h3>
            <p class="mt-3 text-gray-800 dark:text-gray-200">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
            </p>
            <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
             Bou Now
              <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </p>
          </div>
        </a>
       
        <a class="group rounded-xl overflow-hidden" href="#">
          <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.pexels.com/photos/374897/pexels-photo-374897.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image Description"></img>
          </div>
    
          <div class="mt-7">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
            Join Now Course
            </h3>
            <p class="mt-3 text-gray-800 dark:text-gray-200">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
            </p>
            <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
              Buy Now
              <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </p>
          </div>
        </a>
       
        <a class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.pexels.com/photos/4626343/pexels-photo-4626343.jpeg?auto=compress&cs=tinysrgb&w=600')]" href="#">
          <div class="flex-auto p-4 md:p-6">
            <h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">Course</span> Lorem ipsum is a placeholder text commonly used to demonstrate the visual </h3>
          </div>
          <div class="pt-0 p-4 md:p-6">
            <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
              Visit the site
              <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
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