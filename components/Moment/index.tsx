"use client";
import { Suspense } from "react";
import ReactPlayer from "react-player";
export const Moment = () => {
  return (
    <section className="w-full bg-[#f4f4f4]  pt-[60px]">
      <div className="px-16 py-20 flex flex-col items-center">
        <span>
          Well-being is more than one thing. It’s the moments you need it to be.
          The moments you never expect. And the ones you never want to leave.
        </span>
        <br />

        <span>JW MARRIOTT. STAY IN THE MOMENT®.</span>
      </div>
      <div className="w-full">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Mlq9jrXbEFo&list=RDMlq9jrXbEFo&start_radio=1"
          width="100%"
          height={475}
          controls={true}
          fallback={<div>Loading...</div>}
        />
      </div>
      <div className="px-16 py-20 flex flex-col">
        <span className="avenir text-2xl">CREATE MOMENTS OF CONNECTION</span>

        <span className="pt-3">
          In a story of golden hour, find meaning in the smallest of
          interactions and hold onto moments that transform.
        </span>
      </div>
    </section>
  );
};
