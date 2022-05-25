import React from 'react';
import clsx from 'clsx';

export default function CardNav({
  className,
  handleCategoryClick,
  stateOfTimeFramesCategory,
}) {
  console.log(stateOfTimeFramesCategory);
  return (
    <div className={`${className} sm:h-[520px]`}>
      <div
        className={`sm:w-[255px] w-full flex flex-col rounded-2xl bg-dark-blue`}
      >
        <div className=" bg-soft-violet sm:h-[355px] sm:p-[30px] p-7 rounded-2xl flex items-center sm:items-start sm:flex-col gap-4">
          <div className="sm:h-[84px] sm:w-[84px] h-[70px] w-[70px] border-2 border-white rounded-full sm:mb-[35px]">
            <img src="/img/image-jeremy.png" alt="" />
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
              <button
                onClick={() => handleCategoryClick('daily')}
                className={`${clsx(
                  stateOfTimeFramesCategory === 'daily' && 'text-white'
                )} hover:text-white`}
              >
                Daily
              </button>
            </li>
            <li className="">
              <button
                onClick={() => handleCategoryClick('weekly')}
                className={`${clsx(
                  stateOfTimeFramesCategory === 'weekly' && 'text-white'
                )} hover:text-white`}
              >
                Weekly
              </button>
            </li>
            <li className="">
              <button
                onClick={() => handleCategoryClick('monthly')}
                className={`${clsx(
                  stateOfTimeFramesCategory === 'monthly' && 'text-white'
                )} hover:text-white`}
              >
                Monthly
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
