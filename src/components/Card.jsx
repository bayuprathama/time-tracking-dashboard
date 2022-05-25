import React from 'react';
import IconEllipsis from './IconEllipsis';
import { motion } from 'framer-motion';

export default function Card({ variant, category, cardData }) {
  const variants = {
    work: {
      backgroundColor: 'bg-light-orange',
      iconURL: 'icon-work.svg',
    },
    play: {
      backgroundColor: 'bg-soft-blue',
      iconURL: 'icon-play.svg',
    },
    study: {
      backgroundColor: 'bg-light-red',
      iconURL: 'icon-study.svg',
    },
    exercise: {
      backgroundColor: 'bg-lime-green',
      iconURL: 'icon-exercise.svg',
    },
    social: {
      backgroundColor: 'bg-violet',
      iconURL: 'icon-social.svg',
    },
    selfCare: {
      backgroundColor: 'bg-soft-orange',
      iconURL: 'icon-self-care.svg',
    },
  };

  let categoryAdjToNoun = '';

  switch (category) {
    case 'weekly':
      categoryAdjToNoun = 'week';
      break;
    case 'daily':
      categoryAdjToNoun = 'day';
      break;
    case 'monthly':
      categoryAdjToNoun = 'month';
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 5 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const child = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div>
      <motion.div
        variants={child}
        style={{
          backgroundImage: `url(/time-tracking-dashboard/img/${variants[variant].iconURL})`,
          backgroundPosition: 'right 20px top -5px',
        }}
        className={`sm:w-[255px] bg-clip-p-box w-full h-[160px] sm:h-[244px] relative justify-end bg-no-repeat ${variants[variant].backgroundColor} rounded-2xl`}
      >
        <motion.div
          key={category}
          variants={container}
          initial="hidden"
          animate="show"
          className="h-[120px] sm:h-[200px] bg-clip-p-box absolute bottom-[-1px] right-0 left-0 bg-dark-blue sm:py-[25px] px-6 py-6 sm:px-[30px] text-white rounded-2xl hover:bg-card-active-blue cursor-pointer"
        >
          <div className="flex items-center justify-between sm:mb-[15px]">
            <h3 className="font-medium text-white text-md">
              {cardData[variant].title}
            </h3>
            <div className="py-2 text-pale-blue hover:text-white">
              <IconEllipsis className="" />
            </div>
          </div>
          <div className="flex items-baseline justify-between sm:items-start sm:flex-col">
            <motion.h3
              variants={item}
              className="sm:text-[55px] text-[30px] font-light"
            >
              {cardData[variant].timeframes[category].current}
              hrs
            </motion.h3>
            <motion.p variants={item} className="text-pale-blue">
              Last {categoryAdjToNoun} -{' '}
              {cardData[variant].timeframes[category].previous}
              hrs
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
