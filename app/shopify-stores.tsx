"use client";

import Image from "next/image";
import dash1 from "./assets/dash1.png";
import dash2 from "./assets/dash2.jpg";
import dash3 from "./assets/dash3.png";

const stores = [
  {
    image: "/images/image2.png",
    quote: "Bird showed us to get started, what to do, and how to do it.",
    name: "Jason Scer",
  },
  {
    image: "/images/shop-2.jpeg",
    quote:
      "We had no idea how to get started, but Bird showed us the way. And we were able to create something amazing.",
    name: "John Prency",
  },

  {
    image: "/images/s-2.webp",
    quote:
      "The team at Bird is amazing. They helped us create a stunning store that we are proud of.",
    name: "Miguel Martinez",
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Business Analytics <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          We help create stunning analytics dashboards that enable quick
          comprehension of your business objectives.
        </p>
        {/* <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-around bg-gray-900 p-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <Image
                priority
                src={dash1}
                alt="dash"
                width={500}
                height={500}
                className="rounded-2xl"
              />
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                View dashboard
              </button>
              <p className="text-gray-400 mt-2">
                binary digits is othe best tech agency in kenya and the
                continent
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <Image
                priority
                src={dash1}
                alt="dash"
                width={500}
                height={500}
                className="rounded-2xl"
              />
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                View dashboard
              </button>
              <p className="text-gray-400 mt-2">
                binary digits is othe best tech agency in kenya and the
                continent
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <Image
                priority
                src={dash1}
                alt="dash"
                width={500}
                height={500}
                className="rounded-2xl"
              />
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                View dashboard
              </button>
              <p className="text-gray-400 mt-2">
                binary digits is othe best tech agency in kenya and the
                continent
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
