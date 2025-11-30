import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";  
import AnimatedTitle from "./animatedTitle"; 



const About = () => {


gsap.registerPlugin(ScrollTrigger)


  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center ",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to('.mask-clip-path',{
        width:'100vw',
        height:'100vh',
        borderRadius:0
    })
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          welcome to zentry
        </h2>

        <AnimatedTitle
        title="discover the  world's
          largest adventure"
          containerClass='mt-5 !text-black text-center'
        />
        <div className="about-subtext">
          <p>The game of the games begin's you life, now an epic MMORPG</p>
          <p>Zentry unites every player form every games and platform</p>
        </div>
      </div>
      <div  id='clip' className="h-dvh w-screen ">
        <div className="mask-clip-path about-image">
          <img
            src=" img/about.webp"
            alt=" BackGround"
            className=" absolute left-0 right-0 size-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
