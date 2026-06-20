import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Staging } from "@/components/Staging";
import { Symptoms } from "@/components/Symptoms";
import { Risk } from "@/components/Risk";
import { SelfCheck } from "@/components/SelfCheck";
import { Takeaways } from "@/components/Takeaways";
import { Management } from "@/components/Management";
import { SpecialGroups } from "@/components/SpecialGroups";
import { FAQ } from "@/components/FAQ";
import { DoctorGuide } from "@/components/DoctorGuide";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Staging />
        <Symptoms />
        <Risk />
        <SelfCheck />
        <Takeaways />
        <Management />
        <SpecialGroups />
        <FAQ />
        <DoctorGuide />
      </main>
      <Footer />
    </>
  );
}
