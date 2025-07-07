import About from "@/components/about";
import Blogs from "@/components/Blogs";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageReveal from "@/components/ImageReveal";
import MainBanner from "@/components/MainBanner";
import Marquee from "@/components/marquee";

import Experience from "@/components/Model/Experience";
import Pricing from "@/components/Pricing";
import Secthree from "@/components/secthree";
import Sectwo from "@/components/sectwo";
import Team from "@/components/Team";
import Teamsec from "@/components/Teamsec";
import OurWork from "@/components/work";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | RizzNArt</title>
        <meta
          name="description"
          content="Rizznart delivers creative branding services and high-quality design that impress to boost your brand’s impact and visual appeal."
        />
        <meta
          name="google-site-verification"
          content="Vw8Mb1PQASI0J0UAhBVraLOUlo8DSoO2YjI12JqR5YM"
        />
      </Head>
      <Header />
      <section className="can-sec fixed top-0 h-screen w-full">
        <Canvas>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
      </section>

      <MainBanner />
      <Sectwo />
      <Secthree />
      <About />
      <Blogs />
      <Marquee />
      <Team />
      <Teamsec />
      <OurWork />
      <Contact />
      <Footer />
    </>
  );
}
