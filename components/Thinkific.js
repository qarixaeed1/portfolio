import React from "react";
import CountUp from "react-countup";
import Testimonial from "./Testimonial";


export default function Thinkific() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <header className="max-w-6xl mx-auto my-10 text-center bg-white dark:bg-gray-800">
                <h3 className="text-4xl md:text-7xl font-black mx-20 my-10 md:leading-relaxed">
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
                        As a certified Thinkific Development Expert, we can develop any custom feature for your Thinkific site. With excellent Frontend Development Skills we can create a signature experience for your students/customers which will help convert more and increase engagement with your content.
                    </p>
                    <div className="flex flex-col md:flex-row justify-around py-6 mt-4 border-4 border-white">
                        <div>
                            <p className="text-3xl md:text-5xl py-2">
                                <CountUp end="100" duration="2" />+
                            </p>
                            Features Developed
                        </div>
                        <p className="border-b-4 w-full md:border-l-4 border-white md:h-24 md:w-0" />
                        <div>
                            <p className="text-3xl md:text-5xl py-2">
                                <CountUp end="15" duration="2" />+
                            </p>
                            Happy Clients
                        </div>
                        <p className="border-b-4 w-full md:border-l-4 border-white md:h-24 md:w-0" />
                        <div>
                            <p className="text-3xl md:text-5xl py-2">
                                <CountUp end="20" duration="2" />+
                            </p>
                            Sites Built
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-6xl mx-auto p-20 text-center">
                <h3 className="text-4xl md:text-6xl font-black py-10">
                    Thinkific Services
                    <span className="block w-1/6 mx-auto border-b-4 border-[#3B82F6] pt-4"></span>
                </h3>

                <div className="flex flex-col md:flex-row">
                    <div className="m-6">
                        <h1 className="text-2xl font-bold py-4">
                            Custom App/Feature Development
                        </h1>
                        <span className="block w-1/6 mx-auto border-b-2 border-[#F59E0B]"></span>
                        <p className="text-lg py-6">
                            We develop a complete solution for any of your custom Apps/Feature needs. We develop Apps through Thinkific APIs and our Full-Stack skills.
                        </p>
                    </div>
                    <div className="m-6">
                        <h1 className="text-2xl font-bold py-4">
                            Site Design and Development
                        </h1>
                        <span className="block w-1/6 mx-auto border-b-2 border-[#84CC16]"></span>
                        <p className="text-lg py-6">
                            We can completely reimagine the design of your School according to your needs. We can implement any technical new feature you need which requires coding.
                        </p>
                    </div><div className="m-6">
                        <h1 className="text-2xl font-bold py-4">
                            3rd Party Tools Integration
                        </h1>
                        <span className="block w-1/6 mx-auto border-b-2 border-[#3B82F6]"></span>
                        <p className="text-lg py-6">
                            We can integrate your School data with any of your current services like CRM, Zapier, Payment Automation Vendors etc. We can also develop a custom integration with code.
                        </p>
                    </div>
                </div>
            </div>
            <Testimonial />
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center my-10 lg:my-20">
                    <img
                        className="hidden lg:block w-1/3 rounded-md mx-auto"
                        src="/t-badge-gray.jpg"
                     />
                    <div className="p-4 lg:p-20 lg:ml-20">
                        <h3 className="text-3xl lg:text-5xl font-bold">
                            Why Hire Us?
                        </h3>
                        <div className="py-10 text-lg">
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>One-way Commitment:</strong> Once we take your project, there is no coming back, we implement it by any means possible
                            </p>
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>Best Practices:</strong> We take every detail seriously, and ensure the quality of our work matches industry standard
                            </p>
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>Error-free Code:</strong> We test our code rigorously with all possible scenarios before making the project live
                            </p>
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>Experience:</strong> We bring alot of experience from various industries at various levels
                            </p>
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>Straight-forward:</strong> We do not make any commitments if we are not 100% sure about the outcome. We value your time!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            
        </section>
    )
}