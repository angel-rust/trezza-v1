import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to the TREZZA PROTOCOL
        </p>

        <AnimatedTitle
          title="The <b>w</b>orld's fastest<br />blockchain protocol"
          containerClass="mt-5 !text-black text-center"
        />

<div className="about-subtext mt-16 text-center">
          {/* Make the heading larger */}
          <p className="text-3xl font-bold md:text-4xl lg:text-5xl">The Future of Transactions Starts Now</p>
<p className="text-black size-fit">
  TREZZA is Evolutionizing the payment system by eliminating transaction fees. We're building a decentralized ecosystem to process the world's transactions, empowering merchants and users alike to engage in seamless, cost-free exchanges. Join the Evolution, and let's reshape the financial landscape.
</p>

        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
             src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;