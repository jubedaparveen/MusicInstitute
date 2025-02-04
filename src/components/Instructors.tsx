'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
    {
      id: 2,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
    {
      id: 3,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
    {
      id: 4,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
    {
      id: 5,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
    {
      id: 6,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
    {
      id: 7,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
    {
      id: 8,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
    {
      id: 9,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
    {
      id: 10,
      name: 'jubeda parveen',
      designation: 'Guitar Instructor',
      image:'/courses/logo.png',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 ">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center shadow-black shadow-2xl py-2 rounded-full border border-slate-500 justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors