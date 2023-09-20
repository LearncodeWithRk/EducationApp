import React from 'react'

function Gallery() {
  return (
    <section className="py-6 dark:bg-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/3775128/pexels-photo-3775128.jpeg?auto=compress&cs=tinysrgb&w=600" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/5588217/pexels-photo-5588217.jpeg?auto=compress&cs=tinysrgb&w=600" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=600" />
		</div>
	</div>
</section>
  )
}

export default Gallery