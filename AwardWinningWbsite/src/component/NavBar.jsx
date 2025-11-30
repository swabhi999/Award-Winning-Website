import React, { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useWindowScroll } from "react-use";
import { gsap } from "gsap";

const NavItems = ["Nexus", "Vault", "Prolouge", "About", "Contact"];
const NavBar = () => {
  const navContainerRef = useRef(null);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisisble, setIsNavVisisble] = useState(true);

  const { y: CurrentScrollY } = useWindowScroll();

  useEffect(() => {
    if (CurrentScrollY === 0) {
      setIsNavVisisble(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (CurrentScrollY > lastScrollY) {
      setIsNavVisisble(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (CurrentScrollY < lastScrollY) {
      setIsNavVisisble(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(CurrentScrollY);
  }, [CurrentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisisble ? 0 : -100,
      opacity: isNavVisisble ? 1 : 0,
      duration: 0.2,
      ease: "power1.inOut",
    });
  });

  const audioElementRef = useRef(null);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioToggleIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!audioElementRef.current) return;

    if (isAudioPlaying) {
      const playPromise = audioElementRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started playing successfully
          })
          .catch((error) => {
            // Autoplay was prevented or other error occurred
            console.error("Error playing audio:", error);
            setIsAudioPlaying(false);
          });
      }
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all 
    duration-700  sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full  -translate-y-1/2  ">
        <nav className=" flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="Logo" className="w-10" />
            <div className="md:flex hidden">
              <Button
                id="product-button"
                title="products"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 justify-center items-center gap-1"
              />
            </div>
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block ">
              {NavItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn "
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="ml-10 flex items-center space-x-0.5
        "
              onClick={audioToggleIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isAudioPlaying ? "active" : ""}`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                    "--animation-order": bar,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
