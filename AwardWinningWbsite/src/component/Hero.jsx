import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [HasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);



  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      if (HasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center ",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            if (nextVideoRef.current) {
              nextVideoRef.current.play().catch((error) => {
                console.error("Error playing video:", error);
              });
            }
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          ease: "power1.inOut",
          duration: 1.5,
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );


  useEffect(() => {
    if (LoadedVideos === totalVideos - 1) {
      console.log("loaded", LoadedVideos);
      setIsLoading(false);
    }
  }, [LoadedVideos]);


  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: " polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: " polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  const upcomingVideosIndex = (currentIndex % totalVideos) + 1;

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;


  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  
  const MiniVdclick = () => {
    setHasClicked(true);
    // setCurrentIndex((prev) => prev + 1);
    setCurrentIndex((prev) => (prev % totalVideos) + 1);
  };
  return (
    <div className="relative h-[100dvh] overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative  z-10 h-[100dvh] w-screen
        overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
            <div
              onClick={MiniVdclick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={currentVideoRef}
                src={getVideoSrc(upcomingVideosIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            muted
            loop
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center "
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            muted
            loop
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-50 text-blue-75 sm:text-7xl md:text-8xl lg:text-9xl">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className=" special-font hero-heading text-blue-100 sm:text-7xl md:text-8xl lg:text-9xl">
              {" "}
              redefi <b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br />
              Unleash the Play Economy{" "}
            </p>
            <Button
              id="watch-trialer"
              title="Watch-trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black sm:text-7xl md:text-8xl lg:text-9xl">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
