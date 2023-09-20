import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import Brand from '@/components/Brand'
import Course from '@/components/Course'
import Categories from '@/components/Categories'
import Feature from '@/components/Feature'
import Testimonials from '@/components/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Hero />
   <Brand />
   <Course />
   <Feature />
   <Categories />
   <Info />
<Testimonials />
   
   </>
  )
}
