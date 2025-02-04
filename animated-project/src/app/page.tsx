"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

export default function Home() {
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div key={i} className="row">
          <div className="card card-left">
            <img src="/newpp.png" alt="" />
          </div>
          <div className="card card-right">
            <img src="/newpp.png" alt="" />
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
            <img src="/newpp.png" alt="" />
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
              <button>Get PRO</button>
            </div>
          </div>

          {generateRows()}
        </section>
        <section className="footer">
          <Link href="https://kadirleventkabadayi.vercel.app/">
            Link is description
          </Link>
        </section>
      </ReactLenis>
    </>
  );
}
