import React, { useState, useEffect } from 'react';

export function ButtonCircle(props: any) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Yüzde değerini her 100ms'de bir artır
      setPercent((prevPercent) => {
        if (prevPercent < 100) {
          return prevPercent + 1;
        } else {
          clearInterval(interval); // Yüzde 100'e ulaştığında setInterval'i durdur
          return prevPercent;
        }
      });
    }, 7);

    return () => {
      clearInterval(interval);
      setPercent(0);
    };
  }, [props.isSelectButton]);

  const circumference = 30 * 2 * Math.PI;
  return (
    <>
      <div className="inline-flex items-center justify-center rounded-full relative">
        <svg className="w-20 h-20">
          <circle
            className="text-icon-border"
            strokeWidth="3"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />
          {props.isSelectButton === props.index && (
            <circle
              className="text-blue"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (percent / 100) * circumference}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="30"
              cx="40"
              cy="40"
            />
          )}
        </svg>
        <span className="absolute text-xl text-blue-700">
          <img
            src={
              props.isSelectButton === props.index
                ? props.item.iconBlue
                : props.item.icon
            }
            title={props.item.title}
            className=" xl:h-6 xl:w-6 h-5 w-5 "
          />
        </span>
      </div>
      <span className="xxl:text-xl xl:text-lg lg:text-md text-sm text-black font-medium xxl:ml-3 xl:ml-1 ml-0">
        {props.item.title}
      </span>
    </>
  );
}
