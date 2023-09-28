import React from 'react'
import Image from 'next/image'
function About() {
  return (

    
    <section className="py-10 bg-white sm:py-16 lg:py-2">
    <div className="container mx-auto 2xl:px-5">
        <Image className="w-full mt-6" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695898449/education%20img/abouts_pkasyl.png" alt="" width={1920} height={1920}></Image>
    </div>
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
       
        <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray--200 -my-9">
                <div className="py-9">
                    <p className="text-xl font-semibold text-black">How to create an account?</p>
                    <p className="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <p className="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">What payment method do you support?</p>
                    <p className="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">What payment method do you support?</p>
                    <p className="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">How do you provide support?</p>
                    <p className="mt-3 text-base text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">support@example.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default About