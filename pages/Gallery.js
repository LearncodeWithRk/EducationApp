import React from 'react'
import Image from 'next/image'

function Gallery() {
  return (
    <section className="py-6 dark:bg-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<Image className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695897930/education%20img/pexels-julia-m-cameron-4145354_blospd.jpg" alt="" width={1920} height={1920}/>
			<Image className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695897930/education%20img/pexels-rfstudio-3059748_rd7tqm.jpg" alt=""width={1920} height={1920}/>
			<Image className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695897929/education%20img/pexels-jopwell-2422294_dbkvr9.jpg"alt="" width={1920} height={1920}/>
			<Image className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695897929/education%20img/pexels-julia-m-cameron-4143800_d1o93f.jpg" alt="" width={1920} height={1920} />
		</div>
	</div>
</section>
  )
}

export default Gallery