import React, { useState, useEffect } from 'react';

export function PhoneAnimation(props: any) {
  let content = <></>;

  switch (props.index) {
    case 0:
      content = (
        <>
          <img
            src={props.images[0]}
            alt=""
            className="lg:w-80 w-52 object-cover mt-5 pt-5 animate__animated animate__fadeInUp"
          />
        </>
      );
      break;
    case 1:
      content = (
        <>
          <div className="lg:w-80 w-52 h-80 absolute lg:-translate-x-32 lg:translate-y-10 -translate-x-24 translate-y-20 flex items-center justify-center z-10">
            <img
              src={props.images[1]}
              alt=""
              className="lg:w-40 w-28 object-cover animate__animated animate__zoomIn animate__delay-1s"
            />
          </div>
          <img
            src={props.images[0]}
            alt=""
            className="lg:w-80 w-52 object-cover mt-5 pt-5 animate__animated animate__fadeInUp"
          />
          <div className="lg:w-80 w-52 h-80 absolute lg:translate-x-32 lg:-translate-y-10 translate-x-28  -translate-y-1 flex items-center justify-center z-10">
            <img
              src={props.images[2]}
              alt=""
              className="lg:w-48 w-32 object-cover animate__animated animate__zoomIn animate__delay-2s"
            />
          </div>
        </>
      );
      break;
    case 2:
      content = (
        <>
          <img
            src={props.images[1]}
            alt=""
            className="lg:w-72 w-48 absolute lg:-bottom-8 -bottom-4 z-10 object-cover animate__animated animate__slideInUp animate__delay-1s"
          />
          <img
            src={props.images[1]}
            alt=""
            className="lg:w-72 w-48 absolute lg:-bottom-14 -bottom-6 z-10 object-cover animate__animated animate__slideInUp animate__delay-2s"
          />
          <img
            src={props.images[1]}
            alt=""
            className="lg:w-72 w-48 absolute lg:-bottom-20 -bottom-8 z-10 object-cover animate__animated animate__slideInUp animate__delay-3s"
          />
          <img
            src={props.images[0]}
            alt=""
            className="lg:w-80 w-52 object-cover mt-5 pt-5 animate__animated animate__fadeInUp"
          />
        </>
      );
      break;
    case 3:
      content = (
        <>
          <div className="lg:w-80 w-52 h-80 absolute lg:-translate-x-40 lg:-translate-y-5 -translate-x-28 translate-y-10  flex items-center justify-center z-10">
            <img
              src={props.images[1]}
              alt=""
              className="lg:w-8 w-6 z-10 object-cover animate__animated animate__fadeIn animate__delay-1s"
            />
          </div>

          <img
            src={props.images[0]}
            alt=""
            className="lg:w-80 w-52 object-cover mt-5 pt-5 animate__animated animate__fadeInUp"
          />
          <div className="lg:w-80 w-52 h-80 absolute lg:translate-x-40 translate-x-28  lg:-translate-y-5 translate-y-10 flex items-center justify-center z-10">
            <img
              src={props.images[2]}
              alt=""
              className="lg:w-8 w-6 object-cover animate__animated animate__fadeIn animate__delay-1s"
            />
          </div>
        </>
      );
      break;
    case 4:
      content = (
        <>
          <div className="lg:w-80 w-52 h-80 absolute lg:-translate-x-44 -translate-x-32 translate-y-32 lg:translate-y-28 flex items-center justify-center z-10">
            <img
              src={props.images[2]}
              alt=""
              className="lg:w-8 w-5 object-cover animate__animated animate__fadeInBottomRight animate__delay-1s"
            />
          </div>
          <div className="lg:w-80 w-52 h-80 absolute lg:-translate-x-28 -translate-x-20 translate-y-20 lg:translate-y-10 flex items-center justify-center z-10">
            <img
              src={props.images[3]}
              alt=""
              className="lg:w-36 w-24 z-10 object-cover animate__animated animate__fadeInBottomRight animate__delay-2s"
            />
          </div>
          <div className="lg:w-80 w-52 h-80 absolute  lg:translate-y-5 translate-y-16 flex items-center justify-center z-10">
            <img
              src={props.images[1]}
              alt=""
              className="lg:w-32 w-20 object-cover animate__animated animate__fadeInUpBig animate__delay-3s"
            />
          </div>
          <div className="lg:w-80 w-52 h-80 absolute lg:translate-x-32 translate-x-24 translate-y-20 lg:translate-y-10 flex items-center justify-center z-10">
            <img
              src={props.images[4]}
              alt=""
              className="lg:w-36 w-24 object-cover animate__animated animate__fadeInBottomLeft animate__delay-4s"
            />
          </div>
          <img
            src={props.images[0]}
            alt=""
            className="lg:w-80 w-52 object-cover mt-5 pt-5 animate__animated animate__fadeInUp"
          />
        </>
      );
      break;
    default:
      break;
  }

  return (
    <>
      <div className="lg:w-1/2 relative overflow-hidden lg:h-full flex items-end justify-center h-auto w-full">
        {content}
      </div>
    </>
  );
}
