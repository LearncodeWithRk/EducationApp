import React from 'react'
import Image from 'next/image'

function Brand() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695894674/education%20img/img1_nojh4g.png"  alt=""  width={1920} height={1920}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695894837/education%20img/img2_rxyj8g.png" alt="" width={1920} height={1920}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695894910/education%20img/img3_ub9phi.png" alt="" width={1920} height={1920}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695895006/education%20img/img4_gbwbye.png" alt="" width={1920} height={1920}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695895138/education%20img/img5_do7umz.png" alt="" width={1920} height={1920}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695895216/education%20img/img6_t4qrkb.png" alt="" width={1920} height={1920}/>
            </div>
        </div>
    </div>
</section>

  )
}

export default Brand