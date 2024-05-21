import HeroSection from "@/components/HeroSection/heroSection";
import Navbar from "@/components/NavBar/navBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ASD MEDS</title>
        <meta name="description" content="asd meds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <main
      className={``}
    >
      <HeroSection />
    </main>
    </>
    
  );
}
