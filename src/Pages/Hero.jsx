import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Play, Users } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const dotsRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const subheadline2Ref = useRef(null);
  const buttonsRef = useRef(null);
  const bgElement1Ref = useRef(null);
  const bgElement2Ref = useRef(null);
  const floatingElement1Ref = useRef(null);
  const floatingElement2Ref = useRef(null);
  const demoButtonRef = useRef(null);
  const waitlistButtonRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          logoRef.current,
          dotsRef.current,
          headlineRef.current,
          subheadlineRef.current,
          subheadline2Ref.current,
          buttonsRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      const tl = gsap.timeline();

      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          dotsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          subheadlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          subheadline2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );

      gsap.to(dotsRef.current.children, {
        scale: 1.2,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      gsap.to(bgElement1Ref.current, {
        x: 30,
        y: -20,
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(bgElement2Ref.current, {
        x: -40,
        y: 30,
        duration: 10,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(floatingElement1Ref.current, {
        y: -20,
        x: 10,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(floatingElement2Ref.current, {
        y: 20,
        x: -30,
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    const mouseMoveHandler = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  const handleDemoButtonEnter = () => {
    gsap.to(demoButtonRef.current, {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(227, 6, 19, 0.3)",
      backgroundColor: "#c70511",
      duration: 0.001,
      ease: "power2.out",
    });

    gsap.to(demoButtonRef.current.querySelector(".play-icon"), {
      rotation: 360,
      duration: 1,
      ease: "power2.out",
    });
  };

  const handleDemoButtonLeave = () => {
    gsap.to(demoButtonRef.current, {
      scale: 1,
      boxShadow: "0 10px 20px rgba(227, 6, 19, 0.2)",
      backgroundColor: "#e30613",
      duration: 0.0001,
      ease: "power2.out",
    });
  };

  const handleWaitlistButtonEnter = () => {
    gsap.to(waitlistButtonRef.current, {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      borderColor: "#e30613",
      duration: 0.0001,
      ease: "power2.out",
    });

    gsap.to(waitlistButtonRef.current.querySelector(".users-icon"), {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleWaitlistButtonLeave = () => {
    gsap.to(waitlistButtonRef.current, {
      scale: 1,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
      borderColor: "#d1d5db",
      duration: 0.0001,
      ease: "power2.out",
    });

    gsap.to(waitlistButtonRef.current.querySelector(".users-icon"), {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonClick = (buttonRef) => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br pt-5 from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgElement1Ref}
          className="absolute top-10 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl"
        />
        <div
          ref={bgElement2Ref}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col gap-3">
        <div className="">
          <div
            ref={logoRef}
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 rounded-2xl px-6 py-4 mb-5 shadow-lg cursor-pointer"
            onMouseEnter={() =>
              gsap.to(logoRef.current, {
                scale: 1.1,
                rotation: 2,
                duration: 0.3,
              })
            }
            onMouseLeave={() =>
              gsap.to(logoRef.current, {
                scale: 1.05,
                rotation: 0,
                duration: 0.3,
              })
            }
            onClick={() =>
              gsap.to(logoRef.current, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
              })
            }
          >
            <span className="text-white font-bold text-2xl tracking-wide">
              DMI
            </span>
          </div>

          <div ref={dotsRef} className="flex justify-center space-x-3 mb-5">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full opacity-50"
                style={{ backgroundColor: "#e30613" }}
              />
            ))}
          </div>
        </div>

        <h1
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 leading-tight flex"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          <p className="text-gray-900">
            Design Made
            <span
              style={{ color: "#e30613" }}
              onMouseEnter={(e) =>
                gsap.to(e.target, { scale: 1.01, duration: 0.3 })
              }
              onMouseLeave={(e) =>
                gsap.to(e.target, { scale: 1, duration: 0.3 })
              }
              className="inline-block  ml-2"
            >
              Intelligent
            </span>
          </p>
        </h1>

        <h2
          ref={subheadlineRef}
          className="text-xl md:text-2xl lg:text-3xl text-gray-600  font-medium mb-2 max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: "Inter" }}
        >
          From brand kit to launch-ready content, websites & apps — powered by
          AI.
        </h2>
        <h2
          ref={subheadline2Ref}
          className="text-base md:text-md lg:text-lg text-gray-500 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Join 500+ funded startups using DMI to create professional brand
          identities, social content, and app interfaces in minutes, not months.
        </h2>
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            ref={demoButtonRef}
            className="px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:gap-4 shadow-lg transition-all duration-300"
            style={{
              backgroundColor: "#e30613",
              color: "white",
            }}
            onMouseEnter={handleDemoButtonEnter}
            onMouseLeave={handleDemoButtonLeave}
            onClick={() => handleButtonClick(demoButtonRef)}
          >
            <div className="play-icon">
              <Play className="w-5 h-5" fill="currentColor" />
            </div>
            Try the Demo
          </button>

          <button
            ref={waitlistButtonRef}
            className="bg-white hover:bg-gray-50 text-gray-700 hover:text-[#e30613] font-semibold px-8 py-4 rounded-full border-2 border-gray-200 flex items-center gap-3 hover:gap-4 shadow-lg transition-all duration-300 text-lg"
            onMouseEnter={handleWaitlistButtonEnter}
            onMouseLeave={handleWaitlistButtonLeave}
            onClick={() => handleButtonClick(waitlistButtonRef)}
          >
            <div className="users-icon">
              <Users className="w-5 h-5 " />
            </div>
            Join Waitlist
          </button>
        </div>

        <div
          ref={floatingElement1Ref}
          className="absolute top-36 left-0 w-4 h-4 rounded-full opacity-60"
          style={{ backgroundColor: "#e30613" }}
        />
        <div
          ref={floatingElement2Ref}
          className="absolute bottom-36 right-0 w-3 h-3 rounded-full bg-black opacity-40"
        />
      </div>

      <div
        ref={cursorRef}
        className="w-6 h-6 rounded-full bg-slate-700/40 fixed top-0 left-0 pointer-events-none z-50"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
