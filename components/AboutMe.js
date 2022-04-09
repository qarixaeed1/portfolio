import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-[#F1F1F1] dark:bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row text-center lg:text-left">
        <div className="text-container max-w-6">
          <h1 className="text-4xl lg:text-7xl max-w-lg font-bold my-10 dark:text-gray-600 lg:text-left" >
            Meet Waleed
          </h1>
          <p className="text-lg mx-4">
            I help you connect the most crucial technical dots of success for your business on Thinkific. With experience working with Enterprise clients who deliver courses to large audience at global scale, I am able to create custom made solutions that perfectly suits your needs.
            <br />
            With 3+ years of experience in e-learning industry and 30+ successful projects I have some real value to bring on the table which will bring peace-of-mind to your company and will surely create exceptional results, that you deserve.
          </p>
        </div>
        <div className="w-full pt-10 mx-auto">
          <img src={userData.avatarUrl} alt="Waleed" className="shadow rounded-full mx-auto w-3/4 border-4 border-gray-50" />
        </div>
      </div>
    </section>
  );
}
