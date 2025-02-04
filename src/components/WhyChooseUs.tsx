
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae enim esse fugit. Nam inventore adipisci fugiat neque delectus dolore, sapiente ea ab eveniet cum vitae voluptate ipsam suscipit accusamus.",
        
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae enim esse fugit. Nam inventore adipisci fugiat neque delectus dolore, sapiente ea ab eveniet cum vitae voluptate ipsam suscipit accusamus.",
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae enim esse fugit. Nam inventore adipisci fugiat neque delectus dolore, sapiente ea ab eveniet cum vitae voluptate ipsam suscipit accusamus.",
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae enim esse fugit. Nam inventore adipisci fugiat neque delectus dolore, sapiente ea ab eveniet cum vitae voluptate ipsam suscipit accusamus.",
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae enim esse fugit. Nam inventore adipisci fugiat neque delectus dolore, sapiente ea ab eveniet cum vitae voluptate ipsam suscipit accusamus.",
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae enim esse fugit. Nam inventore adipisci fugiat neque delectus dolore, sapiente ea ab eveniet cum vitae voluptate ipsam suscipit accusamus.",
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs