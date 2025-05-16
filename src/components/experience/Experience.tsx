'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { TracingBeam } from '../ui/tracing-beam';
import { NextPage } from 'next';
import SectionTitle from '../common/section-title';

const Experience: NextPage = ({}) => {
  return (
    <div id='experience'>
      <SectionTitle
        data={{
          title: 'Experiences',
          subtile: 'This is my journey in technology'
        }}
      />
      <TracingBeam className='pl-2 md:pl-6 pr-3'>
        <div className='antialiased relative'>
          {content.map((item, index) => (
            <div key={`content-${index}`} className='mb-10 ml-10'>
              <p className={twMerge('text-md font-medium')}>{item.year}</p>
              <p className={twMerge('mb-4 text-base text-muted-foreground')}>{item.title}</p>
              <div className='prose prose-sm dark:prose-invert'>
                {item?.image && (
                  <div className='flex flex-col md:flex-row md:gap-5'>
                    {item.image.map((image, index) => {
                      return (
                        <DirectionAwareHover key={`Direction - ${index}`} imageUrl={image.src.src} className='rounded-2xl w-full max-h-[380px] mb-10 object-cover grayscale hover:grayscale-0 shadow-2xl shadow-primary-500/30 dark:shadow-neutral-500/20 duration-500'>
                          <p className='font-bold text-xl'>{image.imageDescription}</p>
                          <p className='font-normal'>{image.imageSubDescription}</p>
                        </DirectionAwareHover>
                      );
                    })}
                  </div>
                )}
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Experience;

const content = [
  {
    title: 'Computer Laboratory Assistant & Maintainer at FKI Universitas Muhammadiyah Surakarta',
    year: '2023 - Now',
    description: <p>During my time as a student, I took on the role of a computer laboratory assistant and maintainer at the Faculty of Communication and Informatics (FKI) at Universitas Muhammadiyah Surakarta. This role allowed me to assist students in various lab practices. My responsibilities included guiding students through hands-on tasks, troubleshooting issues, and ensuring that the lab&rsquo;s equipment was always in optimal condition. Working closely with both students and faculty members, I honed my technical and communication skills, and the experience taught me the importance of teamwork, patience, and attention to detail. Being a mentor and playing a key part in maintaining the smooth operation of the computer lab was a rewarding experience that helped me grow both professionally and personally.</p>,
    image: [
      {
        src: ExperienceImageConstants.assistant1,
        imageDescription: 'Operating system practice in the lab',
        imageSubDescription: 'They are students who trained with me when I was an assistant.'
      },
      {
        src: ExperienceImageConstants.assistant2,
        imageDescription: 'Award Certificate',
        imageSubDescription: 'I received a certificate of appreciation for completing my work as a computer lab assistant for Algorithms and Programming. '
      }
      // {
      //   src: ExperienceImageConstants.assistant1,
      //   imageDescription: "Operating system practice in the lab",
      //   imageSubDescription:
      //     "They are students who trained with me when I was an assistant.",
      // },
    ]
  },
  {
    title: 'Core Team Google Developer Student Club Universitas Muhammadiyah Surakarta',
    year: '2023 - 2024',
    description: (
      <p>
        As a member of the Core Team for the Google Developer Student Club (GDSC) at Universitas Muhammadiyah Surakarta, I played an active role in the AI/ML department, where our focus was on exploring and developing innovations in artificial intelligence and machine learning. GDSC is a global community that fosters collaboration and learning within the technology sector. As part of this initiative, I had the opportunity to contribute to a variety of projects, collaborate with like-minded peers, and stay up-to-date with the latest advancements in AI and ML. We organized tech talks, workshops, and hands-on coding sessions to help fellow students deepen their understanding of these cutting-edge fields. My involvement in GDSC has not only strengthened my technical expertise but also expanded my leadership and project management skills. Being surrounded by such a vibrant, driven community has been incredibly motivating and has given me invaluable insights into how technology can be
        leveraged to solve real-world problems.
      </p>
    ),
    image: [
      {
        src: ExperienceImageConstants.gdsc1,
        imageDescription: 'GDSC Core Team',
        imageSubDescription: 'When I was a member of the GDSC Core Team'
      },
      {
        src: ExperienceImageConstants.gdsc2,
        imageDescription: 'GDSC Tech Talk Series',
        imageSubDescription: 'This is my team at AI/ML Department as GDSC Core Team member'
      }
    ]
  }
];

import { ExperienceImageConstants } from '@/constants/experience-image-constants';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
