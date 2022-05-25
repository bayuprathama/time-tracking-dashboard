import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function CardNav({
  className,
  handleCategoryClick,
  stateOfTimeFramesCategory,
}) {
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
    <motion.div variants={child} className={`${className} sm:h-[520px]`}>
      <div
        className={`sm:w-[255px] w-full flex flex-col rounded-2xl bg-dark-blue`}
      >
        <div className=" bg-soft-violet sm:h-[355px] sm:p-[30px] p-7 rounded-2xl flex items-center sm:items-start sm:flex-col gap-4">
          <div className="sm:h-[84px] sm:w-[84px] h-[70px] w-[70px] border-2 border-white rounded-full sm:mb-[35px]">
            <img src="/time-tracking-dashboard/img/image-jeremy.png" alt="" />
          </div>
          <div className="">
            <p className="text-pale-blue">Report for</p>
            <p className="flex sm:flex-col text-white sm:text-[40px] text-2xl leading-tight font-light">
              Jeremy Robson
            </p>
          </div>
        </div>
        <div className="sm:flex sm:items-center bg-dark-blue py-[25px] sm:px-[30px] px-7 sm:h-[165px] text-desaturated-blue rounded-2xl">
          <ul className="text-sm gap-[15px] sm:text-lg flex sm:flex-col justify-between sm:justify-start">
            <li className="">
              <motion.button
                whileHover={
                  stateOfTimeFramesCategory !== 'daily' ? { scale: 1.02 } : {}
                }
                whileTap={
                  stateOfTimeFramesCategory !== 'daily' ? { scale: 0.92 } : {}
                }
                onClick={() => handleCategoryClick('daily')}
                className={`${clsx(
                  stateOfTimeFramesCategory === 'daily'
                    ? 'text-white hover:text-white'
                    : 'hover:text-pale-blue'
                )} `}
              >
                Daily
              </motion.button>
            </li>
            <li className="">
              <motion.button
                whileHover={
                  stateOfTimeFramesCategory !== 'weekly' ? { scale: 1.02 } : {}
                }
                whileTap={
                  stateOfTimeFramesCategory !== 'weekly' ? { scale: 0.92 } : {}
                }
                onClick={() => handleCategoryClick('weekly')}
                className={`${clsx(
                  stateOfTimeFramesCategory === 'weekly'
                    ? 'text-white hover:text-white'
                    : 'hover:text-pale-blue'
                )} `}
              >
                Weekly
              </motion.button>
            </li>
            <li className="">
              <motion.button
                whileHover={
                  stateOfTimeFramesCategory !== 'monthly' ? { scale: 1.02 } : {}
                }
                whileTap={
                  stateOfTimeFramesCategory !== 'monthly' ? { scale: 0.92 } : {}
                }
                onClick={() => handleCategoryClick('monthly')}
                className={`${clsx(
                  stateOfTimeFramesCategory === 'monthly'
                    ? 'text-white hover:text-white'
                    : 'hover:text-pale-blue'
                )} `}
              >
                Monthly
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
