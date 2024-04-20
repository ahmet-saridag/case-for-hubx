import styles from './App.module.css';
import { FaFileAlt } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { buttonData, contentData } from './db/data';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { ButtonCircle } from './components/buttonCircle';
import { PhoneAnimation } from './components/phoneAnimation';

import 'swiper/css';
import 'swiper/css/pagination';

export function App() {
  const [isSelectButton, setSelectButton] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDesktop = windowWidth < 768;

  const changeButton = (item: Object, index: number) => {
    setSelectButton(index);
  };

  const handleSlideClick = (swiper: any) => {
    const clickedIndex = swiper.clickedIndex;
    swiper.slideTo(clickedIndex);
  };

  return (
    <>
      <section>
        <div className="h-dvh w-full bg-hubx-grey flex items-center">
          <div className="lg:h-4/5 h-full bg-white w-full">
            {contentData.map((item: any, idx: number) => {
              if (idx === isSelectButton) {
                return (
                  <div
                    key={idx}
                    className="flex lg:flex-row flex-col-reverse lg:h-4/5 h-auto lg:w-4/5 lg:m-auto"
                  >
                    <PhoneAnimation images={item.images} index={idx} />
                    <div className="lg:w-1/2 w-11/12 lg:m-0 mx-auto mt-20 lg:h-full h-auto flex flex-col lg:justify-center justify-start lg:items-end items-center animate__animated animate__fadeIn ">
                      <div className="text-blue font-extrabold uppercase text-base">
                        {item.title}
                      </div>
                      <h2 className="text-dark-black text-3xl mt-3 font-bold">
                        {item.subtitle}
                      </h2>
                      <p className="lg:text-xl text-sm font-normal my-5 lg:text-right text-center">
                        {item.text}
                      </p>
                      <button className="lg:text-xl text-sm border border-icon-border px-5 py-3 font-normal">
                        {item.button}
                      </button>
                    </div>
                  </div>
                );
              } else {
                return <div key={idx}></div>;
              }
            })}
            <div className="flex overflow-y-scroll h-1/5">
              {isDesktop ? (
                <Swiper
                  slidesPerView={1.5}
                  spaceBetween={0}
                  onClick={(swiper) => {
                    handleSlideClick(swiper);
                  }}
                >
                  {buttonData.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <button
                          onClick={() => changeButton(item, index)}
                          key={index}
                          className={
                            isSelectButton === index
                              ? 'lg:w-1/5 w-full lg:h-full lg:p-0 py-2 flex justify-center items-center border-icon-border hover:bg-hover-color bg-hover-color'
                              : 'lg:w-1/5 w-full lg:h-full lg:p-0 py-2 flex justify-center items-center border-icon-border hover:border-2 hover:border-dark-blue'
                          }
                        >
                          <ButtonCircle
                            isSelectButton={isSelectButton}
                            index={index}
                            item={item}
                          />
                        </button>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
                buttonData.map((item, index) => {
                  return (
                    <button
                      onClick={() => changeButton(item, index)}
                      key={index}
                      className={
                        isSelectButton === index
                          ? 'lg:w-1/5 w-full h-full flex justify-center items-center border-icon-border hover:bg-hover-color bg-hover-color'
                          : 'lg:w-1/5 w-full h-full flex justify-center items-center border-icon-border hover:border-2 hover:border-dark-blue'
                      }
                    >
                      <ButtonCircle
                        isSelectButton={isSelectButton}
                        index={index}
                        item={item}
                      />
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </>
  );
}
