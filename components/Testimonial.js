import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"

import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);

export default function Testimonial() {
    return (
        <div className="bg-[#F1F1F1] dark:bg-gray-900 py-20">
            <h3 className="text-4xl md:text-6xl text-center font-black pb-10">
                Happy Clients!
                <span className="block w-1/6 mx-auto border-b-4 border-[#3B82F6] pt-4"></span>
            </h3>
            <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                className="max-w-6xl text-center"
            >
                <SwiperSlide className="px-20">
                    <p className="italic text-lg">
                        "This was the best experience, Waleed did a fantastic job in creating my Online Program using Thinkific. His attention to detail was amazing, he demonstrated a sincere desire to ensure my students would receive a great online experience. Waleed met the due date and was very professional in all the dealings we had together. I will recommend Waleed to my all clients...."
                    </p>
                    <div className="my-10">
                        <img
                            src="/darren.jpeg"
                            className="h-28 w-28 rounded-full mx-auto border-2 border-gray-50"
                        />
                        <p className="text-xl uppercase font-bold">Darren Finkelstein</p>
                        <p>Accountability Coach</p>
                        <a
                            href="https://tickthoseboxes.com.au"
                            target="_blank"
                            className="text-blue-500 underline"
                        >
                            Tickthoseboxes.com.au
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="px-20">
                    <p className="italic text-lg">
                        "Very good and open communication. Far above anything I experienced so far on upwork and fiverr. Waleed also did an initial call to clarify all the topics we worked on and it really felt comfortable to know who is doing the work on the other side.
                        His ability to listen and adapt and at the same time share his opinion is very useful.
                        I am looking forward to further engagements.
                        Would definetely recommend."
                    </p>
                    <div className="my-10">
                        <img
                            src="/jure.jpg"
                            className="h-28 w-28 rounded-full mx-auto border-2 border-gray-50"
                        />
                        <p className="text-xl uppercase font-bold">Jure Kocman</p>
                        <p>Founder EDUCATA</p>
                        <a
                            href="https://mojasola.thinkific.com"
                            target="_blank"
                            className="text-blue-500 underline"
                        >
                            Mojasola.com
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="px-20">
                    <p className="italic text-lg">
                        "Waleed went above and beyond for us. We are in the process of building a membership based website and were expecting to have to fork over a good amount of money for a CRM. Waleed was able to create a website with many free plugins that accomplished the same thing that an expensive CRM would have done for us. We would highly recommend Waleed for any website building project. He really seemed to care for our best interests."
                    </p>
                    <div className="my-10">
                        <img
                            src="/p-male.jpeg"
                            className="h-28 w-28 rounded-full mx-auto border-2 border-gray-50"
                        />
                        <p className="text-xl uppercase font-bold">Michael Castagna</p>
                        <p>Real Estate Coach</p>
                        <a
                            href="https://quest4cashflow.com"
                            target="_blank"
                            className="text-blue-500 underline"
                        >
                            Questforcashflow.com
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="px-20">
                    <p className="italic text-lg">
                        "Muhammad is switched on, keen to deliver quality work and always gives suggestion to ensure you make the best decision, on how to do things better. He also learnt photoshop to help me with some artwork fixes I needed. Quick to respond as well. Overall, I think he's a bright mind and awesome to work with. I will use him in the future to manage evolving, tweaks and fixes on my site."
                    </p>
                    <div className="my-10">
                        <img
                            src="/ann.png"
                            className="h-28 w-28 rounded-full mx-auto border-2 border-gray-50"
                        />
                        <p className="text-xl uppercase font-bold">Ann Boothello</p>
                        <p>Purpose Coach | Performing Artist & Poet</p>
                        <a
                            href="https://annboothello.com"
                            target="_blank"
                            className="text-blue-500 underline"
                        >
                            Annboothello.com
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="px-20">
                    <p className="italic text-lg">
                        "I hired Muhammad to help configure and customize my elearning platform. Muhammad was collaborative, responsive and did a great job with the project. I would recommend him and work with him again."
                    </p>
                    <div className="my-10">
                        <img
                            src="/jayme.jpg"
                            className="h-28 w-28 rounded-full mx-auto border-2 border-gray-50"
                        />
                        <p className="text-xl uppercase font-bold">Jayme Derkson</p>
                        <p>Founder MyStarryChart</p>
                        <a
                            href="https://mystarrychart.com/"
                            target="_blank"
                            className="text-blue-500 underline"
                        >
                            Mystarrychart.com
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}