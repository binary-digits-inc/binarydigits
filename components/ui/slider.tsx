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
          <h2 className="text-4xl font-bold">24/7</h2>
          <p className="text-gray-400 mt-2">
          binarydigits provides round-the-clock tech solutions, ensuring 24/7 availability for seamless support, innovation, and reliability whenever your business needs it.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">$10,000</h2>
          <p className="text-gray-400 mt-2">
          Our company has optimized operations, reduced costs, and enhanced efficiency, helping businesses save over $10,000 through smart tech solutions and strategic innovations.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">100%</h2>
          <p className="text-gray-400 mt-2">
          The company ensures 100% transparency, ethical integrity, and accountability, fostering trust and responsibility in every operation for honest business solutions.</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold">28%</h2>
          <p className="text-gray-400 mt-2">
          We make work faster and easier for both developers and clients with better planning, smart tools, and simple steps, so projects finish 28% quicker without losing quality.</p>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
