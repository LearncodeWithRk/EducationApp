import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function classNamees() {
  return (

    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="max-w-2xl text-center mx-auto">
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Changing the world …  <span class="text-blue-600">Learning</span></h1>
          <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Discover the program in pictures</p>
        </div>
    
        <div class="mt-10 relative max-w-5xl mx-auto">
          <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://res.cloudinary.com/dysxcljt2/image/upload/v1695897456/education%20img/pexels-august-de-richelieu-4260325_iwx7jb.jpg')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
    
          <div class="absolute inset-0 w-full h-full">
            <div class="flex flex-col justify-center items-center w-full h-full">
              <Link class="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black" href="#">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                </svg>
                Play the overview
              </Link>
            </div>
          </div>
    
          <div class="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
            <div class="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
          </div>
    
          <div class="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div class="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto 2xl:px-12">
        <Image className="w-full mt-6" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693646925/education%20img/illustration_iunhwt.png" alt="" width={1920} height={1920}></Image>
    </div>
    </div>


    
        )
    }
 

export default classNamees