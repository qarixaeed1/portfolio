import React from "react";

export default function Thinkific() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <header className="max-w-6xl mx-auto my-10 text-center bg-white dark:bg-gray-800">
                <h3 className="text-3xl md:text-7xl font-black mx-20 my-10 md:leading-relaxed">
                    Need custom features for your Thinkific school?
                </h3>
                <img
                    className="block mx-auto w-24 h-22 md:w-48 md:h-46"
                    src="/Thinkific-Experts-Badge.webp"
                />
            </header>
            <div className="block py-6 md:-my-4 md:py-0">
                <svg className="animate-bounce mx-auto w-6 h-6 text-amber-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900">
                <div className="max-w-6xl mx-auto p-20 text-center dark:bg-gray-900">
                    <p className="text-lg">
                        As a certified Thinkific Development Expert, I can develop any custom feature for your Thinkific site. With excellent Frontend Development Skills I can create a signature experience for your students/customers which will help convert more and increase engagement with your content.
                    </p>
                </div>
            </div>
        </section>
    )
}