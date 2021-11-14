import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row py-20">
        <div className="text-container max-w-6 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-10 md:my-0 md:text-white dark:text-gray-600 text-left" >
            Meet Waleed Shahid
          </h1>
          <p className="text-lg md:-my-10">
            I have 3+ years SOLID experience working as a Website Developer focused on UX .I work with Javascript, HTML, CSS, SASS, React, NextJS, PHP, NODEJS, Express, and Tailwind CSS.
            <br />
            User experience matters the most to me, and I love to develop great User Experiences that brings great results to your business as well as the audience.
            <br />
            I have worked with all the popular CMS and LMS Platforms including, WordPress, Shopify, Teachable, Thinkific and any similar platform.
          </p>
        </div>
        <div className="w-full">
          <img src={userData.avatarUrl} alt="Waleed" className="shadow rounded-full" />
        </div>
      </div>
    </section>
  );
}
