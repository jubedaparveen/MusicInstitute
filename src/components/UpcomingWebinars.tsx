'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum reprehenderit qui aliquam, minima fugit sit voluptates consequuntur quibusdam doloribus",
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum reprehenderit qui aliquam, minima fugit sit voluptates consequuntur quibusdam doloribus",
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum reprehenderit qui aliquam, minima fugit sit voluptates consequuntur quibusdam doloribus",
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum reprehenderit qui aliquam, minima fugit sit voluptates consequuntur quibusdam doloribus",
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum reprehenderit qui aliquam, minima fugit sit voluptates consequuntur quibusdam doloribus",
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum reprehenderit qui aliquam, minima fugit sit voluptates consequuntur quibusdam doloribus",
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded-full border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars