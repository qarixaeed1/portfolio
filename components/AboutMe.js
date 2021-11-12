import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row">
        <div className="py-16">
          <div className="text-container max-w-6 my-20 mx-4">
            <h3 className="font-black text-4xl py-4" >
              Meet Waleed Shahid
            </h3>
            <p className="text-lg">
              I have 3+ years SOLID experience working as a Website Developer focused on UX .I work with Javascript, HTML, CSS, SASS, React, NextJS, PHP, NODEJS, Express, and Tailwind CSS.
              <br />
              User experience matters the most to me, and I love to develop great User Experiences that brings great results to your business as well as the audience.
              <br />
              I have worked with all the popular CMS and LMS Platforms including, WordPress, Shopify, Teachable, Thinkific and any similar platform.
            </p>
          </div>
        </div>
        <div className="w-full my-20">
          <img src={userData.avatarUrl} alt="Waleed" className="shadow rounded-full" />
        </div>
      </div>
    </section>
  );
}
