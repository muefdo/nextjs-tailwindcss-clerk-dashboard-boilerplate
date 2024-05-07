import React from "react";

const WhyUs = () => {
  return (
    <div className="mt-20 mx-5 text-white bg-gradient-to-r w-full from-sky-300  to-sky-400  py-20 rounded-xl">
      <div className="grid justify-center items-center">
        <h1 className="md:text-5xl text-4xl font-bold text-center font-mont">
          Why Should You Work with Us?
        </h1>
        <ul className="font-light md:text-2xl text-lg text-center mt-5"
            style={{ fontFamily: 'Mont-Light'}}

        >
          <li>24/7 Strong and Fast Support.</li>
          <li>High-impact design with a great user experience.</li>
          <li>Easy addition of updates and new modules.</li>
          <li>Option for custom software development tailored to your needs.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyUs;
