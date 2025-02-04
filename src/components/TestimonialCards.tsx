'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eos minus a dolor cupiditate quo iste laborum rem? Placeat quas molestias quia, similique rerum assumenda aspernatur eos consequatur numquam iste.',
      name: 'Jubeda Parveen',
      title: 'Guitar Student',
    },
    {
      quote:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eos minus a dolor cupiditate quo iste laborum rem? Placeat quas molestias quia, similique rerum assumenda aspernatur eos consequatur numquam iste.',
      name: 'Jubeda Parveen',
      title: 'Piano Student',
    },
    {
      quote:
       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eos minus a dolor cupiditate quo iste laborum rem? Placeat quas molestias quia, similique rerum assumenda aspernatur eos consequatur numquam iste.',
      name: 'Jubeda Parveen',
      title: 'Vocal Student',
    },
    {
      quote:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eos minus a dolor cupiditate quo iste laborum rem? Placeat quas molestias quia, similique rerum assumenda aspernatur eos consequatur numquam iste.',
      name: 'Jubeda Parveen',
      title: 'Violin Student',
    },
    {
      quote:
       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eos minus a dolor cupiditate quo iste laborum rem? Placeat quas molestias quia, similique rerum assumenda aspernatur eos consequatur numquam iste.',
      name: 'Jubeda Parveen',
      title: 'Music Production Student',
    },
  ];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Lorem ipsum dolor sit: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials