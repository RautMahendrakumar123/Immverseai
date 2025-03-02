import React, { useState } from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={` text-white relative ${styles.bgDark}`}>
        <div className={styles.element3}><img src="/element3.svg" alt=""/></div>
        <div className={styles.element1}><img src="/element2.svg" alt=""/></div>
        <div className={styles.element2}><img src="/element1.svg" alt=""/></div>
      <nav className="navbar navbar-expand-lg py-3 px-4">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <img src="/ImmverseAI.svg" alt="logo" height="20" />
          </Link>
          <button
            className="navbar-toggler text-white border-0"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={30} color="white" />
            ) : (
              <Menu size={30} color="white" />
            )}
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto d-flex gap-lg-4 gap-2 align-items-center">
              <li className="nav-item">
                <Link href="/Home" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Company" className="nav-link text-white">
                  Company
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Features" className="nav-link text-white">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <button className={`px-4 py-2 ${styles.customButton}`}>
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container py-5">
        <div className="row ">
        <div className="col-md-6 text-center text-md-start pt-lg-3 pt-md-2 pt-0">
            <h1 className="fw-bold mb-3 py-3 section-header">
              Let’s Explore Three-Dimensional Visual
            </h1>
            <p className="text-light mb-4 py-3">
              With virtual technology, you can see the digital world feel more
              real, and you can play the game with a new style.
            </p>
            <div className="d-flex gap-3 py-3 justify-content-center justify-content-lg-start">
              <button className={`px-4 py-2 ${styles.customButton}`}>
                Get it Now
              </button>
              <span className="text-white fw-bold cursor-pointer d-flex justify-content-center align-items-center">
                Explore Device
              </span>
            </div>
            <div className="d-flex pt-4 justify-content-center justify-content-lg-start">
              <div>
                <img src="/group1.svg" alt="groups" width={150} height={50} />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <ul>
                  <li>400k people online</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/group.svg"
              alt="group"
              className="img-fluid w-100"
              style={{ maxWidth: "500px", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          <div
            className="col-md-9 position-relative d-none d-md-block"
            style={{ height: "600px" }}
          >
            <div
              className="position-absolute top-10 start-3"
              style={{ width: "280px" }}
            >
              <Image src="/lady.svg" alt="VR Woman" width={280} height={360} />
            </div>

            <div
              className="position-absolute start-50"
              style={{
                top: "35%",
                transform: "translateX(-50%)",
                width: "280px",
              }}
            >
              <Image src="/man.svg" alt="VR Man" width={280} height={360} />
            </div>
          </div>

          <div className="col-12 d-block d-md-none text-center">
            <Image
              src="/lady.svg"
              alt="VR Woman"
              width={250}
              height={350}
              className="mb-3"
            />
            <Image src="/man.svg" alt="VR Man" width={250} height={350} />
          </div>

          <div className="col-md-3 text-white pt-lg-5 pt-md-4 pt-0 text-center pt-3">
            <h1 className="fw-bold section-header">New Experience In Playing Game</h1>
            <p>
              You can try playing the game with a new style and of course a more
              real feel, like you are the main character in your game and
              adventure in this new digital world.
            </p>
            <Link href="/get-started">
              <button className={`px-4 py-2 ${styles.customButton}`}>
                Get it Now
              </button>
            </Link>
          </div>
        </div>
      </section>

<section className="p-5">
  <div className="container">
    <div className="p-5 d-flex flex-column gap-4 gap-md-5 align-items-center flex-md-row justify-content-center">
      
      <div className="d-flex flex-column row-gap-4 row-gap-md-5">
        <div>
          <img src="/image1.svg" alt="" className={styles.customImg} />
        </div>
        <div>
          <img src="/image2.svg" alt="" className={styles.customImg} />
        </div>
      </div>

      <div className="d-flex flex-column row-gap-4 row-gap-md-5">
        <div>
          <img src="/image3.svg" alt="" className={styles.customImg} />
        </div>
        <div>
          <img src="/image4.svg" alt="" className={styles.customImg} />
        </div>
      </div>

    </div>
  </div>
</section>



      <section className="d-flex flex-column align-items-center justify-content-center py-5 px-3 px-md-5">
        <div className="d-flex flex-column align-items-center justify-content-center text-center w-100 px-2 px-md-5 px-lg-6">
          <div className="py-3">
            <h1 className="section-header">What our clients say</h1>
          </div>
          <div className="py-3">
            See what our customers say about us. It really matters to us. How
            good or bad we will use it for evaluation to make EhyalLive better.
          </div>
        </div>

        <div className="d-flex flex-column align-items-center flex-md-row justify-content-center gap-3 py-3 w-100">
          <div
            className={`${styles.cardContainer} d-flex flex-column h-100 w-100`}
          >
            <p className="text-warning fw-bold">
              starstar<span className="text-white">star</span>
            </p>
            <p className="mt-2">
              “I know in real-time where the money is spent, and I don’t have to
              lend out the company’s credit card anymore. What a relief!”
            </p>
            <div className="d-flex align-items-center mt-auto">
              <img
                src="/profile1.svg"
                alt="Denny Hilguston"
                width="40"
                height="40"
              />
              <div className="ms-3">
                <p className="mb-0 fw-semibold">Denny Hilguston</p>
                <p className="text-danger small">@denny.hill</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.cardContainer} d-flex flex-column h-100 w-100`}
          >
            <p className="text-warning fw-bold">
              starstar<span className="text-white">star</span>
            </p>
            <p className="mt-2">
              VISUALS are much better. The improvements in optics and resolution
              are much more than a modern console generation leap.
            </p>
            <div className="d-flex align-items-center mt-auto">
              <img
                src="/profile2.svg"
                alt="Vani Pandey"
                width="40"
                height="40"
              />
              <div className="ms-3">
                <p className="mb-0 fw-semibold">Vani Pandey</p>
                <p className="text-danger small">@vani.pandey</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.cardContainer} d-flex flex-column h-100 w-100`}
          >
            <p className="text-warning fw-bold">
              starstar<span className="text-white">star</span>
            </p>
            <p className="mt-2">
              I can actually see the improvement in the graphics, not having the
              external sensors is a big plus.
            </p>
            <div className="d-flex align-items-center mt-auto">
              <img
                src="/profile3.svg"
                alt="Milly Singh"
                width="40"
                height="40"
              />
              <div className="ms-3">
                <p className="mb-0 fw-semibold">Milly Singh</p>
                <p className="text-danger small">@milly.singh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
