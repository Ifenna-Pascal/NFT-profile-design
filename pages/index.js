import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Roadmap from "../components/Roadmap";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alpha Sheep Club</title>
        <meta
          name="description"
          content="Project of the future sheep shepherd, in a world ravaged by war, global warming and pollution."
        />
        <link rel="icon" href="/Logo1.png" />
      </Head>
      <main className="w-full h-full  bg-[#070707]">
        <Nav />
        <Hero />
        <About />
        <Gallery />
        <Roadmap />
        <Team />
        <Section2 />
        <FAQ />
        <Section />
        <Footer />
      </main>
    </div>
  );
}
