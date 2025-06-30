"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaPlay, FaPause } from "react-icons/fa";
import ReactCurvedText from "react-curved-text";

const AudioWithPreloader = () => {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const countRef = useRef({ val: 1 });
  const [count, setCount] = useState(1);

  // Refs for timeline animation
  const curvedTextRef = useRef(null);
  const countRefEl = useRef(null);
  const loaderRef = useRef(null);

useGSAP(() => {
  // ⛔ Skip animation if already not loading or refs missing
  if (!loading || !curvedTextRef.current || !countRefEl.current) return;

  const tl = gsap.timeline();

  tl.fromTo(
    curvedTextRef.current,
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
  )
    .fromTo(
      countRefEl.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
      },
      "-=0.5"
    )
    .to(countRef.current, {
      val: 100,
      duration: 2,
      ease: "power1.out",
      onUpdate: () => {
        setCount(Math.floor(countRef.current.val));
      },
    })
    .to(countRefEl.current, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        setLoading(false);
      },
    });

  return () => {
    tl.kill();
    gsap.set([curvedTextRef.current, countRefEl.current], { clearProps: "all" });
  };
}, [loading]); // ✅ always same shape

useEffect(() => {
  if (typeof window !== "undefined") {
    const hasEntered = sessionStorage.getItem("hasEntered");
    if (hasEntered) {
      setLoading(false);
      setEntered(true);
    }
  }
}, []);

  const handleEnter = () => {
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setEntered(true);
        sessionStorage.setItem("hasEntered", "true");
      })
      .catch((err) => {
        console.log("⛔ Autoplay blocked:", err);
      });
  };

useEffect(() => {
  if (entered) return; // ⛔ prevent unnecessary autoplay attempt

  const timer = setTimeout(() => {
    if (!isPlaying && !entered) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setEntered(true);
          sessionStorage.setItem("hasEntered", "true");
        })
        .catch((err) => {
          console.log("⛔ Autoplay blocked:", err);
        });
    }
  }, 1000);

  return () => clearTimeout(timer);
}, [entered, isPlaying]);

const togglePlay = () => {
  const audio = audioRef.current;
  if (isPlaying) {
    audio.pause();
    setIsPlaying(false);
  } else {
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(console.error);
  }
};

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src="/audio/background.mp3" />

      {loading && (
        <div
          ref={loaderRef}
          className="fixed inset-0 bg-black text-white flex items-center justify-center text-2xl z-[9999]"
        >
          <div className="roundedText" ref={curvedTextRef}>
            <ReactCurvedText
              key="rizznart-loader"
              width={300}
              height={300}
              cx={150}
              cy={150}
              rx={130}
              ry={130}
              startOffset={0}
              reversed={true}
              text="- High-Quality Design That Impress | RizzNArt - High-Quality Design That Impress | RizzNArt - High-Quality Design That Impress - High-Quality Design That Impress"
              textProps={{ style: { fontSize: 12.7 } }}
              textPathProps={{ style: { fill: "#B1FF01" } }}
              tspanProps={{
                style: { color: "#fff", textTransform: "uppercase" },
              }}
              ellipseProps={null}
              svgProps={null}
            />
          </div>

          <div
            ref={countRefEl}
            className="absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit z-50"
          >
            <h1 className="tall text-5xl mt-5 text-[#B1FF01]">{count}</h1>
          </div>
        </div>
      )}

      {!loading && !entered && (
        <div className="fixed inset-0 bg-black flex items-center justify-center flex-col z-[9998] text-white">
          <div className="dan-warp"></div>
          <div className="prelod">
            <img src="/img/preload.png" alt="Logo" className="h-32 glitch" />
          </div>
          <p className="text-xl mb-6 uppercase italic font-semibold">
            Turn Up The Volume, Baby. The Future Won't Wait.
          </p>
          <button onClick={handleEnter} className="group flex gap-2 text-xl">
            <span className="group-hover:text-[#B1FF01]">[</span>
            <span>Discover the Future</span>
            <span className="group-hover:text-[#B1FF01]">]</span>
          </button>
        </div>
      )}

      {entered && (
        <div>
          {/* <div className="p-6 text-white">🎉 Your site is now visible!</div> */}

          <div
            onClick={togglePlay}
            className={`fixed top-4 right-4 z-50 bg-[#B1FF01] backdrop-blur-lg w-10 h-10 flex items-center justify-center ${
              entered && !isPlaying ? "blinking" : ""
            }`}
          >
            <button
              className={`text-[#18181A] text-sm hover:scale-110 transition-transform ${
                entered && !isPlaying ? "blinking-child" : ""
              }`}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioWithPreloader;
