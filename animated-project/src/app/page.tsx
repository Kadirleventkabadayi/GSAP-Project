"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row, i) => {
      const cardLeft = row.querySelector(".card-left");
      const cardRight = row.querySelector(".card-right");

      gsap.to(cardLeft, {
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              leftXValues[i] * progress
            }px) translateY(${yValues[i] * progress}px) rotate(${
              leftRotationValues[i] * progress
            }deg)`;
          },
        },
      });

      gsap.to(cardRight, {
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardRight.style.transform = `translateX(${
              rightXValues[i] * progress
            }px) translateY(${yValues[i] * progress}px) rotate(${
              rightRotationValues[i] * progress
            }deg)`;
          },
        },
      });
    });

    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".main",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to(".line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".main",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to("button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".main",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div key={i} className="row">
          <div className="card card-left">
            <img src={`/img-${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img src={`/img-${2 * i}.jpg`} alt="" />
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <ReactLenis root>
        <section className="hero">
          <div className="img">
            <img src="/gsaplogo.png" alt="" />
          </div>
        </section>
        <section className="main">
          <div className="main-content">
            <div className="logo">
              <img src="/newpp.png" alt="" />
            </div>
            <div className="copy">
              <div className="line">
                <p>This will be the first cool text</p>
              </div>
            </div>
            <div className="copy">
              <div className="line">
                <p>This will be the second cool text</p>
              </div>
            </div>
            <div className="copy">
              <div className="line">
                <p>This will be the third cool text</p>
              </div>
            </div>
            <div className="btn">
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  console.log("cliked");
                }}
              >
                Get Contact
              </button>
            </div>
          </div>

          {generateRows()}
        </section>
        <section className="footer">
          <Link href="https://kadirleventkabadayi.vercel.app/">
            Link in description
          </Link>
        </section>
      </ReactLenis>
    </>
  );
}
