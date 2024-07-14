"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    // <div>
    //   <Slider {...settings}>
    //     <>
    //       <div className="rounded-md px-2 md:p-10">
    //         <Image
    //           priority
    //           src="/images/bakery.jpg"
    //           alt="logo"
    //           width={500}
    //           height={500}
    //           className="
    //               rounded-2xl
    //                   "
    //         />
    //       </div>
    //     </>

    //     <>
    //       <div className="rounded-md px-2 md:p-10">
    //         <Image
    //           priority
    //           src="/images/business.jpg"
    //           alt="logo"
    //           width={500}
    //           height={500}
    //           className="
    //               rounded-2xl
    //                   "
    //         />
    //       </div>
    //     </>

    //     <>
    //       <div className="rounded-md px-2 md:p-10">
    //         <Image
    //           priority
    //           src="/images/farms1.jpg"
    //           alt="logo"
    //           width={500}
    //           height={500}
    //           className="
    //               rounded-2xl
    //                   "
    //         />
    //       </div>
    //     </>

    //     <>
    //       <div className="rounded-md px-2 md:p-10">
    //         <Image
    //           priority
    //           src="/images/clothing.jpg"
    //           alt="logo"
    //           width={500}
    //           height={500}
    //           className="
    //               rounded-2xl
    //                   "
    //         />
    //       </div>
    //     </>

    //     <>
    //       <div className="rounded-md px-2 md:p-10">
    //         <Image
    //           priority
    //           src="/images/biz1.jpg"
    //           alt="logo"
    //           width={500}
    //           height={500}
    //           className="
    //               rounded-2xl
    //                   "
    //         />
    //       </div>
    //     </>
    //   </Slider>
    // </div>
    <div className="flex flex-wrap justify-around bg-gray-900 p-8">
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">150K</h2>
          <p className="text-gray-400 mt-2">
            Top-notch, highly skilled global talent pool.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">$80,000</h2>
          <p className="text-gray-400 mt-2">
            Cost savings per talent hired through Andela.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">68%</h2>
          <p className="text-gray-400 mt-2">Faster time to hire.</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">35%</h2>
          <p className="text-gray-400 mt-2">Faster project delivery.</p>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
